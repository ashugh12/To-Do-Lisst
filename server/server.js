require("dotenv").config();

const express = require('express');
const app = express();

app.use((req, res, next)=>{
    console.log(req.path, req.method);
    next();
})

app.get('/', (req, res)=>{
    res.json({
        msg: "Welcome to Todo App"
    })
})


app.listen(process.env.PORT, ()=>{
    console.log(`http://localhost:${process.env.PORT}`)
})
