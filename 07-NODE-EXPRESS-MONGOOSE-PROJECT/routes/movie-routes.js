const express = require('express');
const router = express.Router();
const Movie = require('../model/movie-model')
const GenreSchema = require('../model/genre-model');
const Genre = require('../model/genre-model');

router.get('/',function(req,res) {
    Movie.find({})
    .then(function(movies) {
        res.json(movies)
    })
    .catch(function(error) {
        res.json(error)
    })
})

router.post('/', async function(req,res) {
    const genre = await Genre.findById(req.body.genreId);
    if(!genre) return res.status(400).send('Invalid genre')

    const movie = new Movie({
        title: req.body.title,
        numberInStock: req.body.numberInStock,
        dailyRentalRate: req.body.dailyRentalRate,
        genre: {_id: genre._id,name: genre.name}
    })
    await movie.save()
    res.send(movie)
})

// router.post('/',function(req,res) {
//     Movie.create(req.body)
//     .then(function(movies) {
//         res.json(movies)
//     })
//     .catch(function(error) {
//         res.json(error)
//     })
// })

module.exports = router;