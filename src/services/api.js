import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchProducts = async () => {
  const response = await api.get('/products');
  return response.data;
};

export const fetchCategories = async () => {
  const response = await api.get('/categories');
  return response.data;
};

export const fetchFavorites = async () => {
  const response = await api.get('/products/favorites');
  return response.data;
};

export const toggleProductFavorite = async (id) => {
  const response = await api.patch(`/products/${id}/toggle-favorite`);
  return response.data;
};

export const placeOrder = async (orderData) => {
  const response = await api.post('/orders', orderData);
  return response.data;
};

export default api;
