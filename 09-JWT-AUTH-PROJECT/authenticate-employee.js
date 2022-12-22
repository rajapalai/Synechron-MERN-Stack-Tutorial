const express = require('express')
const app = express();
const db = require('./db-connection/db-config')
const PORT = process.env.PORT || 8000;
const jwt = require('jsonwebtoken')

const tokenSecret = "thisismysecretkey";
app.use(express.json())

const authenticateJwt = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, tokenSecret, (error, user) => {
            if (error)
                return res.sendStatus(403);
            res.user = user
            next();
        })
    } else {
        res.sendStatus(401);
    }
}

const employees = [
    {
        "name": "Raja",
        "salary": "50000",
        "designation": "Manager"
    },
    {
        "name": "Liza",
        "salary": "40000",
        "designation": "Developer"
    }
];


app.get('/employees', (req, res) => {
    res.send(employees)
});

app.post('/employee', authenticateJwt, (req, res) => {
    const { role } = req.user;
    if (role != 'admin') {
        return res.sendStatus(403)
    }
    const employee = req.body;
    employee.push(employee)
    res.send(`Employee added successfully..`)
    res.send(employee);
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