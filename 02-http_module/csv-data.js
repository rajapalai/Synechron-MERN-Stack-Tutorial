const http = require('http');

//creating  ` http ` server 
const server = http.createServer(function (req, res) {

    //Handling incoming request
    res.setHeader('Content-Type', 'text/csv')
    res.setHeader('Content-Disposition', 'attachment;filename = sample.csv')
    res.writeHead(200)
    res.write(`id,name\n101,Raja palai`)
    res.end();
})

//Listing our server on 9000
server.listen(8001, function () {
    console.log('This remote machine server is runing on 8001');
})