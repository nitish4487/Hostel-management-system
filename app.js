var express = require("express");
const path = require("path");
var app = express();
const port = process.env.PORT || 8000;
var router =require("./route/index.js");
// var router1 =require("./route/admin.js");
var bodyparser = require("body-parser");
var session = require('express-session');
// var { stringify } = require("querystring");
// const { check, validationResult } = require('express-validator');
// const { urlencoded } = require("body-parser");
// app.use(bodyparser.json());
// app.use(session({
//     secret: 'dajkdksjbde333334bkjw',
//     resave: false,
//     saveUninitialized: true
// }));
app.use(express.static('public'));
app.use("/",router);
// app.use("/",router1);
app.use(bodyparser.urlencoded({ extended: true }));

// express specific stuff
app.use('/static', express.static('static'))// For serving static files

//pug specific stuff
app.set('view engine', 'pug')// Set the template engine as pug
app.set('views', path.join(__dirname, 'views'))// Set the views directory

//port at which itt listen our req
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});