const express = require('express');
const path = require('path');
const bodyParser =require('body-parser');
const cors =require('cors');
const passport =require('passport');
const mongoose =require('mongoose');
const config=require('./config/database');
const morgan=require('morgan')

mongoose.connect(config.database,{ useNewUrlParser: true,useCreateIndex:true });

mongoose.connection.on('connected',()=>{
console.log('connected to database '+config.database);
});

mongoose.connection.on('error',(err)=>{
    console.log(' databssecerror '+err);
    });
const app=express();

const users=require ('./routes/users');
const port =3000;

app.use(morgan('dev'));
app.use(cors());

app.use(express.static(path.join(__dirname,'client')));

// body parser Middle ware.
app.use(bodyParser.json());

//passport Middle ware.
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/user',users);

app.get('/',(req,res)=>{
    res.send('Invalid Endpoint');

});


app.listen(port ,()=>{
    console.log('serve started on port'+port);
});