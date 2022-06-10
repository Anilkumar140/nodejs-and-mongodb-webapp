const express = require('express');
const Tablerouter = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const table_controller = require('../controllers/table.controller');


// a simple test url to check that all of our files are communicating correctly.
Tablerouter.get('/test', table_controller.test);
Tablerouter.post('/createTable', table_controller.table_create);
Tablerouter.get('/getTable', table_controller.table_details);
module.exports = Tablerouter;