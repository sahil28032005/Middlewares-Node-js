const express = require('express')
const app = express()

app.use('/api',function(req, res, next) {
    console.log(req.url);
    next();
})
app.get('/:id',(req,res)=>{
    console.log("GET request");
    res.send("first get request...");
});
app.listen(3000);