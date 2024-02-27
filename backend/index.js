const express =require('express');
const mongoDB=require('./db')

const app=express();
const PORT=3000;
mongoDB();


app.use((req,res,next)=>{
    res.setHeader("Access=Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access=Control-Allow-Origin",
        "Origin, X-Requested-With, Content-Type, Accept"

    )
    next();
})
app.get('/',(req,res)=>{
    res.json("hello")
})

app.use(express.json())
app.use('/api',require("./Routes/CreateUser"));
app.use('/api',require("./Routes/DisplayData"));


app.listen(PORT,()=>{
    console.log(`Listening to server https://localhost/${PORT}`)
})


