export const categories = [
  { _id: '1', name: "HOT DEALS" },
  { _id: '2', name: "STARTERS" },
  { _id: '3', name: "PIZZAS" },
  { _id: '4', name: "BURGERS" },
  { _id: '5', name: "CHEEZY CRUNCH" },
  { _id: '6', name: "PASTAS" },
  { _id: '7', name: "SIDE CRAVING" },
];

export const products = [
  // SIGNATURE PIZZAS
  {
    _id: 'p1',
    name: "CROWN CRUST PIZZA",
    description: "Personalized Pizza with a Yummy Crust & Grilled Chicken, Onion, Tomato, Capsicum.",
    price: "1,450",
    image: "/Images/Pizza/p1.svg",
    category: "PIZZAS",
    subCategory: "SIGNATURE",
    isFavorite: true,
    orderCount: 15
  },
  {
    _id: 'p2',
    name: "STUFF CRUST PIZZA",
    description: "Grilled Chicken, Green Olive, Mushroom, with the Great Crust with Cheese.",
    price: "1,450",
    image: "/Images/Pizza/p2.svg",
    category: "PIZZAS",
    subCategory: "SIGNATURE",
    isFavorite: true,
    orderCount: 12
  },
  
  // CHEESY CRAVING
  {
    _id: 'p3',
    name: "SPECIAL CRAVING",
    description: "Enjoy our special chicken toppings with premium mozzarella cheese.",
    price: "1,450",
    image: "/Images/Pizza/p3.svg",
    category: "PIZZAS",
    subCategory: "CHEESY CRAVING",
    isFavorite: true,
    orderCount: 10
  },
  {
    _id: 'p4',
    name: "CHICKEN EXTREME",
    description: "Loaded with extra chicken and cheese for extreme cravings.",
    price: "1,450",
    image: "/Images/Pizza/p4.svg",
    category: "PIZZAS",
    subCategory: "CHEESY CRAVING"
  },
  {
    _id: 'p5',
    name: "BEHARI KABAB",
    description: "Topped with authentic Behari Kabab and onions.",
    price: "1,450",
    image: "/Images/Pizza/p5.svg",
    category: "PIZZAS",
    subCategory: "CHEESY CRAVING"
  },

  // SUPER CRAVING
  {
    _id: 'p6',
    name: "CHICKEN SUPREME",
    description: "A combination of spicy chicken, black olives, capsicum, mushroom & onions.",
    price: "950",
    image: "/Images/Pizza/p6.svg",
    category: "PIZZAS",
    subCategory: "SUPER CRAVING"
  },
  {
    _id: 'p7',
    name: "CHICKEN TIKKA",
    description: "Authentic Pakistani Tikka flavor with onions.",
    price: "950",
    image: "/Images/Pizza/p7.svg",
    category: "PIZZAS",
    subCategory: "SUPER CRAVING"
  },
  {
    _id: 'p8',
    name: "CHICKEN FAJITA",
    description: "Mexican style chicken with capsicum and onions.",
    price: "950",
    image: "/Images/Pizza/p8.svg",
    category: "PIZZAS",
    subCategory: "SUPER CRAVING"
  },
  {
    _id: 'p9',
    name: "CHICKEN TANDOORI",
    description: "Traditional Tandoori chicken with a perfect blend of spices.",
    price: "950",
    image: "/Images/Pizza/p9.svg",
    category: "PIZZAS",
    subCategory: "SUPER CRAVING"
  },
  {
    _id: 'p10',
    name: "BLACK PEPPER TIKKA",
    description: "Chicken tikka marinated in black pepper for a unique kick.",
    price: "950",
    image: "/Images/Pizza/p10.svg",
    category: "PIZZAS",
    subCategory: "SUPER CRAVING"
  },
  {
    _id: 'p11',
    name: "BBQ",
    description: "Smoky BBQ chicken with onions and BBQ sauce.",
    price: "950",
    image: "/Images/Pizza/p11.svg",
    category: "PIZZAS",
    subCategory: "SUPER CRAVING"
  },
  {
    _id: 'p12',
    name: "CHICKEN PEPPERONI",
    description: "Classic chicken pepperoni with extra cheese.",
    price: "950",
    image: "/Images/Pizza/p12.svg",
    category: "PIZZAS",
    subCategory: "SUPER CRAVING"
  },
  {
    _id: 'p13',
    name: "CHEESE LOVER",
    description: "For the ultimate cheese experience.",
    price: "950",
    image: "/Images/Pizza/p13.svg",
    category: "PIZZAS",
    subCategory: "SUPER CRAVING"
  },
  {
    _id: 'p14',
    name: "HOT N SPICY",
    description: "Spicy chicken with green chilies and hot sauce.",
    price: "950",
    image: "/Images/Pizza/p14.svg",
    category: "PIZZAS",
    subCategory: "SUPER CRAVING"
  },
  {
    _id: 'p15',
    name: "SAUSAGE PIZZA",
    description: "Topped with juicy chicken sausages.",
    price: "950",
    image: "/Images/Pizza/p15.svg",
    category: "PIZZAS",
    subCategory: "SUPER CRAVING"
  },
  {
    _id: 'p16',
    name: "VEGETABLE PIZZA",
    description: "Fresh capsicum, mushrooms, olives, onions and tomatoes.",
    price: "950",
    image: "/Images/Pizza/p16.svg",
    category: "PIZZAS",
    subCategory: "SUPER CRAVING"
  },
  
  // STARTERS
  {
    _id: 's1',
    name: "CHEESY STICKS",
    description: "Freshly baked bread filled with the cheese blend to satisfy your cravings, served with sauce.",
    price: "600",
    image: "/Images/Starters/s1.svg",
    category: "STARTERS",
    subCategory: "STARTERS"
  },
  {
    _id: 's2',
    name: "CALZONE CHUNKS",
    description: "4/8 pcs stuffed calzone chunks served with sauce & fries.",
    price: "1,100",
    image: "/Images/Starters/s2.svg",
    category: "STARTERS",
    subCategory: "STARTERS"
  },
  {
    _id: 's3',
    name: "OVEN BAKED WINGS",
    description: "4/8 pcs fresh oven baked wings served with dip sauce.",
    price: "550",
    image: "/Images/Starters/s3.svg",
    category: "STARTERS",
    subCategory: "STARTERS"
  },
  {
    _id: 's4',
    name: "FLAMING WINGS",
    description: "Fresh oven baked wings tossed in hot peri peri sauce & served with dip sauce.",
    price: "600",
    image: "/Images/Starters/s4.svg",
    category: "STARTERS",
    subCategory: "STARTERS"
  },
  {
    _id: 's5',
    name: "CRAVING ROLLS",
    description: "6 pcs rolls stuffed with yummiest mix served with dip sauce.",
    price: "600",
    image: "/Images/Starters/s5.svg",
    category: "STARTERS",
    subCategory: "STARTERS"
  },

  // BURGERS
  {
    _id: 'b1',
    name: "CAZINGO",
    description: "Scrumptious Burger with A Yummy Blend Of Grilled Chicken, Olives, Onion, Capsicum.",
    price: "500",
    image: "/Images/Burgers/b1.svg",
    category: "BURGERS",
    subCategory: "BURGERS"
  },
  {
    _id: 'b2',
    name: "WRAPZINGO",
    description: "Scrumptious Wrap with A Yummy Blend Of Grilled Chicken, Olives, Onion, Capsicum.",
    price: "600",
    image: "/Images/Burgers/b2.svg",
    category: "BURGERS",
    subCategory: "BURGERS"
  },
  {
    _id: 'b3',
    name: "SOLO BURGER",
    description: "Scrumptious Burger with A Yummy Blend Of Grilled Chicken, Olives, Onion, Capsicum.",
    price: "350",
    image: "/Images/Burgers/b3.svg",
    category: "BURGERS",
    subCategory: "BURGERS"
  },
  {
    _id: 'b4',
    name: "COMBO",
    description: "Fries and Drink Combo to complete your meal.",
    price: "250",
    image: "/Images/Burgers/b4.svg",
    category: "BURGERS",
    subCategory: "BURGERS"
  },

  // CHEEZY CRUNCH
  {
    _id: 'c1',
    name: "SPECIAL ROASTED PLATTER",
    description: "4 pcs behari rolls, 6 pcs wings with fries & dip sauce.",
    price: "1,150",
    image: "/Images/CheezyCrunch/c1.svg",
    category: "CHEEZY CRUNCH",
    subCategory: "CHEEZY CRUNCH"
  },
  {
    _id: 'c2',
    name: "CLASSIC ROLL PLATTER",
    description: "4 pcs behari rolls, 4 pcs arabic rolls served with fries & dip sauce.",
    price: "1,150",
    image: "/Images/CheezyCrunch/c2.svg",
    category: "CHEEZY CRUNCH",
    subCategory: "CHEEZY CRUNCH"
  },
  {
    _id: 'c3',
    name: "MEXICAN SANDWICH",
    description: "Black pepper chicken, veggies, sweet corn, and special dip in soft crispy buns with fries.",
    price: "850",
    image: "/Images/CheezyCrunch/c3.svg",
    category: "CHEEZY CRUNCH",
    subCategory: "CHEEZY CRUNCH"
  },
  {
    _id: 'c4',
    name: "PIZZA STACKER",
    description: "A unique blend of delicious sauce, crispy chicken and pizza crust.",
    price: "850",
    image: "/Images/CheezyCrunch/c4.svg",
    category: "CHEEZY CRUNCH",
    subCategory: "CHEEZY CRUNCH"
  },

  // PASTAS
  {
    _id: 'pa1',
    name: "FETTUCCINE ALFREDO PASTA",
    description: "Fettuccine pasta tossed in creamy white sauce with mushrooms and chicken chunks.",
    price: "1,000",
    image: "/Images/Pastas/past1.svg",
    category: "PASTAS",
    subCategory: "PASTAS"
  },
  {
    _id: 'pa2',
    name: "CRUNCHY CHICKEN PASTA",
    description: "Yummiest macaroni pasta in white sauce topped with crispy chicken & cheese.",
    price: "900",
    image: "/Images/Pastas/past2.svg",
    category: "PASTAS",
    subCategory: "PASTAS"
  },

  // SIDE CRAVING
  {
    _id: 'sc1',
    name: "FRIED CHICK",
    description: "Crispy fried chicken piece.",
    price: "280",
    image: "/Images/SideCraving/side1.svg",
    category: "SIDE CRAVING",
    subCategory: "SIDE CRAVING"
  },
  {
    _id: 'sc2',
    name: "NUGGETS",
    description: "10 pieces of crispy chicken nuggets.",
    price: "500",
    image: "/Images/SideCraving/side2.svg",
    category: "SIDE CRAVING",
    subCategory: "SIDE CRAVING"
  },
  {
    _id: 'sc3',
    name: "FRIES",
    description: "Crispy golden french fries.",
    price: "200",
    image: "/Images/SideCraving/side3.svg",
    category: "SIDE CRAVING",
    subCategory: "SIDE CRAVING"
  },
  {
    _id: 'sc4',
    name: "MAYO DIP SAUCE",
    description: "A rich, creamy, and velvety blend perfect for snacks.",
    price: "80",
    image: "/Images/SideCraving/side4.svg",
    category: "SIDE CRAVING",
    subCategory: "SIDE CRAVING"
  },
  {
    _id: 'sc5',
    name: "DRINK",
    description: "Refreshing cold drink.",
    price: "90",
    image: "/Images/SideCraving/side5.svg",
    category: "SIDE CRAVING",
    subCategory: "SIDE CRAVING"
  },
  {
    _id: 'sc6',
    name: "WATER",
    description: "Pure mineral water.",
    price: "60",
    image: "/Images/SideCraving/side6.svg",
    category: "SIDE CRAVING",
    subCategory: "SIDE CRAVING"
  },

  // HOT DEALS
  {
    _id: 'd1',
    name: "DROP 1 - DUO CRAVING",
    description: "2x Cazingo Burgers, Regular Fries, 2x Reg. Drinks",
    price: "1,150",
    image: "/Images/Craving/deal1.svg",
    category: "HOT DEALS",
    subCategory: "HOT DEALS"
  },
  {
    _id: 'd2',
    name: "DROP 2 - DUO KING",
    description: "2x Cazingo Burgers, 2x Pcs Chicken, Large Fries, 2x Reg. Drinks",
    price: "1,650",
    image: "/Images/Craving/deal2.svg",
    category: "HOT DEALS",
    subCategory: "HOT DEALS"
  },
  {
    _id: 'd3',
    name: "DROP 3 - TRIO CRAVING",
    description: "3x Cazingo Burger, Large Fries, 1x Liter Drink",
    price: "1,750",
    image: "/Images/Craving/d3.svg",
    category: "HOT DEALS",
    subCategory: "HOT DEALS"
  },
  {
    _id: 'd4',
    name: "DROP 4 - TRIO KING",
    description: "3x Cazingo Burgers, 3x Pcs Chicken, Large Fries, 1x Liter Drink",
    price: "2,000",
    image: "/Images/Craving/d44.svg",
    category: "HOT DEALS",
    subCategory: "HOT DEALS"
  },

  // CRAVE DEALS
  {
    _id: 'cd1',
    name: "SOLO CRAVING",
    description: "6\" small pizza with regular drink.",
    price: "1,400",
    image: "/Images/Craving/solo1.svg",
    category: "HOT DEALS",
    subCategory: "CRAVE DEALS"
  },
  {
    _id: 'cd2',
    name: "DUO CRAVING",
    description: "8\" regular pizza with 2x drinks.",
    price: "1,850",
    image: "/Images/Craving/solo2.svg",
    category: "HOT DEALS",
    subCategory: "CRAVE DEALS"
  },
  {
    _id: 'cd3',
    name: "MEGA CRAVING",
    description: "12\" large pizza with 1 liter drink.",
    price: "2,450",
    image: "/Images/Craving/solo3.svg",
    category: "HOT DEALS",
    subCategory: "CRAVE DEALS"
  },
];
