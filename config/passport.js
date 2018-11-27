const JwtStrategy =require('passport-jwt').Strategy;
const ExtractJwt=require('passport-jwt').ExtractJwt;
const User = require('../models/users');
const config =require('../config/database');


module.exports=function(passport){
   let opts={};
   opts.jwtFromRequest=ExtractJwt.fromAuthHeaderAsBearerToken();
   opts.secretOrKey =config.secret;
   passport.use(new JwtStrategy(opts,(Jwt_payload,done)=>{
       User.getUserById(Jwt_payload._id,(err,User)=>{
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