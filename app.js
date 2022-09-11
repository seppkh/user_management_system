
// setting up an express server – initialize express, set a port number, listen to port number
const express = require('express');
const exphbs = require('express-handlebars'); // rendering engine
const bodyParser = require('body-parser'); // parsing middleware

var db = require('./database.js');
var pool = db.getPool();

// initialize express, set a port number
const app = express();
const port = process.env.PORT;

// Parsing middleware
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// Parse application/json
app.use(bodyParser.json());

// Static Files, e.g. custom CSS-file, custom JS-file, easy access to images
app.use(express.static('public')); // public is name of static folder

// Templating Engine
app.engine('hbs', exphbs.engine( {extname: '.hbs' }));
app.set('view engine', 'hbs');


// Connect to DB
pool.getConnection((err, connection) => {
  if(err) throw err; // not connected
  console.log(`Connected as ID ${connection.threadId}`);
})


const routes = require('./server/routes/user');
app.use('/', routes);


// listen to port number
app.listen(port, () => console.log(`Listening on port ${port}`));

