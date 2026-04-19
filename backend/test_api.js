const axios = require('axios');

const testToggle = async () => {
    try {
        const id = '69e4c49c0e8571f33904e004';
        console.log(`Testing PATCH /api/products/${id}/toggle-favorite...`);
        const response = await axios.patch(`http://localhost:5000/api/products/${id}/toggle-favorite`);
        console.log('Success!', response.data.name, 'isFavorite:', response.data.isFavorite);
    } catch (err) {
        console.error('Error Status:', err.response?.status);
        console.error('Error Data:', err.response?.data);
        console.error('Error Message:', err.message);
    }
};

testToggle();
