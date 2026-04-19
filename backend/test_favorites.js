const axios = require('axios');

const testFavorites = async () => {
    try {
        console.log('Testing GET /api/products/favorites...');
        const response = await axios.get('http://localhost:5000/api/products/favorites');
        console.log('Success! Count:', response.data.length);
        console.log('Data:', JSON.stringify(response.data, null, 2));
    } catch (err) {
        console.error('Error Status:', err.response?.status);
        console.error('Error Data:', err.response?.data);
        console.error('Error Message:', err.message);
    }
};

testFavorites();
