const express = require("express");
const fs = require('fs');
const path = require("path");
const about = fs.readFileSync(`./about1.html`);
const demo = fs.readFileSync(`./demo.html`);
const feedback = fs.readFileSync(`./feedback.html`);

const app = express();
app.use('/static', express.static('static'));
const port = 80;

//app.set('view engine','html');//set the templat engine for pug
app.set('view engine','pug');//set the templat engine for pug
app.set('views',path.join(__dirname,'views'));// set the views directory

app.get('/',(req,res)=>{
    const con = 'this is best content'
    const params = {'title':'food dictnory',"content":con}
    //es.status(200).render('vatsal.html',params);
    res.status(200).render('sir.pug',params);
});

app.get("/about",(req, res)=>{
    res.setHeader('content-Type','text/html');
    res.send(about);

});
app.get("/demo",(req, res)=>{
    res.setHeader('content-Type','text/html');
    res.send(demo);

});
app.get("/feedback",(req, res)=>{
    res.setHeader('content-Type','text/html');
    res.send(feedback);

});


app.listen(port,()=>{
   console.log(`this application start on port ${port}`);
});