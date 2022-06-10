const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    "Root": {
      "type": [
        "Mixed"
      ]
    }
  }, 
    { collection : 'Covid19Collection' }); 


// Export the model
module.exports = mongoose.model('Product', ProductSchema);