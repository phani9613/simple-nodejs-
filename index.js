let express = require('express')

var cors = require('cors')

let app = express();
app.use('*', cors())

app.all('/*', cors(), function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT");
    next();
});


var port = process.env.PORT || 8080;

// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/xerox', { useNewUrlParser: true });
var db = mongoose.connection;

// Send message for default URL
app.get('/', (req, res) => res.status(200).send('Welcome to Feedback System'));

// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running Xerox-Feedback on port " + port);
});



