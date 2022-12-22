const mongoose = require('mongoose');
const { Genre } = require('../model/genre-model')
const { Schema } = require('mongoose')

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    genre: [{
        type: Schema.Types.ObjectId,
        
        ref: 'Genre'
    }],
    numberInStock: {
        type: Number,
        required: true,
        min: 0,
        max: 255
    },
    dailyRentalRate: {
        type: Number,
        required: true,
        min: 0,
        max: 5000
    }

})

const Movie = mongoose.model('Movie', MovieSchema)
module.exports = Movie;