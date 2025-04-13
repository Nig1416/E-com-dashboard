const express= require('express');
const app=express();
app.get("/",(req,resp)=>{
    resp.send("app is working ..... is my gf")
});

app.listen(500)
