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


    async function listbooksctrl(req, res){
        const filter={}

            let listofbooks = await bookForm.bookModel.find(filter)
            console.log(listofbooks)
            res.json(listofbooks)

    }
    function searchbooksctrl(req, res){}
    




    module.exports = {addbooksctrl , listbooksctrl , searchbooksctrl}