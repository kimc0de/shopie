const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const Category = require('../models/category');
const mongoose = require('mongoose');
const multer = require('multer');

const FILE_TYPE_MAP = {
  'image/png': 'png',
  'image/jpeg': 'jpeg',
  'image/jpg': 'jpg',
};

// Configure file name so that it is unique
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const isValid = FILE_TYPE_MAP[file.mimetype];
    let uploadError = new Error('Invalid image type');

    if (isValid) {
      uploadError = null;
    }

    cb(uploadError, 'public/uploads')
  },
  filename: function (req, file, cb) {
    // replace the space with - and remove extension from the original file name to add it at the end
    const fileName = file.originalname.split(' ').join('-').split('.').slice(0, -1).join('.');
    const extension = FILE_TYPE_MAP[file.mimetype];
    cb(null, `${fileName}-${Date.now()}.${extension}`)
  }
})

const upload = multer({ storage: storage })

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

router.post('/', upload.single('image'), async (req, res) => {
  const category = await Category.findById(req.body.category);
  if (!category) {
    res.status(400).send('Invalid Category');
  }

  const file = req.file;
  if (!file) {
    return res.status(400).send('No image in the request');
  }

  const imageFileName = req.file.filename;
  const basePath = `${req.protocol}://${req.get('host')}/public/uploads/`;

  let product = new Product({
    brand: req.body.brand,
    category: req.body.category,
    countInStock: req.body.countInStock,
    description: req.body.description,
    image: `${basePath}${imageFileName}`, // example: http://localhost:3000/public/uploads/image-2323232
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

  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(400).send('Invalid Product');
  }

  const category = await Category.findById(req.body.category);
  if (!category) {
    res.status(400).send('Invalid Category');
  }

  const file = req.file;
  let imagePath;

  if (file) {
    const imageFileName = req.file.filename;
    const basePath = `${req.protocol}://${req.get('host')}/public/uploads/`;
    imagePath = `${basePath}${imageFileName}`;
  } else {
    imagePath = product.image;
  }

  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      brand: req.body.brand,
      category: req.body.category,
      countInStock: req.body.countInStock,
      description: req.body.description,
      image: imagePath,
      isFeatured: req.body.isFeatured,
      numReviews: req.body.numReviews,
      price: req.body.price,
      rating: req.body.rating,
      richDescription: req.body.richDescription,
    },
    {new: true}
  );

  if (!updatedProduct) {
    return res.status(404).send('The product cannot be updated!');
  }

  res.send(updatedProduct);
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
