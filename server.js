const http = require('http');

const server = http.createServer ((req,res)=>{

    console.log(req.url);

    if(req.url == "/home"){
        res.write('<> Hello World </>');
    }

    
    res.end();    

});

server.listen(3000);
