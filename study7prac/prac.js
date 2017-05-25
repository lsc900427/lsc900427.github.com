var requests = require('request');
var fs = require('fs');
var http = require('http');
var location = require('location-href')
var Router = require('router')


var server = http.createServer(function(request, response) {

    if(request.url === '/naver.com') {
        fs.readFile('naver.com.html', 'utf-8', function(err,data) {
            response.end(data);
        });
    }else if(request.url === '/daum.net') {

        requests.get('http://www.daum.net', function(err, a, body) {
            fs.writeFile('daum.net.html', body , {}, function(err, data) {
                fs.readFile('daum.net.html', 'utf-8', function(err,data) {
                    response.end(data);
                });
            });
        });
    }else if(request.url === '/google.com') {

        requests.get('http://www.google.com', function(err, a, body) {
            fs.writeFile('google.com.html', body , {}, function(err, data) {
                fs.readFile('google.com.html', 'utf-8', function(err,data) {
                    response.end(data);
                });
            });
        });
    }

});


server.listen('3000', function() {

    console.log('server on!!');
});

// var router = Router()
// router.get('/', function (req, res) {
//   res.setHeader('Content-Type', 'text/plain; charset=utf-8')
// })
// router.get('/', function(req, res, next) {
//     res.render('naver.com')
// });
