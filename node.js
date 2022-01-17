const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const fs = require('fs');
const https = require('https');


app.use('/static',express.static('Style'));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'/index.html'));
});
const sslServer = https.createServer(
    {
       key:fs.readFileSync(path.join(__dirname,'cert','key.pem')),
       cert:fs.readFileSync(path.join(__dirname,'cert','cert.pem')),
    },
    app
)
sslServer.listen(port,()=>{
    console.log("running on port"+ port);
})
//app.listen(port,()=>{
//    console.log("running on port " + port);
//})