const mongoose = require('mongoose');

const GenreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50,
        unique: true
    }
})

const Genre = mongoose.model('Genre', GenreSchema);
module.exports = Genre;