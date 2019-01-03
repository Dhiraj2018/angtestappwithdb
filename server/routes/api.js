const express= require('express');
const router= express.Router();
const mongoose = require('mongoose');
const User = require ('../models/user');
const jwt = require('jsonwebtoken');
const db= "mongodb://Dhiraj:Friend*2010@ds145694.mlab.com:45694/users"
mongoose.connect(db, err=>{
    if(err){
        
        console.log('error'+err);
    } else{
        
        console.log('Connect to the db');
    }
    
})
function verifyToken(req,res,next){
    if(!req.headers.authorization){
        return res.status(401).send('Unauthorised request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === null){
        return res.status(401).send('Unauthorised request')
    }
    let payload = jwt.verify(token,'secretkey')
    if(!payload){
        return res.status(401).send('Unauthorised request')
    }
    req.userId =payload.subject
    next();
    
}



router.get(('/'),(req, res)=>{
    res.send('api works');
})

router.post(('/register'),(req, res)=>{
    //saving req data to variable
    let userdata= req.body;
    //creating User instance and 
    let user = new User(userdata);
    //passing value to USer array and saving data
    user.save((err,data)=>{
        if(err){
            console.log(err);
            
        }else {
            let payload ={subject:data._id}
            let token = jwt.sign(payload,'secretkey')
            res.status(200).send({token})
        }
        
    })
})

router.post('/login',(req,res)=>{
    let userData= req.body;
    User.findOne({email: userData.email},(error, user)=>{
        if (error){
            console.log(error);
        } else{
            if(!user){
                res.status(401).send('Invalid Email');
            } else{
                if (user.password !== userData.password){
                    res.status(401).send('Invalid password')
                } else{
                    let payload ={subject:user._id}
                    let token = jwt.sign(payload,'secretkey')
                    res.status(200).send({token})
                }
            }
        }

    })
})

router.get('/events',(req,res)=>{
    let events=[
    {
     "_id":"1",
     "name":"Auto Expo",
     "description": "loren ipsum",
     "date": "2012-04-23T18:25:43.511z"   
    }, 
    {
     "_id":"2",
     "name":"Auto Expo",
     "description": "loren ipsum",
     "date": "2012-04-23T18:25:43.511z"   
    }, 
    {
     "_id":"3",
     "name":"Auto Expo",
     "description": "loren ipsum",
     "date": "2012-04-23T18:25:43.511z"   
    }, 
    {
     "_id":"4",
     "name":"Auto Expo",
     "description": "loren ipsum",
     "date": "2012-04-23T18:25:43.511z"   
    }, 
    {
     "_id":"5",
     "name":"Auto Expo",
     "description": "loren ipsum",
     "date": "2012-04-23T18:25:43.511z"   
    }, 
    {
     "_id":"6",
     "name":"Auto Expo",
     "description": "loren ipsum",
     "date": "2012-04-23T18:25:43.511z"   
    }, 
    {
     "_id":"7",
     "name":"Auto Expo",
     "description": "loren ipsum",
     "date": "2012-04-23T18:25:43.511z"   
    }, 
    {
     "_id":"8",
     "name":"Auto Expo",
     "description": "loren ipsum",
     "date": "2012-04-23T18:25:43.511z"   
    }, 
    {
     "_id":"9",
     "name":"Auto Expo",
     "description": "loren ipsum",
     "date": "2012-04-23T18:25:43.511z"   
    }, 
    {
     "_id":"10",
     "name":"Auto Expo",
     "description": "loren ipsum",
     "date": "2012-04-23T18:25:43.511z"   
    }
]

res.json(events)
})
router.get('/special',verifyToken,(req,res)=>{
    let events=[
    {
     "_id":"1",
     "name":"Auto Expo",
     "description": "loren ipsum",
     "date": "2012-04-23T18:25:43.511z"   
    }, 
    {
     "_id":"2",
     "name":"Auto Expo",
     "description": "loren ipsum",
     "date": "2012-04-23T18:25:43.511z"   
    }, 
    {
     "_id":"3",
     "name":"Auto Expo",
     "description": "loren ipsum",
     "date": "2012-04-23T18:25:43.511z"   
    }, 
    {
     "_id":"4",
     "name":"Auto Expo",
     "description": "loren ipsum",
     "date": "2012-04-23T18:25:43.511z"   
    }, 
    {
     "_id":"5",
     "name":"Auto Expo",
     "description": "loren ipsum",
     "date": "2012-04-23T18:25:43.511z"   
    }, 
    {
     "_id":"6",
     "name":"Auto Expo",
     "description": "loren ipsum",
     "date": "2012-04-23T18:25:43.511z"   
    }, 
    {
     "_id":"7",
     "name":"Auto Expo",
     "description": "loren ipsum",
     "date": "2012-04-23T18:25:43.511z"   
    }, 
    {
     "_id":"8",
     "name":"Auto Expo",
     "description": "loren ipsum",
     "date": "2012-04-23T18:25:43.511z"   
    }, 
    {
     "_id":"9",
     "name":"Auto Expo",
     "description": "loren ipsum",
     "date": "2012-04-23T18:25:43.511z"   
    }, 
    {
     "_id":"10",
     "name":"Auto Expo",
     "description": "loren ipsum",
     "date": "2012-04-23T18:25:43.511z"   
    }
]

res.json(events)
})


module.exports= router;