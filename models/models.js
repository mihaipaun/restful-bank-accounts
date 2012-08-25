var Sequelize = require('sequelize');
var db_config = require('../config/models.json');
var db = new Sequelize(db_config.database, db_config.user, db_config.password, db_config.server);

var self = module.exports = {
  /** Sequel Object **/
  'db' : db,

  User: db.define('users',
    {
      id: {type: Sequelize.INTEGER, allowNull: false, primaryKey: true},
      email: {type: Sequelize.STRING, len: 255, allowNull: false},
      salt: {type: Sequelize.STRING, len: 255, allowNull: false},
      crypted_password: {type: Sequelize.STRING, len: 255, allowNull: false},
      api_key: {type: Sequelize.STRING, len: 255}
    },
    {
      charset: 'utf8',
      timestamps: false,
      freezeTableName: true,
      classMethods: {
      },
      instanceMethods: {
      }
    }
  ),

  Office: db.define('offices',
    {
      id: {type: Sequelize.INTEGER, allowNull: false, primaryKey: true},
      code: {type: Sequelize.STRING, len: 255, allowNull: false},
      address: {type: Sequelize.STRING, len: 255, allowNull: false}
    },
    {
      charset: 'utf8',
      timestamps: false,
      freezeTableName: true,
      classMethods: {
      },
      instanceMethods: {
      }
    }
  ),

  AccountType: db.define('account_types',
    {
      id: {type: Sequelize.INTEGER, allowNull: false, primaryKey: true},
      name: {type: Sequelize.STRING, len: 255, allowNull: false}
    },
    {
      charset: 'utf8',
      timestamps: false,
      freezeTableName: true,
      classMethods: {
      },
      instanceMethods: {
      }
    }
  ),

  Account: db.define('accounts',
    {
      id: {type: Sequelize.INTEGER, allowNull: false, primaryKey: true},
      user_id: {type: Sequelize.INTEGER, allowNull: false},
      account_type_id: {type: Sequelize.INTEGER, allowNull: false},
      office_id: {type: Sequelize.INTEGER, allowNull: false},
      number: {type: Sequelize.STRING, len: 255, allowNull: false},
      control: {type: Sequelize.STRING, len: 255, allowNull: false},
      balance: {type: Sequelize.FLOAT, allowNull: false}
    },
    {
      charset: 'utf8',
      timestamps: false,
      freezeTableName: true,
      classMethods: {
      },
      instanceMethods: {
      }
    }
  )
};

self.User.hasMany(self.Account, {as: 'accounts', foreignKey: 'user_id'});
self.Office.hasMany(self.Account, {as: 'accounts', foreignKey: 'office_id'});
self.AccountType.hasMany(self.Account, {as: 'accounts', foreignKey: 'account_type_id'});
self.Account.belongsTo(self.User, {as: 'user', foreignKey: 'user_id'});
self.Account.belongsTo(self.Office, {as: 'office', foreignKey: 'office_id'});
self.Account.belongsTo(self.AccountType, {as: 'account_type', foreignKey: 'account_type_id'});