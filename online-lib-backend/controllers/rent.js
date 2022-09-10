const mongoose = require("mongoose");
const rentForm = require("../models/rentmodel");
const bookForm = require('../models/bookModel')
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

    async function bookrentalapprovalctrl(req,res){

        let num = req.body._id
        console.log(req.body._id) 

       // let rentData = await rentForm.rentModel.find({_id : req.body._id })
        
        let rentData = await rentForm.rentModel.findOneAndUpdate({_id: req.body.rental_id},
                {approvedBy:req.body.staff_id,Status: 'approved'},
                {new: true}, (err, docs) => {
                    if (err){
                        console.log(err)
                    }
                    else{
                        console.log("Updated: ", docs);
                        res.send("lets check")
                    }})

        console.log(rentData)
        
        res.send("let check")
        
                           
        
    }


    async function usermybooks(req, res){

        let user_id = req.body.user_id
        
        let rentsByUser = await rentForm.rentModel.find({User_id: user_id, Status:'approved'})

        console.log(rentsByUser)
        
          let myBooks = await Promise.all(rentsByUser.map(async(rental)=>{
            let book = await bookForm.bookModel.findOne({_id: rental.Book_id})  
           return book
            
        }))
        
        res.json(myBooks)

    }


    async function usermyOrders(req, res){
        let user_id = req.body.user_id
        let rentsByUser = await rentForm.rentModel.find({User_id: user_id})
        res.json(rentsByUser)
    }

    
module.exports = { bookrentalcreatecltr , bookrentalapprovalctrl, usermybooks,usermyOrders}