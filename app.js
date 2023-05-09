require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const session = require("express-session");
const flash = require("express-flash");
const uuid = require("uuid");
const bcrypt = require("bcrypt");
const UserService = require("./src/user");
const Modeluser = require("./src/user/user.model");
const userService = require('./src/user/user.service');
const user = require('./src/user');

require("./src/config/google");
require("./src/config/local");
require("./src/config/passport");

const port = process.env.PORT || 8050;
const db = process.env.MONGO_URI;
mongoose.connect(db);


app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// app.engine("html", require("ejs").renderFile);
app.use(express.static(__dirname + '/public'));

app.use(cookieParser());
app.use(
    session({
      secret: "secr3t",
      resave: false,
      saveUninitialized: true,
    })
  );

app.use(flash());

// Routes for communication and functionality //

app.use(passport.initialize());
app.use(passport.session());
  
const isLoggedIn = (req, res, next) => {
  req.user ? next() : res.sendStatus(401);
};


app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );
  
app.get(
    "/auth/google/callback",
    passport.authenticate("google", {
      failureRedirect: "/error",
      successRedirect: "/",
      failureFlash: true,
      successFlash: "Successfully logged in!",
    })
  );

app.get("/auth/logout", (req, res) => {
    req.flash("success", "Successfully logged out");
    req.session.destroy(function () {
    res.clearCookie("connect.sid");
    res.redirect("/");
    });
  });

// Routes for communication and functionality //
 app.get("/currentUser", isLoggedIn, (req, res) => {
     console.log(req.user);
     res.send(req.user);
   });

   app.get("/api/allUsers", async (req, res) => {
      let doc = await Modeluser.find({}, 'firstName balance');
      res.send(doc);
   })
  
   app.get("/updateBalance/:newBalance", isLoggedIn, async (req, res) => {
    const filter = { email: req.user.email };
    const update = { balance: req.params.newBalance };

    let doc = await Modeluser.findOneAndUpdate(filter, update);
    doc.balance = update.balance;
    await doc.save().then((doc) =>{
      res.send(doc);
    }).catch((error) => {
      console.log(error);
      });
    
  });



app.get('/auth/local/signup/:firstName/:lastName/:email/:password', async function (req, res) {  
    const hashedPassword = await bcrypt.hash(req.params.password, 10);
    
            UserService.addLocalUser({
              id: uuid.v4(),
              email: req.params.email,
              firstName: req.params.firstName,
              lastName: req.params.lastName,
              password: hashedPassword     
            })
});


app.post("/auth/local/signin",
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/loginfail",
      failureFlash: true
    })
  );
  

const server = app.listen(port, function() {
    console.log('Server is listening on port ' + port);
});
