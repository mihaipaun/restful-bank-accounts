var resource = require('express-resource');

//index: list of options
app.get('/', function(req, res){
  //All routes we have defined, along with the verbs
  var routes_array = (app.routes.routes.get ? app.routes.routes.get : [])
        .concat((app.routes.routes.post ? app.routes.routes.post : [])
          .concat((app.routes.routes.put ? app.routes.routes.put : [])
            .concat(app.routes.routes.delete ? app.routes.routes.delete : [])));

  var routes_list = '';
  routes_array.forEach(function(r){
    if(r.path != '*'){
      routes_list += '<a href="' + r.path + '">' + r.method + ': ' + r.path + '</a> <br/>';
    }
  });

  res.render('index', {
    title: 'Bank API',
    'routes_list': routes_list
  });
});

var offices = app.resource('offices', require('../resources/offices'));
var account_types = app.resource('account_types', require('../resources/account_types'));
var accounts = app.resource('accounts', require('../resources/accounts'));

module.exports = true;