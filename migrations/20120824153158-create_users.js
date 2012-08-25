module.exports = {
  up: function(migration, DataTypes) {
    migration.createTable(
      'users',
      {
        id: {
          type: DataTypes.INTEGER,
          unique: true,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false
        },
        crypted_password: {
          type: DataTypes.STRING,
          allowNull: false
        },
        salt: {
          type: DataTypes.STRING,
          allowNull: false
        },
        api_key: {
          type: DataTypes.STRING,
          allowNull: true
        }
      },
      {}
    )
  },
  down: function(migration) {
    migration.dropTable('users');
  }
}