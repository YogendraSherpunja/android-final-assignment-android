require('./db/mongoose');
const express=require('express');
const userRouter= require('./routes/userRoute');

const app=express();
const cors=require('cors');
app.use(cors());

app.use(express.static('./public'));


app.use(express.urlencoded({extended: false}));

app.use(express.json());


app.use(userRouter);




app.listen('9000',function(){
    console.log("server is running at 9000");
})
