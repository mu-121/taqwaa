const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const { sendOrderConfirmationEmail } = require('../utils/emailService');

// @desc    Create new order
// @route   POST /api/orders
router.post('/', async (req, res) => {
  try {
    console.log('Incoming Order Payload:', JSON.stringify(req.body, null, 2));
    const { 
      customerInfo, 
      items, 
      totalAmount, 
      paymentMethod, 
      notes 
    } = req.body;

    if (!items || items.length === 0) {
      res.status(400).json({ message: 'No order items' });
      return;
    }

    const order = new Order({
      customerInfo,
      items,
      totalAmount,
      paymentMethod,
      notes,
    });

    const createdOrder = await order.save();

    // Send confirmation email asynchronously
    sendOrderConfirmationEmail(createdOrder);

    res.status(201).json(createdOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Get all orders (for admin)
// @route   GET /api/orders
router.get('/', async (req, res) => {
    try {
      const orders = await Order.find({}).sort({ createdAt: -1 });
      res.json(orders);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

module.exports = router;
