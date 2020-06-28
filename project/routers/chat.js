const express = require('express')
const fs = require('fs');

const check = require('../check/sentenceCheck')
const router = new express.Router()

router.get('/chat', async (req,res)=>{
    try{
        if(req.query.sentence==null){
            res.status(400).send("must need sentence")
        }
        res.status(201).send(check(req.query.sentence))
    }catch(e){
        res.status(400).send(e)
    } 
})

module.exports= router