const express = require('express');
const app = express();
require('./db-conn');
const Employee = require('./user-model');
const PORT = process.env.PORT || 9000;

app.use(express.json());

//ONBOARD NEW EMPLOYEE DATA
app.post("/employee", async (req, res) => {
    try {
        console.log(req.body);
        const employee = new Employee(req.body);
        const createEmployee = await employee.save();
        res.status(201).send(createEmployee);
    } catch (error) {
        res.status(400).send(error);
    }
})

//GET EMPLOYEES LIST
app.get("/employee", async (req, res) => {
    try {
        const getAllEmployee = await Employee.find();
        console.log(getAllEmployee)
        res.send(getAllEmployee)
    } catch (error) {
        res.send(error)
    }
})

//GET EMPLOYEE BY ID
app.get("/employee/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getEmployee = await Employee.findById(_id);
        console.log(getEmployee);

        if (!getEmployee) {
            return res.status(404).send();
        } else {
            res.send(getEmployee);
        }
    } catch (error) {
        res.status(500).send(error)
    }
})

//UPDATE EMPLOYEE BY ID
app.patch("/employee/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const updateEmployee = await Employee.findByIdAndUpdate(_id, req.body, {
            new: true
        })
        res.send(updateEmployee)
    } catch (error) {
        res.status(500).send(error)
    }
})

//DELETE EMPLOYEE BY ID
app.delete("/employee/:id", async (req, res) => {
    try {
        const deletStudent = await Employee.findByIdAndDelete(req.params.id);
        if (!req.params.id) {
            return res.status(400).send();
        }
        res.send(deletStudent)
    } catch (error) {
        res.status(500).send(error)
    }
})


const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`This app running on ${PORT}`);
        })
    } catch (error) {
        console.log(error.message)
    }
}

start();