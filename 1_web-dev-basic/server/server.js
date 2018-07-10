var http = require('http');

http.createServer(function(request,response){
    response.write('Hello from Http');
    response.end();
    console.log('server is loading');
}).listen(8080);

// var express = require('express');
//  var app = express();

//  app.get('/', function (req, res) {
//    res.send('Hello World! from Express');
//  });

// app.listen(3000, function () {
// console.log('Simple web app listening on port 3000!');
// });