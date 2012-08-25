module.exports = {
  up: function(migration, DataTypes) {
    migration.createTable(
      'offices',
      {
        id: {
          type: DataTypes.INTEGER,
          unique: true,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
        },
        code: {
          type: DataTypes.STRING,
          allowNull: false
        },
        address: {
          type: DataTypes.STRING,
          allowNull: false
        }
      },
      {}
    )
  },
  down: function(migration) {
    migration.dropTable('offices');
  }
}