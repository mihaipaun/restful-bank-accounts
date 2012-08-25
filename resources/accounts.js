exports.index = function(req, res){
  models.Account.findAll().on('success', function(accounts) {
    res.json(
      accounts.map(function(account) {
        return account.values;
      })
    );
  });
};