const mongoose = require("mongoose");
const userForm = require("../models/userModel");


function userregisterctrl(req, res){
let userData = userForm.userModel({
    firstName: req.body.firstName,  
	lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    typeOfUser: 'user',
    status: true
    });

    //console.log(userData)

    userData.save(err => { 
        if(err){
            console.log(err)
        }
        else{
            res.send({success: true });
        }})
    }




function  userloginctrl(req, res){
    let useremail = req.body.email
    //let userpassword = req.body.password
    console.log(useremail)

    let user = userForm.userModel.findOne({email : useremail })
        console.log(user)
        // if(user){
        //     if(userpassword == user.password){
        //         res.json({email : user.email , firstName: user.firstName }).status(200)
        //     }
            
        // }
        // else{
        //     res.send("User not found").status(404)
        // }

         
}


    module.exports = {userregisterctrl , userloginctrl}
    