const express = require('express');
const router = express.Router();
const Genre = require('../model/genre-model')

// router.get('/', async (req, res) => {
//     const genres = await Genre.find()
//     res.send(genres);
//     console.log('Get all Genre name')
// })

router.get('/', function (req, res) {
    Genre.find({})
        .then(function (genres) {
            res.json(genres)
        })
        .catch(function (error) {
            res.json(error)
        })
})

router.post('/', async (req, res) => {
    const genre = new Genre({ name: req.body.name })
    await genre.save();
    res.send(genre);
    console.log(genres)
    console.log('Movie name inserted successfully')
})

module.exports = router;