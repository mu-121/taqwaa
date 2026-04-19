const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// @desc    Fetch favorite products
// @route   GET /api/products/favorites
router.get('/favorites', async (req, res, next) => {
  console.log('GET /api/products/favorites hit');
  try {
    const products = await Product.find({ isFavorite: true });
    res.json(products);
  } catch (error) {
    next(error);
  }
});

// @desc    Fetch all products
// @route   GET /api/products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Fetch single product
// @route   GET /api/products/:id
router.get('/:id', async (req, res, next) => {
  console.log('GET /api/products/:id hit with id:', req.params.id);
  
  if (!/^[0-9a-fA-F]{24}$/.test(req.params.id)) {
    console.log('Invalid ID format, skipping to next route');
    return next();
  }

  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    next(error);
  }
});

// @desc    Toggle product favorite status
// @route   PATCH /api/products/:id/toggle-favorite
router.patch('/:id/toggle-favorite', async (req, res, next) => {
  console.log('PATCH /api/products/:id/toggle-favorite hit with id:', req.params.id);
  
  if (!/^[0-9a-fA-F]{24}$/.test(req.params.id)) {
    return next();
  }

  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      product.isFavorite = !product.isFavorite;
      const updatedProduct = await product.save();
      res.json(updatedProduct);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
