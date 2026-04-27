import { categories, products } from '../data/menuData';

// Mocking API responses using local data
export const fetchProducts = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 300);
  });
};

export const fetchCategories = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(categories), 300);
  });
};

export const fetchFavorites = async () => {
  return new Promise((resolve) => {
    const favorites = products.filter(p => p.isFavorite);
    setTimeout(() => resolve(favorites), 300);
  });
};

export const toggleProductFavorite = async (id) => {
  return new Promise((resolve) => {
    const product = products.find(p => p._id === id);
    if (product) {
      product.isFavorite = !product.isFavorite;
    }
    setTimeout(() => resolve(product), 300);
  });
};

export const placeOrder = async (orderData) => {
  return new Promise((resolve) => {
    console.log('Order Placed Successfully (Local):', orderData);
    // Simulate back-end response
    const mockResponse = {
      ...orderData,
      _id: 'ORD' + Math.floor(100000 + Math.random() * 900000),
      createdAt: new Date().toISOString()
    };
    setTimeout(() => resolve(mockResponse), 500);
  });
};

export default {
  fetchProducts,
  fetchCategories,
  fetchFavorites,
  toggleProductFavorite,
  placeOrder
};

