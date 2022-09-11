const mongoose = require("mongoose");
const rentForm = require("../models/rentmodel");
const bookForm = require("../models/bookModel");


//renting the book
async function bookrentalcreatecltr(req, res) {
  let dueDate = new Date();
  todaysday = dueDate.getDate();


  dueDate.setDate(todaysday + req.body.noOfDaysToRent ) //req.body.noOfDaysToRent
//   rentaldays = todaysday + 30;
//   console.log(rentaldays);

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
