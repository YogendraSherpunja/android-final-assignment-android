require('./db/mongoose');
const express=require('express');

const app=express();




app.listen('9000',function(){
    console.log("server is running at 9000");
})
