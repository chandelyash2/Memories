const express = require('express')
const router=express.Router()
const UserModel =require('../models/UserModel')

router.get('/',async(req,res)=>{
    try{
      const data =   await UserModel.find()
        res.status(200).json(data)
    }
    catch(error){
res.status(404).json({message:error.message})
    }
})

router.post('/adduser',(req,res)=>{
    const newUser = new UserModel({
        Name:req.body.FullName,
        Email:req.body.Email,
Password:req.body.Password

    })
    newUser
    .save()
    .then((data)=>{
        res.json({status:'ok',data})
    })
})
module.exports=router;