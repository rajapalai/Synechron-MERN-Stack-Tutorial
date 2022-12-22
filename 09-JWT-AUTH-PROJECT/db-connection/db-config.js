const mongoose = require('mongoose');

mongoose.set('strictQuery', false)

//CONNECT WITH DATABASE USING ASYNC-AWAIT
async function connectToMongodb() {
    mongoose.connect('mongodb://127.0.0.1:27017/trainingdb')
        .then(() => console.log('Connected with Database'))
        .catch((error) => console.log(`Error : ${error.message}`))
}
connectToMongodb();

//connect with mongo using callback
// mongoose.connect('mongodb://127.0.0.1:27017/trainingdb', function (error) {
//     if (error) throw error;
//     console.log('Connect to Database using callback')
// })

//connect with mongo using promise
// mongoose.connect('mongodb://127.0.0.1:27017/trainingdb')
// .then(() => console.log('Connected with Database using Promise.'))
// .catch((error) => console.log(`Error : ${error.message}`))

//CONNECT WITH DATABASE USING ASYNC-AWAIT AND IIFE
//  (async() => {
//    await mongoose.connect('mongodb://127.0.0.1:27017/trainingdb')
//     .then(() => console.log('Connected with Database using async await and iife.'))
//     .catch((error) => console.log(`Error : ${error.message}`))
// })();