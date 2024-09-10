const express=require('express');
const app=express();
app.get("/",(req,res)=>{
    res.send("hell");
})
app.listen(4000,()=>{
    console.log("server listeining");
})