const mongoose = require("mongoose");
const userForm = require("../models/userModel");

//Staff registration section
function staffregisterctrl(req, res){
let userData = userForm.userModel({
    firstName: req.body.firstName,  
	lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    typeOfUser: 'staff',
    status: true
    });

    userData.save(err => { 
        if(err){
            console.log(err)
        }
        else{
            res.send({success: true });
        }})
    }



//Staff login section
async function  staffloginctrl(req, res){
    let useremail = req.body.email
    let userpassword = req.body.password

    let user = await userForm.userModel.findOne({email : useremail })
        
        if(user){
            if(userpassword == user.password){
                res.json({email : user.email , firstName: user.firstName }).status(200)
            }
            
        }
        else{
            res.send("User not found").status(404)
        }

}

async function userdisable(req,res){
    let useremail = req.body.email

    let user = await userForm.userModel.findOne({email : useremail })
    
        if(user){
            user.updateOne({email : user.email}, {status : "0"})

        }
        else{
            res.send("User not found")
        }

}


    module.exports = {staffregisterctrl , staffloginctrl, userdisable}
    