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


app.get('/home',home);


function home(req,res){   
    if(req.query.apple == "1"){

        var obj = {
            "apple" : "red" 
        }

        res.send(`<head>
        <title>
            Hello world
        </title>
    </head>
    
    <body>
        <b>
            hi there
        </b>
    </body>`);
    }else{
        res.status(411).send("gand maara")
    } 
    
}


app.listen(3000,()=>{
    console.log('Server started at port 3000');
})





