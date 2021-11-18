const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const fs = require('fs');



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

  
app.get('/users', (req, res) => {
    res.send(user);
});

app.post("/users", function (req, res) {

    console.log(req.body.data);

    

fs.writeFile("./data.txt", req.body.data, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});
});

// Or
    