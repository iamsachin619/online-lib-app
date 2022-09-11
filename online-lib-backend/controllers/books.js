const mongoose = require("mongoose");
const bookForm = require("../models/bookModel");

function addbooksctrl(req, res) {
  let bookData = bookForm.bookModel({
    image: req.body.image,
    title: req.body.title,
    author: req.body.author,
    publisher: req.body.publisher,
    category: req.body.category,
    yearOfPublishing: req.body.yearOfPublishing,
    uploader: req.body.uploader,
    amountRate: req.body.amountRate,
<<<<<<< HEAD
    });

    // console.log(req.body.image)
    // console.log(bookData)
    bookData.save(err => { 
        if(err){
            console.log(err)
        }
        else{
            res.send({success: true });
        }})
    }

    async function listbooksctrl(req, res){
            const filter = {}
            let listofbooks = await bookForm.bookModel.find(filter)
            console.log(listofbooks)
            //res.json({title : listofbooks.title , year: listofbooks.yearOfPublishing }).status(200)
            res.json(listofbooks)

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 20e09fbd92d54f4edc93d221209dca2cf0d12f18
    async function listbooksctrl(req, res){
        const filter={}

            let listofbooks = await bookForm.bookModel.find(filter)
            console.log(listofbooks)
<<<<<<< HEAD
=======
=======
>>>>>>> 20e09fbd92d54f4edc93d221209dca2cf0d12f18
    }
    
    async function searchbooksctrl(req, res){

        let searchtitle = req.body.search
        

        console.log(searchtitle)
        const filter = {$or:[
            {"title":{"$in":[searchtitle]}},
            {"publisher":{"$in":[searchtitle]}}
        ]}
        let listofbooks = await bookForm.bookModel.find(filter)
            //console.log(listofbooks)
            //res.json({title : listofbooks.title , year: listofbooks.yearOfPublishing }).status(200)
<<<<<<< HEAD
>>>>>>> 16c5808 (Pramod)
            res.json(listofbooks)
<<<<<<< HEAD
=======
  });
>>>>>>> 2110d88 (backend middleware and routes restructure)
=======
  };
>>>>>>> 680bdb3 (Arun)
=======
            res.json(listofbooks)
  };
>>>>>>> 20e09fbd92d54f4edc93d221209dca2cf0d12f18

  // console.log(req.body.image)
  // console.log(bookData)
  bookData.save((err) => {
    if (err) {
      console.log(err);
      res.send("task failed").status(400);
    } else {
      res.send({ success: true });
    }
  });
}

async function listbooksctrl(req, res) {
  const filter = {};
  let listofbooks = await bookForm.bookModel.find(filter);
  console.log(listofbooks);
  //res.json({title : listofbooks.title , year: listofbooks.yearOfPublishing }).status(200)
  res.json(listofbooks);
}

async function searchbooksctrl(req, res) {
  let searchtitle = req.body.search;

  console.log(searchtitle);
  const filter = {
    $or: [
      { title: { $in: [searchtitle] } },
      { publisher: { $in: [searchtitle] } },
    ],
  };
  let listofbooks = await bookForm.bookModel.find(filter);
  //console.log(listofbooks)
  //res.json({title : listofbooks.title , year: listofbooks.yearOfPublishing }).status(200)
  res.json(listofbooks);
}

async function deletebooksctrl(req, res) {
  let book_id = req.body.book_id;
  let deleteBook = await bookForm.bookModel.findOneAndDelete({ _id: book_id });
  res.json(deleteBook);
}

async function editbookctrl(req, res) {
  let book_id = req.body.book_id;
  let editObj = req.body.editObj;

  let updatedBook = await bookForm.bookModel.updateOne(
    { _id: book_id },
    { $set: { ...editObj } },
    { new: true }
  );
  res.json(updatedBook);
}

module.exports = {
  addbooksctrl,
  listbooksctrl,
  searchbooksctrl,
  deletebooksctrl,
  editbookctrl,
};
