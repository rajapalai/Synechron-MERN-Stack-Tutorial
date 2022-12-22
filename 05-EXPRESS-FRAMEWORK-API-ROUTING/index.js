const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const db = require('./database/db-config')


const indexRouter = require('./routes/indexRoutes')
const employeeRouter = require('./routes/employeeRouter')

//MIDDLEWARES
app.use(express.json());
app.use('/',indexRouter)
app.use('/employee', employeeRouter)

// DATABASE CONNECTION
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