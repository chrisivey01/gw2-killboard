const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = 3500;
const router = express.Router();


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");

    next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var mysql = require('mysql')

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'yaksbend'
})




app.get('/users', function(req,res,next){
    connection.query('SELECT * FROM users WHERE wvwkills IS NOT NULL AND on_yaks=1 ORDER BY wvwkills ASC', function(err, results) {
        if (err) throw err;
        res.send((results));
    })
});

app.get('/topKiller', function(req,res,next){
    connection.query('SELECT account_id FROM users AND on_yaks=1 ORDER BY wvwkills ASC LIMIT 1', function(err, results) {
        if (err) throw err;
        res.send((results));
    })
});


app.use(router);
app.listen(port);



