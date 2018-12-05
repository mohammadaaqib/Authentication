const mongoose =require('mongoose');
const bcrypt = require('bcryptjs');
const config = require ('../config/database');


//user scema

const userSchema =mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        required:true,
        index:{unique:true,dropDups:true}
    },
    username:{
        type:String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        required:true
    },
    contact:{
        type:Number
    },
    image:{
      pic:String
    }
});

const user =mongoose.model('user',userSchema);
module.exports=user;

module.exports.getUserById=function(id,callback){
    user.findById(id,callback)
}


module.exports.getUserByUserName=function(username,callback){
    const query ={username:username}
    user.findOne(query,callback);
}

module.exports.addUser=function(newuser,callback){
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(newuser.password,salt,(err,hash)=>{
            if(err) {
                console.log(err);
            }
            newuser.password=hash;
            newuser.save(callback);
        })
    })
}

module.exports.comparePassword=function(candidatePassword,hash,callback){
    bcrypt.compare(candidatePassword,hash,(err,isMatch) =>{
        if(err) console.log('error '+err)
        callback(null,isMatch);
    });
}