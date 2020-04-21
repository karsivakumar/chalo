
const routeResponseMap = {
	"/about": "<h1> About Simple Application</h1>",
	"/contact": "<h1> Contact Us </h1>",
	"/error": "<h1> Sorry - cannot find what you are looking for. </h1>"
};

var http = require('http');
var port = 4100;
var fs = require('fs');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    if (routeResponseMap[req.url]) {
	    res.end(routeResponseMap[req.url]);
    }
    else {
 	    res.end("Welcome to Simple Application!");
    }

    console.log('Processed request for '+ req.url);
}).listen(port);
console.log('Test web application server running ...');