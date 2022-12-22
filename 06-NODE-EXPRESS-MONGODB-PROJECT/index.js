const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const MongoClient = require('mongodb').MongoClient;


//DATABASE CONNECTION
MongoClient.connect("mongodb://127.0.0.1:27017/trainingdb",
    { useNewUrlParser: true }, function (error, client) {
        if (error) throw error;
        console.log("Database connected successfully")
        const db = client.db("trainingdb");

        app.get('/customers', (req, res)=> {
           db.collection("customers").find().toArray(function(error,data) {
            if(error) throw error
            console.log(data);
            res.send(data)
           })
        })
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