const JwtStrategy =require('passport-jwt').Strategy;
const ExtractJwt=require('passport-jwt').ExtractJwt;
const User = require('../models/users');
const config =require('../config/database');


module.exports=function(passport){
   let opts={};
   opts.jwtFromRequest=ExtractJwt.fromAuthHeaderWithScheme("jwt");
   opts.secretOrKey =config.secret;
   passport.use(new JwtStrategy(opts, (Jwt_payload,done)=>{
       User.getUserById(Jwt_payload.data._id,(err,User)=>{
           if(err){
               return done(err,false)
           }
           if(User){
              return done(null, User) 
           }
           else{
               return done(null, false)
           }
       })
   }));

}