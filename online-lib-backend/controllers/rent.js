const mongoose = require("mongoose");
const rentForm = require("../models/rentmodel");


function bookrentalcreatecltr(req, res){
    let dueDate = new Date()
    //console.log(dueDate)
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

    // function bookrentalapprovalctrl(req,res){

    //     let rentData = rentForm.rentModel.findOneAndUpdate({Book_id:req.body.Book_id},{$set:{"status": "approve"}})
    //     console.log(rentData)

        // let rentData = rentForm.rentModel.findOne({Book_id: req.body.Book_id, User_id: req.body.User_id})
        // console.log(rentData)

        // res.json({Book_id: rentData.Book_id, User_id: rentData.User_id }).status(200)
            
        
            // rentData.save(err => { 
            //     if(err){
            //         console.log(err)
            //     }
            //     else{
            //         res.send({success: true });
            //     }})
            
        
    // }


    // function getRentallistctlr (req, res) {
    //     rentForm.rentModel.find({
    //         Book_id: req.body.Book_id,
        // }, {
        //     _id: 0,
        //     __v: 0
        // }, (err, data) => {
        //     if (err) {
        //         res.status(500).send({
        //             success: false,
        //             message: 'Something went wrong.'
        //         });
        //     } else if (data.length === 0) {
        //         res.status(404).send({
                   
        //             success: false,
        //             message: 'Invalid email provided.'
        //         });
        //     } else {
        //         res.send(data);
                
        //     }
        // });
    // });


    


    module.exports = { bookrentalcreatecltr , bookrentalapprovalctrl}