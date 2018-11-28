const express = require('express');
const router = express.Router();
const user=require('../models/users');
const passport=require('passport');
const jwt =require ('jsonwebtoken');
const config =require('../config/database')


//Regester 
router.post('/regester',(req,res,next)=>{
    let newUser =new user({
        name:req.body.name,
        email:req.body.email,
        username:req.body.username,
        password:req.body.password
    });
console.log(user)
    user.addUser(newUser,(err,user)=>{

        if(err){
            res.json({ success:false,msg:err.message})
        }
        else{
            res.json({success:true,msg:'user register'})
        }

});
});

//Authenticate 
router.post('/authenticate',(req,res,next)=>{
 const username =req.body.username;
 const password =req.body.password;

 user.getUserByUserName(username,(err,User)=>{
if(err){
    throw err
}
if(!User){
    return res.json({success:false,message:'User not found'})
}
user.comparePassword(password,User.password,(err,isMatch)=>{
    if(err) console.log('in user compare password '+err)
    if(isMatch){
        const token = jwt.sign({data:User},config.secret,{
            expiresIn :604800 //1week 
        });
        res.json({
            success:true,
            token:'jwt '+token,
            user:{
                id:User._id,
                name :User.name,
                username:User.username,
                email:User.email
                
            }
        })
    }
    else{
        return res.json({success:false,message:'Wrong password'})
    }

});

 });
    });

    //Profile 
router.get('/profile',passport.authenticate('jwt', {session:false}),(req,res,next)=>{
    res.json({user:req.user})
    });

module.exports=router;