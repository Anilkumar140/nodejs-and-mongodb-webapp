const express = require('express');
const Graphrouter = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const graph_controller = require('../controllers/graph.controller');


// a simple test url to check that all of our files are communicating correctly.
// Graphrouter.get('/test', graph_controller.test);
// Graphrouter.post('/createGraph', graph_controller.graph_create);
Graphrouter.get('/getGraph', graph_controller.graph_details);

// app.post('/getGraph', function(req, res){
//     graph_controller.graph_details

//   });
module.exports = Graphrouter;