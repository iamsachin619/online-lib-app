const mongoose = require("mongoose");
const duration = 24*60*60*1000
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
    copiesNumber: req.body.copiesNumber
    });

    console.log(req.body.image)
    console.log(bookData)
    

    bookData.save(err => { 
        if(err){
            console.log(err)
        }
        else{
            res.send({success: true });
        }})
    }


    function listbooksctrl(req, res){}
    function searchbooksctrl(req, res){}
    




    module.exports = {addbooksctrl}