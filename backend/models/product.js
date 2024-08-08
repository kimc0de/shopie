const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: String,
  description: {
    type: string,
    required: true
  },
  richDescription: {
    type: string,
    default: ''
  },
  image: String,
  images: [{
    type: String
  }],
  brand: {
    type: string,
    default: ''
  },
  price: {
    type: Number,
    default: 0
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  countInStock: {
    type: Number,
    required: true,
    min: 0,
    max: 255,
  },
  rating: {
    type: Number,
    default: 0
  },
  numReviews: {
    type: Number,
    default: 0
  },
  isFeatured: {
    type: Boolean,
    default: false
  },
  dateCreated: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Product', productSchema);
