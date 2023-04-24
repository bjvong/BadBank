var express = require('express');
var app = express();
var cors = require('cors');
var dal = require('./dal.js');

app.use(express.static('public'));
app.use(cors());

app.get('/account/create/:name/:email/:password', function (req, res) {   
    dal.createUser(req.params.name,req.params.email,req.params.password).
        then((user) => {
            //console.log(user);
            res.send(user);
        });
});


app.get('/account/all', function (req, res){
    dal.all().
        then((results) => {
            res.send(results);
        });
});

var port = 3000;
app.listen(port);
console.log('Running on port:' + port);