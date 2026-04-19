const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String, required: true },
    image1: { type: String },
    category: { type: String, required: true },
    details: [String],
    isHotDeal: { type: Boolean, default: false },
    isFavorite: { type: Boolean, default: false },
    sizes: [
      {
        label: String,
        price: String,
      }
    ],
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
