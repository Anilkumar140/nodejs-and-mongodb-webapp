const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UsersSchema = new Schema({
    firstname: {type: String, required: true, max: 100},
    email: {type: String, required: true},
    country : {type: String, required: true},
    lastname : {type: String, required: true},
    age : {type: Number, required: true},
    gender : {type: String, required: true},
    password : {type: String, required:  true},
    
},{ collection : 'UsersDetaailsCollection' }
);


// Export the model
module.exports = mongoose.model('Users', UsersSchema);