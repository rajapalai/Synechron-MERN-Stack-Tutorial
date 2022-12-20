const http = require('http');

//creating  ` http ` server 
const server = http.createServer(function (req, res) {

    //Handling incoming request
    res.writeHead(200, { 'Content-Type': 'Text/html' })
    if (req.url == '/') {
        res.end('<H2>Welcome to Home Page</h2>');
    } else if (req.url == '/admin') {
        res.end('<H2>This Admin Page</h2>');
    } else if (req.url == '/user') {
        res.end('<H2>This User Page</h2>');
    } else if (req.url == '/about') {
        res.end('<H2>This About Page</h2>');
    } else if (req.url == '/feedback') {
        res.end('<H2>This Feedback Page</h2>');
    } else {
        res.writeHead(404,{'Content-Type': 'text/html'});
        res.end('<H2>Invalid Request.</h2>');
    }

})

//Listing our server on 9000
server.listen(9000, function () {
    console.log('This remote machine server is runing on 9000');
})