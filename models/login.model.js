const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let LogInSchema = new Schema({
    
    email: {type: String, required: true},
    password : {type: String, required:  true},
    
},{ collection : 'LoginDetaailsCollection' }
);


// Export the model
module.exports = mongoose.model('AlreadyUsers', LogInSchema);