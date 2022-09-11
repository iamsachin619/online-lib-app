const mongoose = require("mongoose");
const rentForm = require("../models/rentmodel");
const bookForm = require("../models/bookModel");


//renting the book
function bookrentalcreatecltr(req, res){
    let dueDate = new Date()
    //console.log(dueDate)
    dueDate.setDate(dueDate.getDate() + req.body.noOfDaysToRent)
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

    // function bookrentalapprovalctrl(req,res){
    async function bookrentalapprovalctrl(req,res){

    //     let rentData = rentForm.rentModel.findOneAndUpdate({Book_id:req.body.Book_id},{$set:{"status": "approve"}})
    //     console.log(rentData)

        // let rentData = rentForm.rentModel.findOne({Book_id: req.body.Book_id, User_id: req.body.User_id})
        // console.log(rentData)

        // res.json({Book_id: rentData.Book_id, User_id: rentData.User_id }).status(200)
            
        let num = req.body._id
        console.log(req.body._id) 

        async function bookrentalcreatecltr(req, res) {
  let dueDate = new Date();
  todaysday = dueDate.getDate();


  dueDate.setDate(todaysday + req.body.noOfDaysToRent ) //req.body.noOfDaysToRent
//   rentaldays = todaysday + 30;
//   console.log(rentaldays);

let book =await bookForm.bookModel.findOne({_id:req.body.book_id})

        console.log(rentData)
        
        res.send("let check")
        
        
                           
        
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
            
        }))
        
    


    
        

        res.json(myBooks)

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
