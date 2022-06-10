const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const google_controller = require('../controllers/google.analytics.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', google_controller.test);

module.exports = router;