 const express = require("express");
 const router = express.Router();

 router.get('/', (req, res)=>{
    res.json({
        msg: 'GET all todos'
    })
 })

 router.get('/:id', (req, res)=>{
    res.json({
        msg: "GET  a single todo"
    })
 })

 router.post('/', (req, res)=>{
    res.json({
        msg: "POST a new todo"
    })
 })

 router.delete('/:id', (req, res)=>{
    res.json({
        msg:"DELETE a todo"
    })
 })

 router.patch('/:id',( req, res)=>{
    res.json({
        msg: "UPDATE a todo"
    })
 })
 module.exports = router;