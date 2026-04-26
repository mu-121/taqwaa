const axios = require('axios');

async function testBankOrder() {
  const orderData = {
    customerInfo: {
      name: 'Bank Transfer Tester',
      phone: '03331449995', // Same as business for testing
      address: 'Gulberg Residencia, Islamabad',
      email: 'usman53307@gmail.com' // Mock email
    },
    items: [
      {
        productId: '662241517fbd260904836f36',
        name: 'Bank Test Pizza',
        quantity: 2,
        price: 1500,
        style: 'LARGE',
        drink: 'PEPSI'
      }
    ],
    totalAmount: 3000,
    paymentMethod: 'BANK TRANSFER',
    notes: 'Testing bank transfer notification'
  };

  try {
    console.log('Placing test bank order...');
    const response = await axios.post('http://localhost:5000/api/orders', orderData);
    console.log('Order placed successfully!');
    console.log('Response:', response.data);
    console.log('Check server logs for Bank Details in Email/SMS.');
  } catch (error) {
    console.error('Error placing order:', error.message);
  }
}

testBankOrder();
