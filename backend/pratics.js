const express = require('express');

const app = express();

function home(req,res){
    
   if(req.query.id == 123){
    asdksdhfhladkhsl
   } 

   

 res.send("Hello")   
}

app.listen(3000,()=>{
    console.log('Server started at port 3000');
})