/**
 * App global config
 */
var config = require('./config/app.json');
GLOBAL.config = config;

/**
* A list of all Sequelize Models available, representing the tables.
*/
var models = require('./models/models.js');

/**
* Seed tables
**/
var Sequelize = require('sequelize');
var chainer = new Sequelize.Utils.QueryChainer;
var offices = [];
chainer.add(models.Office.create({code: '0001', address: '201st Vulcano St, Mordor'}).success(function(office){offices.push(office);}));
chainer.add(models.Office.create({code: '0002', address: '100th Hammer St, Rohan'}).success(function(office){offices.push(office);}));
chainer.add(models.Office.create({code: '0003', address: '293rd Orc St, Gondor'}).success(function(office){offices.push(office);}));
var account_types = [];
chainer.add(models.AccountType.create({name: 'Rings account'}).success(function(account_type){account_types.push(account_type);}));
chainer.add(models.AccountType.create({name: 'Savings account'}).success(function(account_type){account_types.push(account_type);}));
chainer.add(models.AccountType.create({name: 'Lembas account'}).success(function(account_type){account_types.push(account_type);}));
var users = [];
chainer.add(models.User.create({email: 'frodo@bolson.net', salt: 'salt', crypted_password: 'gandalf'}).success(function(user){users.push(user);}));

chainer.run().success(
  function(){
    models.Account.create({user_id: users[0].id, office_id: offices[0].id, account_type_id: account_types[0].id, number: '0000000001', control: '00', balance: '0'});
  }
).error(
  function(error){
    console.log(error);
  }
);