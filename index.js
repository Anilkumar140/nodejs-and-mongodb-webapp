const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const product = require('./routes/product.route'); // Imports routes for the products
const table = require('./routes/table.route');// import for the states
const user = require('./routes/Registration.route'); // Imports routes for the user registration
const graph = require('./routes/graph.route'); // Imports routes for the user graph
const google = require('./routes/google.analytics.route');
const app = express();
app.use(cors());

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb+srv://pratikhya99:riya123@cluster0.jwmj1.mongodb.net/Covid19Database';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);
app.use('/tables', table);
app.use('/Users',user);
app.use('/Graph',graph);
app.use('/Google',google)
// app.use(cors());
let port = 3000;

app.use(cors({
    origin: '*'
}));

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});