const express = require('express');

const Order = require('../models/order');
const OrderItem = require('../models/order-item');
const router = express.Router();

router.get('/', async (req, res) => {
    const orderList = await Order.find().populate('user', 'name').sort({'dateOrdered': -1}); //sort newest first

    if (!orderList) {
        res.status(500).json({success: false});
    }
    res.send(orderList);
});

router.get('/get/userorders/:userId', async (req, res) => {
    const orderList = await Order.find({user: req.params.userId}).populate({
        path: 'orderItems', populate: {
            path: 'product', populate: 'category'
        }
    }).sort({'dateOrdered': -1}); //sort newest first

    if (!orderList) {
        res.status(500).json({success: false});
    }
    res.send(orderList);
});

router.get('/:id', async (req, res) => {
    const order = await Order.findById(req.params.id)
      .populate('user', 'name')
      .populate({
          path: 'orderItems',
          populate: {
              path: 'product',
              populate: 'category'
          }
      });

    if (!order) {
        res.status(500).json({success: false});
    }
    res.send(order);
});

router.post('/', async (req, res) => {
    const orderItemsIds = Promise.all(req.body.orderItems.map(async (orderItem) => {
        let newOrderItem = new OrderItem({
            quantity: orderItem.quantity,
            product: orderItem.product
        });

        newOrderItem = await newOrderItem.save();

        return newOrderItem._id;
    }));

    const orderItemsIdsResolved = await orderItemsIds;

    const totalItemsPrice = await Promise.all(orderItemsIdsResolved.map(async (orderItemId) => {
        const orderItem = await OrderItem.findById(orderItemId).populate('product', 'price');

        return orderItem.product.price * orderItem.quantity;
    }));

    const totalPrice = totalItemsPrice.reduce((a, b) => a + b, 0);

    let order = new Order({
        city: req.body.city,
        country: req.body.country,
        orderItems: orderItemsIdsResolved,
        phone: req.body.phone,
        shippingAddress1: req.body.shippingAddress1,
        shippingAddress2: req.body.shippingAddress2,
        status: req.body.status,
        totalPrice: totalPrice,
        user: req.body.user,
        zip: req.body.zip,
    });

    order = await order.save();

    if (!order) {
        return res.status(404).send('The order cannot be created!');
    }
    res.send(order);
})

router.put('/:id', async (req, res) => {
    const order = await Order.findByIdAndUpdate(req.params.id, {
        status: req.body.status
    }, {new: true});

    if (!order) {
        return res.status(404).send('The order cannot be updated!');
    }
    res.send(order);
});

router.delete('/:id', async (req, res) => {
    Order.findByIdAndDelete(req.params.id).then(async (order) => {
        if(order) {
            await order.orderItems.map(async (orderItem) => {
                await OrderItem.findByIdAndDelete(orderItem);
            })
            return res.status(200).json({success: true, message: 'the order is deleted!'})
        } else {
            return res.status(404).json({success: false , message: "order not found!"})
        }
    }).catch(err => {
        return res.status(400).json({success: false, error: err});
    });
});

router.get('/get/totalsales', async (req, res) => {
    const totalSales = await Order.aggregate([
        {
            $group: {
                _id: null,
                totalsales: {
                    $sum: '$totalPrice'
                }
            }
        }
    ]);

    if (!totalSales) {
        return res.status(400).send('The order sales cannot be generated!');
    }

    res.send({totalsales: totalSales.pop().totalsales});
});

router.get('/get/count', async (req, res) => {
    const orderCount = await Order.countDocuments((count) => count);

    if (!orderCount) {
        res.status(500).json({success: false});
    }
    res.send({
        orderCount: orderCount
    });
});


module.exports = router;
