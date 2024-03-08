const dotenv=require('dotenv');
const mongoose=require('mongoose');
const express =require('express');
const app=express();

dotenv.config({path:'./config.env'});
require('./db/conn');
app.use(express.json());
const User=require('./model/UserSchema');

app.use(require('./router/auth'));
const PORT=process.env.PORT;

const middleware =(req,res,next)=>{
    console.log('Hello my middleware');
    next();
}

app.get('/',(req,res)=>{
    res.send("Hello World");
});
app.get('/preregistration',middleware,(req,res)=>{
    res.send("Hello PreRegistration");
});


app.listen(PORT,()=>{
    console.log(`server is running at no ${PORT}`);
})