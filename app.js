const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use (bodyParser.json());
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

app.get('/actions/:id', (req, res) => {
  
  let read = require(__dirname+ "/data.json") ;
  let id = req.params.id
  let sea =  read[id];

    res.send(sea)
});
 

app.post("/users", function (req, res,) {
  
       console.log(req.body.data);
       let DataPost = {Data: req.body.data};  


      fs.readFile('./data.json', 'utf8' , (err, data) => {
        if (data){ 

            let x = JSON.parse(data)
            x.push(DataPost); 
            fs.writeFile("./data.json", JSON.stringify(x) , function (err) {});

        }
        else {
            let array = []
            array.push(DataPost); 
            fs.writeFile("./data.json", JSON.stringify(array) , function (err){});
       }})

});
