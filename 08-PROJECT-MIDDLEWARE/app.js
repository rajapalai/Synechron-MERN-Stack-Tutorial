const express = require('express')
const app = express();
const db = require('./db-connection/db-config')
const PORT = process.env.PORT || 9000;

const requireJSONContent = () => {
    return (req, res, next) => {
        if (req.headers['content-type'] != "application/json") {
            res.status(400).send('Server requires application/json');
        } if (req.headers['content-type'] == "application/json") {
            next();
        }
    }
}

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/course', (req, res) => {
    res.send('List of courses')
})

app.post('/course', requireJSONContent(), (req, res) => {
    res.send('Adding new course')
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