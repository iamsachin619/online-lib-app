const mongoose = require("mongoose");
const rentForm = require("../models/rentmodel");
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
const bookForm = require("../models/bookModel");

>>>>>>> 2e9ed33 (Arun)
=======
const bookForm = require("../models/bookModel");

>>>>>>> 20e09fbd92d54f4edc93d221209dca2cf0d12f18

//renting the book
function bookrentalcreatecltr(req, res){
    let dueDate = new Date()
<<<<<<< HEAD
=======
    //console.log(dueDate)
    dueDate.setDate(dueDate.getDate() + req.body.noOfDaysToRent)
>>>>>>> 20e09fbd92d54f4edc93d221209dca2cf0d12f18
    todaysday = dueDate.getDate()
    console.log(todaysday)
    
    // rentaldays= dueDate.setDate(todaysday + 10 ) //req.body.noOfDaysToRent
    rentaldays = (todaysday + 30)
    console.log(rentaldays)
<<<<<<< HEAD
    console.log(dueDate)
    //console.log(dueDate)
    dueDate.setDate(dueDate.getDate() + req.body.noOfDaysToRent)
=======
>>>>>>> 20e09fbd92d54f4edc93d221209dca2cf0d12f18

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
<<<<<<< HEAD
<<<<<<< HEAD
=======
const bookForm = require("../models/bookModel");
//renting the book
async function bookrentalcreatecltr(req, res) {
=======
=======
>>>>>>> 20e09fbd92d54f4edc93d221209dca2cf0d12f18
    async function bookrentalapprovalctrl(req,res){

    //     let rentData = rentForm.rentModel.findOneAndUpdate({Book_id:req.body.Book_id},{$set:{"status": "approve"}})
    //     console.log(rentData)

        // let rentData = rentForm.rentModel.findOne({Book_id: req.body.Book_id, User_id: req.body.User_id})
        // console.log(rentData)

        // res.json({Book_id: rentData.Book_id, User_id: rentData.User_id }).status(200)
            
        let num = req.body._id
        console.log(req.body._id) 

        async function bookrentalcreatecltr(req, res) {
<<<<<<< HEAD
>>>>>>> 2e9ed33 (Arun)
  let dueDate = new Date();
  todaysday = dueDate.getDate();

>>>>>>> 2110d88 (backend middleware and routes restructure)
=======
  let dueDate = new Date();
  todaysday = dueDate.getDate();

>>>>>>> 20e09fbd92d54f4edc93d221209dca2cf0d12f18

  dueDate.setDate(todaysday + req.body.noOfDaysToRent ) //req.body.noOfDaysToRent
//   rentaldays = todaysday + 30;
//   console.log(rentaldays);

<<<<<<< HEAD
<<<<<<< HEAD
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
            
        
<<<<<<< HEAD
            // rentData.save(err => { 
            //     if(err){
            //         console.log(err)
            //     }
            //     else{
            //         res.send({success: true });
            //     }})
=======
=======
let book =await bookForm.bookModel.findOne({_id:req.body.book_id})

        console.log(rentData)
        
        res.send("let check")
        
>>>>>>> 20e09fbd92d54f4edc93d221209dca2cf0d12f18
        
                           
        
    }
  let rentData = rentForm.rentModel({
    Book_id: req.body.book_id,
    User_id: req.body.user_id,
    createdDate: new Date(),
    dueDate: new Date(),
    approvalDate: new Date(),
    amount: book.amountRate * req.body.noOfDaysToRent,
    approvedBy: "",
    lateFeeCharged: 0,
    returnDate: "",
    Status: "pending",
    noOfDaysToRent:req.body.noOfDaysToRent

  });

      rentData.save(err => {
          if(err){
              console.log(err)
          }
          else{
              res.send({success: true });
          }})
}


        console.log(rentsByUser)
        
          let myBooks = await Promise.all(rentsByUser.map(async(rental)=>{
            let book = await bookForm.bookModel.findOne({_id: rental.Book_id})  
           return book
<<<<<<< HEAD
>>>>>>> 2e9ed33 (Arun)
            
=======
            
        }))
>>>>>>> 20e09fbd92d54f4edc93d221209dca2cf0d12f18
        
    


    
        

<<<<<<< HEAD

    
module.exports = { bookrentalcreatecltr , bookrentalapprovalctrl}
=======
let book =await bookForm.bookModel.findOne({_id:req.body.book_id})

  let rentData = rentForm.rentModel({
    Book_id: req.body.book_id,
    User_id: req.body.user_id,
    createdDate: new Date(),
    dueDate: new Date(),
    approvalDate: new Date(),
    amount: book.amountRate * req.body.noOfDaysToRent,
    approvedBy: "",
    lateFeeCharged: 0,
    returnDate: "",
    Status: "pending",
    noOfDaysToRent:req.body.noOfDaysToRent

  });

      rentData.save(err => {
          if(err){
              console.log(err)
          }
          else{
              res.send({success: true });
          }})
}


=======
        res.json(myBooks)
>>>>>>> 20e09fbd92d54f4edc93d221209dca2cf0d12f18

async function usermybooks(req, res) {
  let user_id = req.body.user_id;
  let rentsByUser = await rentForm.rentModel.find({
    User_id: user_id,
    Status: "approved",
  });
  console.log(rentsByUser);
  let myBooks = await Promise.all(
    rentsByUser.map(async (rental) => {
      let book = await bookForm.bookModel.findOne({ _id: rental.Book_id });
      return book;
    })
  );

  res.json(myBooks);
}

async function usermyOrders(req, res) {
  let user_id = req.body.user_id;
  let rentsByUser = await rentForm.rentModel.find({ User_id: user_id });
  res.json(rentsByUser);
}

module.exports = {
  bookrentalcreatecltr,
  usermybooks,
  usermyOrders,
};
<<<<<<< HEAD
>>>>>>> 2110d88 (backend middleware and routes restructure)
=======
>>>>>>> 20e09fbd92d54f4edc93d221209dca2cf0d12f18
