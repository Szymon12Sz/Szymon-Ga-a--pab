const express = require('express')  
const app = express()  
app.get('/', function (req, res) 
{  
  res.send('Hello World Hello')  
  res.send('2+3'); 
})  
app.listen(3000)  