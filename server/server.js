const express = require('express');
const cors = require('cors');

const bodyParser= require('body-parser');
const api= require('./routes/api')

var PORT =3000;


var app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api',api)
app.get('/',(req,res)=>{
    res.send('Hello from express');
})
app.listen(PORT,()=>{
    console.log('Server listening to port'+PORT);
    
})