In which I explore, [again](https://github.com/mihaipaun/restful-products), writing a RESTful API using Node.js and express but this time using MySql and sequelize for data persistence.

### Instructions on how to run the app
1. First of all, make sure you have [npm](https://npmjs.org/) [node](http://nodejs.org/) installed
2. Clone the repository
3. `$ npm install`
4. Make sure you have mysql running (`$ mysql.server start`). Create a database called bank_development (or any other name you want, but make sure you specify the right database name in `config/models.json`). Add the proper configuration data in the config/models.json file.
5. `$ node_modules/sequelize/bin/sequelize -m` - this will run the migrations and create the tables  
You might have to edit `node_modules/sequelize/bin/sequelize` so it will look at the right config file (line 11 should be `, configFile       = configPath + '/models.json'`)
6. `$ node seed.js` - this will populate the tables with some test values
7. Finally, you can run the application: `$ node server.js`
8. Navigate to `http://127.0.0.1:3000` / `http://127.0.0.1:3000/offices`, etc.