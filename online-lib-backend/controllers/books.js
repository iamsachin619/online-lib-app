const mongoose = require("mongoose");
const bookForm = require("../models/bookModel");


function addbooksctrl(req, res){
let bookData = bookForm.bookModel({
    image: req.body.image,
    title: req.body.title,
    Author: req.body.author,
    publisher: req.body.publisher,
    category: req.body.category,
    yearOfPublishing: req.body.yearOfPublishing,
    uploader: req.body.uploader,
    amountRate: req.body.amountRate,
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


    function listbooksctrl(req, res){

            let listofbooks = bookForm.bookModel.find({})
            console.log(listofbooks)

    }
    function searchbooksctrl(req, res){}
    




    module.exports = {addbooksctrl , listbooksctrl , searchbooksctrl}