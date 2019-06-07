var express = require('express');
var errorhandler = require('errorhandler');
var app = express();
var login_func = require("../_services/userService")
app.use(express.static('public'));

app.get('/login', function (req, res) {
   login_func.login();
   console.log(req);
   res.send(req.username,req.password);
 /*   return res.JSON({
       status: 'Ok',
       user:{
           name: 'pink'
       },
       token:btoa("pink123")
   }) */
});
app.use(errorhandler());

var server = app.listen(8082, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Ung dung Node.js dang lang nghe tai dia chi: http://%s:%s", host, port)

})