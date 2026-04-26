const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');
const connectDB = require('./config/db');

dotenv.config();

const run = async () => {
  await connectDB();
  const pizzaProducts = await Product.find({ category: 'PIZZAS' });
  console.log(`Found ${pizzaProducts.length} pizza products.`);
  if (pizzaProducts.length > 0) {
    console.log('First 3 Pizza Products:');
    console.log(JSON.stringify(pizzaProducts.slice(0, 3), null, 2));
  }
  process.exit();
};

run();
