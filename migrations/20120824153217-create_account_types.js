module.exports = {
  up: function(migration, DataTypes) {
    migration.createTable(
      'account_types',
      {
        id: {
          type: DataTypes.INTEGER,
          unique: true,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false
        }
      },
      {}
    )
  },
  down: function(migration) {
    migration.dropTable('account_types');
  }
}