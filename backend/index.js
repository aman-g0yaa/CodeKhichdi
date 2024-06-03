const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.json());

function middleware(req, res, next){

    console.log(req.headers);
    console.log(req.query);
    console.log(req.body);
    next();

}               

app.use(middleware); 


app.get('/home',(req,res)=>{       
    res.send('Hello World');
});

app.listen(3000,()=>{
    console.log('Server started at port 3000');
})





