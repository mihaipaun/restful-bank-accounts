exports.index = function(req, res){
  models.Office.findAll().on('success', function(offices) {
    res.json(
      offices.map(function(office) {
        return office.values;
      })
    );
  });
};