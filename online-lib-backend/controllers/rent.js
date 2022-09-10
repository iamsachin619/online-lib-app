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

    function bookrentalapprovalctrl(req,res){

        let num = req.body._id
        console.log(req.body._id) 

        let rentData = rentForm.rentModel.find({_id : req.body._id })
        console.log(rentData)
        //let rentData = rentForm.rentModel.findOneAndUpdate({Book_id: req.body.rental_id},{approvedBy:req.body.staff_id,status: 'approve'})
        //let rentData = rentForm.rentModel.findOneAndUpdate({Book_id: tostring(req.body.Book_id)},{ $set: {approvedBy:'1234',status: 'approve'}})
        // console.log(rentData)
        res.send("let check")
        
          
            // rentData.save(err => { 
            //     if(err){
            //         console.log(err)
            //     }
            //     else{
            //         res.send({success: true });
            //     }})
            
        
    }
    
module.exports = { bookrentalcreatecltr , bookrentalapprovalctrl}