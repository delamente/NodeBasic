/*
const http =  require('http');

const colors = require('colors');

const handleServer = function (req, res){
    res.writeHead(200, {'Content-type': 'text/html'})
    res.write('<h1> tener que poner atencion </h1>');
    res.end();
}

const server = http.createServer(handleServer);

server.listen(4000, function () {
    console.log('server on port Feminazi'.rainbow);
});
*/

const express = require('express');
const colors = require('colors');
const server = express();

server.get('/', function(req, res){
    res.send('<h1> tener que poner atencion </h1>');
    res.end();
});

server.listen(4000, function() {
    console.log('server en Feminazi'.rainbow);
});