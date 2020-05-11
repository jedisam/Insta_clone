const express = require ('express');
const bodyParser = require ('body-parser');
const mongoose = require ('mongoose');
const cors = require ('cors');
require ('dotenv/config');
const app = express ();

const Signup = require ('./routes/Signup');

//db connection
const uri = process.env.database;
mongoose.connect (uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once ('open', () => {
  console.log ('MongoDB connection has been succsessfully established!');
});

// cors
app.use (cors ());

// Body parser middleware
app.use (bodyParser.urlencoded ({extended: false}));
app.use (bodyParser.json ());

app.use ('/signup', Signup);

const PORT = 9000 || process.env.PORT;

app.listen (PORT, () => {
  console.log (`Server Started on PORT ${PORT}`);
});
