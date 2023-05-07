require('dotenv').config()
var express = require('express');
var app = express();
var cors = require('cors');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const session = require("express-session");
const flash = require("express-flash");
// var dal = require('./dal.js');
const uuid = require("uuid");
const bcrypt = require("bcrypt");
const UserService = require("./src/user");

app.use(express.static('public'));
app.use(cors());



 app.get('/account/create/:name/:email/:password', function (req, res) {   
     dal.createUser(req.params.name,req.params.email,req.params.password).
         then((user) => {
             //console.log(user);
             res.send(user);
         });
 });




// app.get('/account/all', function (req, res){
//     dal.all().
//         then((results) => {
//             res.send(results);
//         });
// });

var port = process.env.PORT;
app.listen(port || 5000);
console.log('Running on port:' + port);