const mongoose = require("mongoose");
const rentForm = require("../models/rentmodel");


function bookrentalcreatecltr(req, res){
    let dueDate = new Date()
    console.log(dueDate)
    dueDate.setDate(dueDate.getDate() + req.body.noOfDaysToRent)

 let rentData = rentForm.rentModel({
    Book_id: req.body.Book_id,
    User_id: req.body.User_id,
    issueDate: new Date(),
    dueDate: dueDate,
    amount: req.body.amount,
    approvedBy: "",
    lateFeeCharged: 0,
    returnDate: new Date(),
    Status: "Pending"
    });
  
    rentData.save(err => { 
        if(err){
            console.log(err)
        }
        else{
            res.send({success: true });
        }})
    }

    function bookrentalapprovalctrl(req,res){

        let rentData = rentForm.rentModel.findOneAndUpdate({_id: req.body.rental_id},{approvedBy:req.body.staff_id,status: 'approve'})
        console.log(rentData)
        
          
            // rentData.save(err => { 
            //     if(err){
            //         console.log(err)
            //     }
            //     else{
            //         res.send({success: true });
            //     }})
            
        
    }
    


    module.exports = { bookrentalcreatecltr , bookrentalapprovalctrl}