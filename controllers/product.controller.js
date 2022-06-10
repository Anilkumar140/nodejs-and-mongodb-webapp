const Product = require('../models/product.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};
exports.product_create = function (req, res) {
    const body = req.body();
    City.save(body)
    .then(response => {
      console.log('saved to mongo db', response);
      res.json(response);
    })
    .catch(error => {
      console.log('error in saving to mongo db', error);
      res.json(error);
    });
};
exports.product_details = function (req, res) {
    Product.find({}, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};