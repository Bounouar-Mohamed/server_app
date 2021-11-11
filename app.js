const express = require('express');
const app = express();

let user = {
    firstName : 'Mohamed',
    lastName : 'Bounouar'
 };


 
const port = 3000;
app.listen(port, () => console.log('server running...'))

app.get('/users', (request, response) => {
    response.send(user);
});
