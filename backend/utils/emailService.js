const nodemailer = require('nodemailer');

const sendOrderConfirmationEmail = async (order) => {
  try {
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE || 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const itemsHtml = order.items
      .map(
        (item) => `
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #eee;">
          <strong>${item.name}</strong><br>
          <small>${item.style || ''} ${item.drink ? `+ ${item.drink}` : ''}</small>
        </td>
        <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: center;">${item.quantity}</td>
        <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">Rs. ${item.price.toLocaleString()}</td>
      </tr>
    `
      )
      .join('');

    const mailOptions = {
      from: `"Taqwa-foods" <${process.env.EMAIL_USER}>`,
      to: order.customerInfo.email,
      subject: `Order Confirmation - Taqwa-foods (#${order._id.toString().slice(-6).toUpperCase()})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 10px; overflow: hidden;">
          <div style="background-color: #441803; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">Taqwa-foods</h1>
            <p style="margin: 5px 0 0;">Thank you for your order!</p>
          </div>
          
          <div style="padding: 20px;">
            <h2 style="color: #441803;">Order Details</h2>
            <p><strong>Order ID:</strong> #${order._id}</p>
            <p><strong>Date:</strong> ${new Date(order.createdAt).toLocaleString()}</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
              <thead>
                <tr style="background-color: #f9f9f9;">
                  <th style="padding: 10px; text-align: left; border-bottom: 2px solid #441803;">Item</th>
                  <th style="padding: 10px; text-align: center; border-bottom: 2px solid #441803;">Qty</th>
                  <th style="padding: 10px; text-align: right; border-bottom: 2px solid #441803;">Price</th>
                </tr>
              </thead>
              <tbody>
                ${itemsHtml}
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="2" style="padding: 10px; text-align: right; font-weight: bold;">Total Amount:</td>
                  <td style="padding: 10px; text-align: right; font-weight: bold; color: #441803; font-size: 1.2em;">Rs. ${order.totalAmount.toLocaleString()}</td>
                </tr>
              </tfoot>
            </table>

            <div style="margin-top: 30px; padding: 15px; background-color: #fdf5f2; border-radius: 8px;">
              <h3 style="margin-top: 0; color: #441803;">Delivery Information</h3>
              <p style="margin: 5px 0;"><strong>Customer:</strong> ${order.customerInfo.name}</p>
              <p style="margin: 5px 0;"><strong>Address:</strong> ${order.customerInfo.address}</p>
              <p style="margin: 5px 0;"><strong>Phone:</strong> ${order.customerInfo.phone}</p>
              <p style="margin: 5px 0;"><strong>Payment Method:</strong> ${order.paymentMethod}</p>
            </div>

            <p style="margin-top: 30px; text-align: center; color: #777; font-size: 12px;">
              Your order is being prepared and will be delivered in approximately 45 minutes.<br>
              If you have any questions, please contact us at support@taqwafoods.com
            </p>
          </div>
          
          <div style="background-color: #f4f4f4; padding: 10px; text-align: center; font-size: 12px; color: #999;">
            &copy; ${new Date().getFullYear()} Taqwa-foods. All rights reserved.
          </div>
        </div>
      `,
    };

    console.log('Attempting to send email to:', order.customerInfo.email);
    const info = await transporter.sendMail(mailOptions);
    console.log('Order confirmation email sent successfully!');
    console.log('Message ID:', info.messageId);
    console.log('Response:', info.response);
  } catch (error) {
    console.error('CRITICAL: Error sending order confirmation email');
    console.error('Error Name:', error.name);
    console.error('Error Message:', error.message);
    if (error.code) console.error('Error Code:', error.code);
    if (error.command) console.error('Error Command:', error.command);
    // We don't want to throw error here because the order is already saved in DB
  }
};

module.exports = { sendOrderConfirmationEmail };
