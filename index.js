var express = require('express');
var app = express();
var num1 = req.query;
var num2 = req.query;
app.get('/', function (req, res) 
{
    res.send('Hello World');
     
});
app.listen(3000);
