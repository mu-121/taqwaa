const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');
const Category = require('./models/Category');
const connectDB = require('./config/db');

dotenv.config({ path: 'backend/.env' });

connectDB();

const categories = [
  "HOT DEALS",
  "STARTERS",
  "PIZZAS",
  "BURGERS",
  "CHEEZY CRUNCH",
  "PASTAS",
  "SIDE CRAVING",
];

const products = [
  // SIGNATURE PIZZAS
  {
    name: "CROWN CRUST PIZZA",
    description: "Personalized Pizza with a Yummy Crust & Grilled Chicken, Onion, Tomato, Capsicum.",
    price: "1,450",
    image: "/Images/Pizza/p1.svg",
    category: "PIZZAS",
    subCategory: "SIGNATURE"
  },
  {
    name: "STUFF CRUST PIZZA",
    description: "Grilled Chicken, Green Olive, Mushroom, with the Great Crust with Cheese.",
    price: "1,450",
    image: "/Images/Pizza/p2.svg",
    category: "PIZZAS",
    subCategory: "SIGNATURE"
  },
  
  // CHEESY CRAVING
  {
    name: "SPECIAL CRAVING",
    description: "Enjoy our special chicken toppings with premium mozzarella cheese.",
    price: "1,450",
    image: "/Images/Pizza/p3.svg",
    category: "PIZZAS",
    subCategory: "CHEESY CRAVING"
  },
  {
    name: "CHICKEN EXTREME",
    description: "Loaded with extra chicken and cheese for extreme cravings.",
    price: "1,450",
    image: "/Images/Pizza/p4.svg",
    category: "PIZZAS",
    subCategory: "CHEESY CRAVING"
  },
  {
    name: "BEHARI KABAB",
    description: "Topped with authentic Behari Kabab and onions.",
    price: "1,450",
    image: "/Images/Pizza/p5.svg",
    category: "PIZZAS",
    subCategory: "CHEESY CRAVING"
  },

  // SUPER CRAVING
  {
    name: "CHICKEN SUPREME",
    description: "A combination of spicy chicken, black olives, capsicum, mushroom & onions.",
    price: "950",
    image: "/Images/Pizza/p6.svg",
    category: "PIZZAS",
    subCategory: "SUPER CRAVING"
  },
  {
    name: "CHICKEN TIKKA",
    description: "Authentic Pakistani Tikka flavor with onions.",
    price: "950",
    image: "/Images/Pizza/p7.svg",
    category: "PIZZAS",
    subCategory: "SUPER CRAVING"
  },
  {
    name: "CHICKEN FAJITA",
    description: "Mexican style chicken with capsicum and onions.",
    price: "950",
    image: "/Images/Pizza/p8.svg",
    category: "PIZZAS",
    subCategory: "SUPER CRAVING"
  },
  {
    name: "CHICKEN TANDOORI",
    description: "Traditional Tandoori chicken with a perfect blend of spices.",
    price: "950",
    image: "/Images/Pizza/p9.svg",
    category: "PIZZAS",
    subCategory: "SUPER CRAVING"
  },
  {
    name: "BLACK PEPPER TIKKA",
    description: "Chicken tikka marinated in black pepper for a unique kick.",
    price: "950",
    image: "/Images/Pizza/p10.svg",
    category: "PIZZAS",
    subCategory: "SUPER CRAVING"
  },
  {
    name: "BBQ",
    description: "Smoky BBQ chicken with onions and BBQ sauce.",
    price: "950",
    image: "/Images/Pizza/p11.svg",
    category: "PIZZAS",
    subCategory: "SUPER CRAVING"
  },
  {
    name: "CHICKEN PEPPERONI",
    description: "Classic chicken pepperoni with extra cheese.",
    price: "950",
    image: "/Images/Pizza/p12.svg",
    category: "PIZZAS",
    subCategory: "SUPER CRAVING"
  },
  {
    name: "CHEESE LOVER",
    description: "For the ultimate cheese experience.",
    price: "950",
    image: "/Images/Pizza/p13.svg",
    category: "PIZZAS",
    subCategory: "SUPER CRAVING"
  },
  {
    name: "HOT N SPICY",
    description: "Spicy chicken with green chilies and hot sauce.",
    price: "950",
    image: "/Images/Pizza/p14.svg",
    category: "PIZZAS",
    subCategory: "SUPER CRAVING"
  },
  {
    name: "SAUSAGE PIZZA",
    description: "Topped with juicy chicken sausages.",
    price: "950",
    image: "/Images/Pizza/p15.svg",
    category: "PIZZAS",
    subCategory: "SUPER CRAVING"
  },
  {
    name: "VEGETABLE PIZZA",
    description: "Fresh capsicum, mushrooms, olives, onions and tomatoes.",
    price: "950",
    image: "/Images/Pizza/p16.svg",
    category: "PIZZAS",
    subCategory: "SUPER CRAVING"
  },
  
  // STARTERS
  {
    name: "CHEESY STICKS",
    description: "Freshly baked bread filled with the cheese blend to satisfy your cravings, served with sauce.",
    price: "600",
    image: "/Images/Starters/s1.svg",
    category: "STARTERS",
    subCategory: "STARTERS"
  },
  {
    name: "CALZONE CHUNKS",
    description: "4/8 pcs stuffed calzone chunks served with sauce & fries.",
    price: "1,100",
    image: "/Images/Starters/s2.svg",
    category: "STARTERS",
    subCategory: "STARTERS"
  },
  {
    name: "OVEN BAKED WINGS",
    description: "4/8 pcs fresh oven baked wings served with dip sauce.",
    price: "550",
    image: "/Images/Starters/s3.svg",
    category: "STARTERS",
    subCategory: "STARTERS"
  },
  {
    name: "FLAMING WINGS",
    description: "Fresh oven baked wings tossed in hot peri peri sauce & served with dip sauce.",
    price: "600",
    image: "/Images/Starters/s4.svg",
    category: "STARTERS",
    subCategory: "STARTERS"
  },
  {
    name: "CRAVING ROLLS",
    description: "6 pcs rolls stuffed with yummiest mix served with dip sauce.",
    price: "600",
    image: "/Images/Starters/s5.svg",
    category: "STARTERS",
    subCategory: "STARTERS"
  },

  // BURGERS
  {
    name: "CAZINGO",
    description: "Scrumptious Burger with A Yummy Blend Of Grilled Chicken, Olives, Onion, Capsicum.",
    price: "500",
    image: "/Images/Burgers/b1.svg",
    category: "BURGERS",
    subCategory: "BURGERS"
  },
  {
    name: "WRAPZINGO",
    description: "Scrumptious Wrap with A Yummy Blend Of Grilled Chicken, Olives, Onion, Capsicum.",
    price: "600",
    image: "/Images/Burgers/b2.svg",
    category: "BURGERS",
    subCategory: "BURGERS"
  },
  {
    name: "SOLO BURGER",
    description: "Scrumptious Burger with A Yummy Blend Of Grilled Chicken, Olives, Onion, Capsicum.",
    price: "350",
    image: "/Images/Burgers/b3.svg",
    category: "BURGERS",
    subCategory: "BURGERS"
  },
  {
    name: "COMBO",
    description: "Fries and Drink Combo to complete your meal.",
    price: "250",
    image: "/Images/Burgers/b4.svg",
    category: "BURGERS",
    subCategory: "BURGERS"
  },

  // CHEEZY CRUNCH
  {
    name: "SPECIAL ROASTED PLATTER",
    description: "4 pcs behari rolls, 6 pcs wings with fries & dip sauce.",
    price: "1,150",
    image: "/Images/CheezyCrunch/c1.svg",
    category: "CHEEZY CRUNCH",
    subCategory: "CHEEZY CRUNCH"
  },
  {
    name: "CLASSIC ROLL PLATTER",
    description: "4 pcs behari rolls, 4 pcs arabic rolls served with fries & dip sauce.",
    price: "1,150",
    image: "/Images/CheezyCrunch/c2.svg",
    category: "CHEEZY CRUNCH",
    subCategory: "CHEEZY CRUNCH"
  },
  {
    name: "MEXICAN SANDWICH",
    description: "Black pepper chicken, veggies, sweet corn, and special dip in soft crispy buns with fries.",
    price: "850",
    image: "/Images/CheezyCrunch/c3.svg",
    category: "CHEEZY CRUNCH",
    subCategory: "CHEEZY CRUNCH"
  },
  {
    name: "PIZZA STACKER",
    description: "A unique blend of delicious sauce, crispy chicken and pizza crust.",
    price: "850",
    image: "/Images/CheezyCrunch/c4.svg",
    category: "CHEEZY CRUNCH",
    subCategory: "CHEEZY CRUNCH"
  },

  // PASTAS
  {
    name: "FETTUCCINE ALFREDO PASTA",
    description: "Fettuccine pasta tossed in creamy white sauce with mushrooms and chicken chunks.",
    price: "1,000",
    image: "/Images/Pastas/past1.svg",
    category: "PASTAS",
    subCategory: "PASTAS"
  },
  {
    name: "CRUNCHY CHICKEN PASTA",
    description: "Yummiest macaroni pasta in white sauce topped with crispy chicken & cheese.",
    price: "900",
    image: "/Images/Pastas/past2.svg",
    category: "PASTAS",
    subCategory: "PASTAS"
  },

  // SIDE CRAVING
  {
    name: "FRIED CHICK",
    description: "Crispy fried chicken piece.",
    price: "280",
    image: "/Images/SideCraving/side1.svg",
    category: "SIDE CRAVING",
    subCategory: "SIDE CRAVING"
  },
  {
    name: "NUGGETS",
    description: "10 pieces of crispy chicken nuggets.",
    price: "500",
    image: "/Images/SideCraving/side2.svg",
    category: "SIDE CRAVING",
    subCategory: "SIDE CRAVING"
  },
  {
    name: "FRIES",
    description: "Crispy golden french fries.",
    price: "200",
    image: "/Images/SideCraving/side3.svg",
    category: "SIDE CRAVING",
    subCategory: "SIDE CRAVING"
  },
  {
    name: "MAYO DIP SAUCE",
    description: "A rich, creamy, and velvety blend perfect for snacks.",
    price: "80",
    image: "/Images/SideCraving/side4.svg",
    category: "SIDE CRAVING",
    subCategory: "SIDE CRAVING"
  },
  {
    name: "DRINK",
    description: "Refreshing cold drink.",
    price: "90",
    image: "/Images/SideCraving/side5.svg",
    category: "SIDE CRAVING",
    subCategory: "SIDE CRAVING"
  },
  {
    name: "WATER",
    description: "Pure mineral water.",
    price: "60",
    image: "/Images/SideCraving/side6.svg",
    category: "SIDE CRAVING",
    subCategory: "SIDE CRAVING"
  },

  // HOT DEALS
  {
    name: "DROP 1 - DUO CRAVING",
    description: "2x Cazingo Burgers, Regular Fries, 2x Reg. Drinks",
    price: "1,150",
    image: "/Images/Craving/deal1.svg",
    category: "HOT DEALS",
    subCategory: "HOT DEALS"
  },
  {
    name: "DROP 2 - DUO KING",
    description: "2x Cazingo Burgers, 2x Pcs Chicken, Large Fries, 2x Reg. Drinks",
    price: "1,650",
    image: "/Images/Craving/deal2.svg",
    category: "HOT DEALS",
    subCategory: "HOT DEALS"
  },
  {
    name: "DROP 3 - TRIO CRAVING",
    description: "3x Cazingo Burger, Large Fries, 1x Liter Drink",
    price: "1,750",
    image: "/Images/Craving/d3.svg",
    category: "HOT DEALS",
    subCategory: "HOT DEALS"
  },
  {
    name: "DROP 4 - TRIO KING",
    description: "3x Cazingo Burgers, 3x Pcs Chicken, Large Fries, 1x Liter Drink",
    price: "2,000",
    image: "/Images/Craving/d44.svg",
    category: "HOT DEALS",
    subCategory: "HOT DEALS"
  },

  // CRAVE DEALS
  {
    name: "SOLO CRAVING",
    description: "6\" small pizza with regular drink.",
    price: "1,400",
    image: "/Images/Craving/solo1.svg",
    category: "HOT DEALS",
    subCategory: "CRAVE DEALS"
  },
  {
    name: "DUO CRAVING",
    description: "8\" regular pizza with 2x drinks.",
    price: "1,850",
   image: "/Images/Craving/solo2.svg",
    category: "HOT DEALS",
    subCategory: "CRAVE DEALS"
  },
  {
    name: "MEGA CRAVING",
    description: "12\" large pizza with 1 liter drink.",
    price: "2,450",
   image: "/Images/Craving/solo3.svg",
    category: "HOT DEALS",
    subCategory: "CRAVE DEALS"
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