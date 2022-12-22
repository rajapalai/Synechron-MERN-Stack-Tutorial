const express = require('express');
const app = express();
const db = require('./db-connection/db-config')
const PORT = process.env.PORT || 9000;

app.use((req,res,next) => {
    console.log('Hello middleware');
    next();
});

app.get('/',(req,res) => {
    res.send('Hello World');
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