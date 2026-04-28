import { categories as localCategories, products as localProducts } from '../data/menuData';
import { db } from './firebase';
import { 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  where, 
  orderBy, 
  limit,
  serverTimestamp 
} from "firebase/firestore";

// Fetch products from local data (could be moved to Firestore later)
export const fetchProducts = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(localProducts), 300);
  });
};

export const fetchCategories = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(localCategories), 300);
  });
};

// Calculate favorites based on order frequency from Firebase
export const fetchFavorites = async (categoryName = null) => {
  try {
    const ordersCol = collection(db, "orders");
    const snapshot = await getDocs(ordersCol);
    
    const productCounts = {};
    
    snapshot.docs.forEach(doc => {
      const data = doc.data();
      if (data.items) {
        data.items.forEach(item => {
          const pid = item.productId;
          if (!productCounts[pid]) {
            productCounts[pid] = {
              count: 0,
              name: item.name,
              category: item.category,
              productId: pid
            };
          }
          productCounts[pid].count += (item.quantity || 1);
        });
      }
    });

    let aggregatedProducts = Object.values(productCounts);

    if (categoryName) {
      aggregatedProducts = aggregatedProducts.filter(p => p.category === categoryName);
    }

    // Sort by count descending
    aggregatedProducts.sort((a, b) => b.count - a.count);

    // Map back to full product data from local menuData
    const topProducts = aggregatedProducts.map(agg => {
      const fullProduct = localProducts.find(p => p._id === agg.productId || p.id === agg.productId);
      return { ...fullProduct, orderCount: agg.count };
    }).filter(p => p._id); // Ensure we found the product

    return topProducts;
  } catch (error) {
    console.error("Error fetching favorites from Firebase:", error);
    // Fallback to local isFavorite flag if Firebase fails
    return localProducts.filter(p => p.isFavorite && (!categoryName || p.category === categoryName));
  }
};

// Utility to remove undefined values for Firestore
const cleanData = (obj) => {
  const newObj = Array.isArray(obj) ? [] : {};
  Object.keys(obj).forEach((key) => {
    if (obj[key] === undefined) return;
    if (obj[key] !== null && typeof obj[key] === "object") {
      newObj[key] = cleanData(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  });
  return newObj;
};

export const placeOrder = async (orderData) => {
  try {
    const cleanedOrder = cleanData(orderData);
    const ordersCol = collection(db, "orders");
    const docRef = await addDoc(ordersCol, {
      ...cleanedOrder,
      createdAt: serverTimestamp()
    });
    return { _id: docRef.id, ...cleanedOrder };
  } catch (error) {
    console.error("Error placing order in Firebase:", error);
    throw error;
  }
};

export default {
  fetchProducts,
  fetchCategories,
  fetchFavorites,
  placeOrder
};
