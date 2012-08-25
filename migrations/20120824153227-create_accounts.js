module.exports = {
  up: function(migration, DataTypes) {
    migration.createTable(
      'accounts',
      {
        id: {
          type: DataTypes.INTEGER,
          unique: true,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
        },
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        account_type_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        office_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        number: {
          type: DataTypes.STRING,
          allowNull: false
        },
        control: {
          type: DataTypes.STRING,
          allowNull: false
        },
        balance: {
          type: DataTypes.FLOAT,
          allowNull: false
        }
      },
      {}
    )
  },
  down: function(migration) {
    migration.dropTable('accounts');
  }
}