const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');
const Category = require('./models/Category');
const connectDB = require('./config/db');

dotenv.config();

connectDB();

const categories = [
  "HOT DEALS",
  "STARTERS",
  "PIZZAS",
  "BURGERS",
  "SANDWICHES",
  "PLATTER",
  "SIDES",
  "ADD ONS",
  "DRINKS",
];

const products = [
  {
    name: "CHEESE LOVERS PAIR",
    description: "Special deal for cheese lovers.",
    price: "1,400",
    image: "/Images/Craving/p11.svg",
    image1: "/Images/Craving/p22.svg",
    category: "HOT DEALS",
    details: ["1 Medium Cheese Avalanche", "1 Medium Truffle Temptation"],
    isHotDeal: true
  },
  {
    name: "CHEESE LOVERS PAIR",
    description: "Special deal for cheese lovers.",
    price: "1,400",
    image: "/Images/Craving/p11.svg",
    image1: "/Images/Craving/p22.svg",
    category: "HOT DEALS",
    details: ["1 Medium Cheese Avalanche", "1 Medium Truffle Temptation"],
    isHotDeal: true
  },
  {
    name: "CROWN CRUST",
    description: "Personalized Pizza with a Yummy Crust & Grilled Chicken, Onion, Tomato, Capsicum.",
    price: "1,400",
    image: "/Images/Craving/pizza1.svg",
    category: "PIZZAS",
  },
  {
    name: "CROWN CRUST",
    description: "Personalized Pizza with a Yummy Crust & Grilled Chicken, Onion, Tomato, Capsicum.",
    price: "1,400",
    image: "/Images/Craving/pizza1.svg",
    category: "PIZZAS",
  },
  {
    name: "STUFF CRUST PIZZA",
    description: "Grilled Chicken, Green Olive, Mushroom, with the Great Crust with Cheese.",
    price: "1,400",
    image: "/Images/Craving/pizza1.svg",
    category: "PIZZAS",
  },
  {
    name: "CROWN CRUST",
    description: "Personalized Pizza with a Yummy Crust & Grilled Chicken, Onion, Tomato, Capsicum.",
    price: "1,400",
    image: "/Images/Craving/pizza1.svg",
    category: "PIZZAS",
  },
];

const importData = async () => {
  try {
    await Product.deleteMany();
    await Category.deleteMany();

    const createdCategories = await Category.insertMany(
      categories.map((c) => ({ name: c }))
    );

    await Product.insertMany(products);

    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Product.deleteMany();
    await Category.deleteMany();
    await Order.deleteMany();

    console.log('Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
