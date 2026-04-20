const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables from .env file
dotenv.config({ path: path.resolve(__dirname, '.env') });

console.log('--- Email Configuration Test ---');
console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? '********' : 'MISSING');
console.log('EMAIL_SERVICE:', process.env.EMAIL_SERVICE);

async function testEmail() {
  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Taqwa-foods Test" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER, // Send to self
    subject: 'Nodemailer Configuration Test',
    text: 'If you receive this, your email configuration is working correctly!',
    html: '<b>If you receive this, your email configuration is working correctly!</b>',
  };

  try {
    console.log('Attempting to send test email...');
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Success! Email sent.');
    console.log('Message ID:', info.messageId);
    console.log('Response:', info.response);
  } catch (error) {
    console.error('❌ Failed to send email.');
    console.error('Error Name:', error.name);
    console.error('Error Message:', error.message);
    if (error.code) console.error('Error Code:', error.code);
    if (error.command) console.error('Error Command:', error.command);
    if (error.stack) console.error('Stack Trace:', error.stack);
  }
}

testEmail();
