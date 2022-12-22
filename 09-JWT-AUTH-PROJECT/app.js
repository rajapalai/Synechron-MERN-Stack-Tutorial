const express = require('express')
const app = express();
const db = require('./db-connection/db-config')
const PORT = process.env.PORT || 9000;
const jwt = require('jsonwebtoken')

app.use(express.json())

const tokenSecret = "thisismysecretkey";
const refreshTokenSecret = "thisisanothersecretkey";

const users = [
    {
        "username": "raja",
        "password": "12345",
        "role": "admin"
    },
    {
        "username": "liza",
        "password": "12345",
        "role": "user"
    }
];

let refreshTokenGenerated = [];

app.get('/', (req, res) => {
    res.send('Helloworld')
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => { return user.username == username && user.password == password });

    if (user) {
        const accessToken = jwt.sign({ username: user.username, role: user.role }, tokenSecret, { expiresIn: '20m' });
        console.log(accessToken);
        const refreshToken = jwt.sign({ username: user.username, role: user.role }, refreshTokenSecret);
        refreshTokenGenerated.push(refreshToken);
        res.json({ accessToken, refreshToken });
        console.log(refreshTokenGenerated);
    } else {
        res.send('Invalid Credentials');
    }
});



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