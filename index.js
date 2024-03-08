const express = require('express')
const app = express()


app.use('/api',function(req, res, next) {
    console.log(req.url);
    console.log('Middleware executed');
    next();
})
app.get('/:id',(req,res)=>{
    console.log("GET request");//printed twice because in network section it sending twice request for get 1 time and another for favicon.ico exploer it for doubts
    res.send("first get request...");
});
app.listen(3000);