const axios = require('axios');

async function testPlaceOrder() {
  const orderData = {
    customerInfo: {
      name: 'Test Usman',
      email: 'usman53307@gmail.com',
      phone: '03331234567',
      address: 'Test Address 123'
    },
    items: [
      {
        productId: '662241517fbd260904836f36', // Use a valid product ID if possible, otherwise mock it
        name: 'Test Pizza',
        quantity: 1,
        price: 1200,
        style: 'MEDIUM',
        drink: '7UP'
      }
    ],
    totalAmount: 1200,
    paymentMethod: 'CASH ON DELIVERY',
    notes: 'Test note'
  };

  try {
    console.log('Placing test order...');
    const response = await axios.post('http://localhost:5000/api/orders', orderData);
    console.log('Order placed successfully!');
    console.log('Response:', response.data);
    console.log('Now check your email for the confirmation.');
  } catch (error) {
    console.error('Error placing order:', error.message);
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
    }
  }
}

testPlaceOrder();
