const express = require('express');
const Loginrouter = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const LoginUsers_controller = require('../controllers/login.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', LoginUsers_controller.test);
router.post('/loggedin', LoginUsers_controller.Login_create);
module.exports = Loginrouter;