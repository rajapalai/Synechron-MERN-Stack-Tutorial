const express = require('express')
const app = express();
const db = require('./db-connection/db-config')
const PORT = process.env.PORT || 9000;

const indexRouter = require('./routes/index-routes')
const userRouter = require('./routes/user-routes')
const genreRouter = require('./routes/genre-routes')
const movieRouter = require('./routes/movie-routes')
const customerRouter = require('./routes/customer-router')


// MIDDLEWARE

app.use(express.json());
app.use('/genre', genreRouter);
app.use('/movie', movieRouter)
app.use('/user', userRouter);
app.use('/customer', customerRouter);



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