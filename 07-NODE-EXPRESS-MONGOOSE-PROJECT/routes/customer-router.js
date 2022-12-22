const express = require('express');
const Customer = require('../model/customer-model');
const router = express.Router();

router.get('/', async (req, res) => {
    const customer = await Customer.find();
    res.send(customer);
})

router.get('/add-customer', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

router.post('/', async (req, res) => {
    const customer = new Customer(
        {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            address: req.body.address,
            age: req.body.age
        })
    await customer.save();
    res.send(customer);
})

module.exports = router;