const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const Category = require('../models/category');
const mongoose = require('mongoose');

router.get('/', async (req, res) => {
  let filter = {};

  if (req.query.categories) {
    filter = { category: req.query.categories.split(',') };
  }

  const productList = await Product.find(filter).populate('category');

  if (!productList) {
    res.status(500).json({ success: false });
  }
  res.send(productList);
});

router.get('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id).populate('category');

  if (!product) {
    res.status(500).json({ success: false });
  }
  res.send(product);
});

router.post('/', async (req, res) => {
  const category = await Category.findById(req.body.category);
  if (!category) {
    res.status(400).send('Invalid Category');
  }

  let product = new Product({
    brand: req.body.brand,
    category: req.body.category,
    countInStock: req.body.countInStock,
    description: req.body.description,
    image: req.body.image,
    isFeatured: req.body.isFeatured,
    name: req.body.name,
    numReviews: req.body.numReviews,
    price: req.body.price,
    rating: req.body.rating,
    richDescription: req.body.richDescription,
  });

  product = await product.save();

  if (!product) {
    res.status(500).send('The product cannot be created')
  }

  res.send(product);
});

router.put('/:id', async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    res.status(400).send('Invalid Product Id');
  }

  const category = await Category.findById(req.body.category);
  if (!category) {
    res.status(400).send('Invalid Category');
  }

  const product = await Product.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      brand: req.body.brand,
      category: req.body.category,
      countInStock: req.body.countInStock,
      description: req.body.description,
      image: req.body.image,
      isFeatured: req.body.isFeatured,
      numReviews: req.body.numReviews,
      price: req.body.price,
      rating: req.body.rating,
      richDescription: req.body.richDescription,
    },
    {new: true}
  );

  if (!product) {
    return res.status(404).send('The product cannot be updated!');
  }

  res.send(product);
});

router.delete('/:id', (req, res) => {
  Product.findByIdAndDelete(req.params.id).then(product => {
    if (product) {
      return res.status(200).json({ success: true, message: 'The product is deleted!' });
    } else {
      return res.status(404).json({ success: false, message: 'Product not found!' });
    }
  }).catch(err => {
    return res.status(400).json({ success: false, error: err });
  });
});

router.get('/get/count', async (req, res) => {
  const productCount = await Product.countDocuments();

  if (!productCount) {
    res.status(500).json({ success: false });
  }
  res.send({
    productCount: productCount,
  });
});

router.get('/get/featured', async (req, res) => {
  const productCount = await Product.find({ isFeatured: true });

  if (!productCount) {
    res.status(500).json({ success: false });
  }

  res.send(productCount);
});

router.get('/get/featured/:count', async (req, res) => {
  const count = req.params.count ? req.params.count : 0;
  const products = await Product.find({ isFeatured: true }).limit(+count);

  if (!products) {
    res.status(500).json({ success: false });
  }
  res.send(products);
});

module.exports = router;
