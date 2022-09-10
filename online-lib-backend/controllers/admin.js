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

        console.log(userData)

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
        console.log("User details: " + user )

        if(user){
            console.log("found user")
          userForm.userModel.updateOne({email :  user.email }, { status  : false },  (err, docs) => {
    
            if (err){
                console.log(err)
            }
            else{
                console.log("Updated user : ", docs);
                res.send("lets check")
            }
            
    
    })
        }
        else{
            res.send("user not found")
        }
       
}


async function userenable(req,res){
    let useremail = req.body.email

    let user = await userForm.userModel.findOne({email : useremail })
        console.log("User details: " + user )

        if(user){
        
          userForm.userModel.updateOne({email :  user.email }, { status  : true }, function (err, docs) {
                if (err){
                    console.log(err)
                }
                else{
                   res.send(user)
                }
                })
        }
        else{
            res.send("user not found")
        }
       
}

    module.exports = {staffregisterctrl , staffloginctrl, userdisable, userenable}
    