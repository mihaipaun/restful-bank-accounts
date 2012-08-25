// Module dependencies
var express = require('express');
var app = module.exports = express.createServer();
GLOBAL.app = app;
app.enable('jsonp callback');
app.configure(function () {
  app.use(express.logger({format: "dev"}));
  app.set("views", __dirname + "/views");
  app.set("view engine", "jade");
  app.use(express.bodyParser());
  app.use(express.cookieParser());
  app.use(express.session({secret: 'BankAccountsSecretAPI'}));
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

// Environment
app.configure('development', function(){
  app.use(express.errorHandler({dumpExceptions: true, showStack: true }));
});
app.configure('production', function(){
  app.use(express.errorHandler());
});

// App global config
var config = require('./config/app.json');

// A list of all Sequelize Models available, representing the tables.
var models = require('./models/models.js');
GLOBAL.models = models;

// Resources
var routes = require('./routes/routes.js');

app.listen(config.port);

console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);