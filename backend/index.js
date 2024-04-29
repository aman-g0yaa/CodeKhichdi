const express = require('express');

const app = express();


app.get('/home',(req,res)=>{
    res.send('Hello World');
})

app.listen(3000,()=>{
    console.log('Server started at port 3000');
})