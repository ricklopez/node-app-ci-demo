//importing node framework
const express = require('express');
 
const app = express();
app.use(express.static('public'))
//Respond with "hello world" for requests that hit our root "/"
app.get('/echo', function (req, res) {
 res.json('hello world');
});
//listen to port 3000 by default
app.listen(process.env.PORT || 3000);
 
module.exports = app;