const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let GraphSchema = new Schema({
    "Root": {
      "type": [
        "Mixed"
      ]
    }
  }, 
    { collection : 'graphCollections' }); 


// Export the model
module.exports = mongoose.model('graph', GraphSchema)