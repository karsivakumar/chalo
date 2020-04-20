var http = require('http');
var port = 4100;
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("Welcome To Chalo's First Nodejs Page \n" );
    console.log('Processed request for '+ req.url);
}).listen(port);
console.log('Test web application server running ...');