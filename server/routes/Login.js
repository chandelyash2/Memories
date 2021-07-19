const express= require('express')
const router = express.Router()
const RegisterUser = require('../models/UserModel')

router.post('/',async (req,res)=>{
    const {Email,Password} = req.body
    console.log(req.body)
    const loginData = await RegisterUser.findOne({Email:Email}).lean()
    if(!loginData){
        return res.json({status:'error',error:'Invalid login Data'})
    }
    if(Password===loginData.Password ){
        return res.json({status:'ok',Name:loginData.Name})
    }
    res.json({status:'error',error:'Invalid data'})
})
module.exports=router