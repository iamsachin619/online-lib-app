const mongoose = require("mongoose");
const rentForm = require("../models/rentmodel");

//renting the book
function bookrentalcreatecltr(req, res){
    let dueDate = new Date()
    todaysday = dueDate.getDate()
    console.log(todaysday)
    
    // rentaldays= dueDate.setDate(todaysday + 10 ) //req.body.noOfDaysToRent
    rentaldays = (todaysday + 30)
    console.log(rentaldays)
    console.log(dueDate)
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
    returnDate: "",
    Status: "Pending"
    });
  
//     rentData.save(err => { 
//         if(err){
//             console.log(err)
//         }
//         else{
//             res.send({success: true });
//         }})
    }

    // function bookrentalapprovalctrl(req,res){

        let num = req.body._id
        console.log(req.body._id) 

        let rentData = rentForm.rentModel.find({_id : req.body._id })
        console.log(rentData)
        //let rentData = rentForm.rentModel.findOneAndUpdate({Book_id: req.body.rental_id},{approvedBy:req.body.staff_id,status: 'approve'})
        //let rentData = rentForm.rentModel.findOneAndUpdate({Book_id: tostring(req.body.Book_id)},{ $set: {approvedBy:'1234',status: 'approve'}})
        // console.log(rentData)
        res.send("let check")
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