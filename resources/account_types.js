exports.index = function(req, res){
  models.AccountType.findAll().on('success', function(account_types) {
    res.json(
      account_types.map(function(account_type) {
        return account_type.values;
      })
    );
  });
};