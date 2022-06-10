const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const Users_controller = require('../controllers/registration.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', Users_controller.test);
router.post('/create', Users_controller.User_create);
router.get('/loggedin',Users_controller.Fetch_user);
router.put('/update',Users_controller.update_user);



module.exports = router;