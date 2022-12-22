const express = require('express');
const app = express();
const db = require('./db-connection/db-config')
const PORT = process.env.PORT || 9000;

app.use((error, req, res, next) => {
    console.log(error)
})

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/message', (req, res, next) => {
    next(new Error('I am passing you one error'))
});

app.post('/message', (req, res, next) => {
    next(new Error('I am passing you one error'))
});

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`This app running on ${PORT}`);
        });
    } catch (error) {
        console.log(error.message)
    }
}
start();