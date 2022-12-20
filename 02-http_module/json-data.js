const http = require('http');

//creating  ` http ` server 
const server = http.createServer(function (req, res) {

    //Handling incoming request
    res.writeHead(200, { 'Content-Type': 'Text/html' })
    res.write(`<h1>{message : "This is sample json message data"}</h1>`)
    res.end();
})

//Listing our server on 9000
server.listen(8000, function () {
    console.log('This remote machine server is runing on 8000');
})