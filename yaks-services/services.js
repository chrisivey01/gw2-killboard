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


app.get('/gears', function( req,res,next){
    // let uid = req.body.uid
    // let api = req.body.api
    connection.query('SELECT * FROM uid_character_gear', (err, results) => {
        if (err) throw err;
        res.send(results)
    })
})


//get all users and order them by highest to lowest kill totals
app.get('/users', async function(req,res,next){
    await connection.query('SELECT * from users WHERE weekly_kill_total IS NOT NULL AND (on_yaks=1 OR on_yaks=2) ORDER BY wvwkills ASC', function(err, results) {
        if (err) throw err;
        res.send((results));
    })
});

app.get('/usersWeekly', async function(req,res,next){
    await connection.query('SELECT * from users WHERE weekly_kill_total IS NOT NULL AND (on_yaks=1 OR on_yaks=2) ORDER BY weekly_kill_total ASC', function(err, results) {
        if (err) throw err;
        res.send((results));
    })
});


//top overall killer
app.get('/topKiller', function(req,res,next){
    connection.query('SELECT * from users WHERE weekly_kill_total IS NOT NULL AND (on_yaks=1 OR on_yaks=2) ORDER BY wvwkills DESC LIMIT 1', function(err, results) {
        if (err) throw err;
        res.send((results));
    })
});


//get the top weekly killer
app.get('/topWeekly', function(req,res,next){
    connection.query('SELECT * from users WHERE weekly_kill_total IS NOT NULL AND (on_yaks=1 OR on_yaks=2) ORDER BY weekly_kill_total  DESC LIMIT 1', function(err, results) {
        if (err) throw err;
        res.send((results));
    })
});


app.use(router);
app.listen(port);



