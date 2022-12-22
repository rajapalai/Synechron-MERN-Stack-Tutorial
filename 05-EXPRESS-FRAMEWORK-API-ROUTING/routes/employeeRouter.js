const express = require('express');
const router = express.Router();
const Employee = require('../model/employeeEntity');


//ONBOARD NEW EMPLOYEE DATA
router.post("/", (req, res) => {

    console.log(req.body);
    const employee = new Employee(req.body);
    employee.save(function (error) {
        if (error)
            res.status(500).send(`Error : ${error.message}`);
        res.send('Employee Onboard successfully')
    })
})

//GET EMPLOYEES LIST
router.get('/', (req, res) => {

    Employee.find(function (error, employee) {
        console.log(employee)
        if (error)
            res.status(500).send(`Error: ${error.message}`);
        res.send(employee)
    })
})

//GET EMPLOYEE BY ID
router.get('/:id', (req, res) => {

    const _id = req.params.id;
    Employee.findById(_id, function (error, employee) {
        console.log(employee)
        if (error)
            res.status(500).send(`Employee not found with this id`);
        res.send(employee)
    })
})


//UPDATE EMPLOYEE BY ID
router.patch("/:id", (req, res) => {

    const _id = req.params.id;
    const update = req.body;
    const option = { new: true }

    Employee.findByIdAndUpdate(_id, update, option, function (error, employee) {
        console.log(employee)
        console.log("Employee updated successfully")
        if (error)
            res.status(500).send(`Employee not found with this id`);
        res.send(employee)
    })
})

//DELETE EMPLOYEE BY ID
router.delete("/:id", (req, res) => {

    const _id = req.params.id;
    Employee.findByIdAndDelete(_id, function (error, employee) {
        console.log(employee)
        console.log("Employee Deleted successfully")
        if (error)
            res.status(500).send(`Employee not found with this id`);
        res.send("Employee data deleted successfully")
    })
})

//DELETE EMPLOYEE BY FIELD
router.delete("/", (req, res) => {

    const name = req.params.name;
    Employee.findOneAndRemove({name:name}, function (error, employee) {
        console.log(employee)
        console.log("Employee Deleted successfully")
        if (error)
            res.status(500).send(`Employee not found with this id`);
        res.send("Employee data deleted successfully")
    })
})

module.exports = router;