const mongoose = require("mongoose");
const userForm = require("../models/userModel");
const jwt = require("jsonwebtoken");

function userregisterctrl(req, res) {
  let userData = userForm.userModel({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    typeOfUser: "user",
    status: true,
  });

  //console.log(userData)

  userData.save((err) => {
    if (err) {
      console.log(err);
    } else {
      res.send({ success: true });
    }
  });
}

async function userloginctrl(req, res) {
  let useremail = req.body.email;
  let userpassword = req.body.password;
  console.log(useremail);

  let user = await userForm.userModel.findOne({ email: useremail });
  console.log(user);

  if (user) {
   
    if(user.status == false) {
        res.send('user is not active ').status(403)
    }
    if (userpassword == user.password) {
      const token = jwt.sign(
        { id: user._id, role: user.typeOfUser },
        process.env.JWT_SECRET
      );
      res
        .cookie("access_token", token, { httpOnly: true })
        .json({
          email: user.email,
          firstName: user.firstName,
          role: user.typeOfUser,
        })
        .status(200);
    } else {
      res.send('invalid pass').status(401);
    }
  } else {
    res.send("User not found").status(404);
  }
}



module.exports = { userregisterctrl, userloginctrl };
