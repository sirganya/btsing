/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var fs = require('fs');
///athentication
var app = express();

var allowCrossDomain = function(req, res, next) {
	console.log(req.url);
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};
//var bodyParser = require('body-parser');
//var cookieParser = require('cookie-parser');
//var session = require('express-session');
// all environments
//app.use(allowCrossDomain);
app.set('port', process.env.PORT || 80);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.bodyParser({
  keepExtensions: true,
  uploadDir: __dirname + '/uploads'
}));
app.use(express.limit('1mb'));
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser());
app.use(express.session({secret:'catsman'}));
app.use(app.router);
app.use(express['static'](path.join(__dirname, 'public')));


http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));

});
