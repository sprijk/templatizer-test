var app, express, http, httpServer, path;

express = require('express');

http = require('http');

path = require('path');

app = express();

httpServer = http.createServer(app);

app.use(express["static"](path.resolve(__dirname, '../client')));

app.set('view engine', 'jade').set('views', path.resolve(__dirname, './views')).set('trust proxy', true);

app.get('/', function(req, res, next) {
  return res.render('app');
});

httpServer.listen(3000);

console.log("Listening on port 3000");
