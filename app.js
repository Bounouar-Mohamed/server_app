const express = require('express');
const app = express();

let user = {
    firstName : 'Mohamed',
    lastName : 'Bounouar'
 };

const port = 3000;
app.listen(port, () => console.log('server running...'))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/users', (request, res) => {
    res.send(user);
});