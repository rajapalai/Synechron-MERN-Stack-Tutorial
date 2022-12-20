const http = require('http');
const fs = require('fs');

//creating  ` http ` server 
const server = http.createServer(function (req, res) {

    //Handling incoming request
   fs.readFile(__dirname + '/index.html', (err, content) => {
    if (err) throw err;
    res.writeHead(200, {'Content-Type':'text/html'})
    res.end(content)
   })
})

//Listing our server on 9000
server.listen(8002, function () {
    console.log('This remote machine server is runing on 8002');
})