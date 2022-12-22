const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.send('Hello world')
})

router.get('/welcome')

module.exports = router;