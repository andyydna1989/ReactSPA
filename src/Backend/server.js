const express = require('express');


// a very simple Express server!
const app = express();

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    
    res.json({
        rackets: 318,
        sales: 31123,
        countries: 18
    })
    console.log("sending data");
    
})

app.listen(3000, ()=>{
    console.log("backend is alive and well, listening on 3000!")
})