const table = require('../models/graph.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the graph controller!');
};
// exports.graph_create = function (req, res) {
//     const body = req.body();
//     table.save(body)
//     .then(response => {
//       console.log('saved to mongo db', response);
//       res.json(response);
//     })
//     .catch(error => {
//       console.log('error in saving to mongo db', error);
//       res.json(error);
//     });
// };
exports.graph_details = function (req, res) {
    table.find({}, function (err, table) {
        if (err) return next(err);
        res.send(table);
    })
};