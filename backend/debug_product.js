const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const checkProduct = async () => {
    try {
        const id = '69e4c49c0e8571f33904e004';
        const product = await Product.findById(id);
        if (product) {
            console.log('Product Found:', product.name);
        } else {
            console.log('Product NOT Found with ID:', id);
            const allProducts = await Product.find({}).limit(5);
            console.log('Sample IDs in DB:', allProducts.map(p => p._id));
        }
        process.exit();
    } catch (err) {
        console.error('Error:', err.message);
        process.exit(1);
    }
};

checkProduct();
