const { rentModel } = require('../models/rentmodel')

const listPendingRequests = async (req, res) => {
  let pendingRequests = await rentModel.find({ Status: 'pending' })
  console.log({ pendingRequests })
  res.json(pendingRequests).status(200)
}

async function bookrentalapprovalctrl(req, res) {
  const rental_id = req.body.rental_id;
  const staff_id = req.body.staff_id;
  console.log(req.body._id);

  // let rentData = await rentForm.rentModel.find({_id : req.body._id })

  //updating rent object
  let dueDate = new Date()
  let rent = await rentForm.rentModel.findOne({ _id: rental_id })
  dueDate.setDate(dueDate.getDate() + rent.noOfDaysToRent)
  let rentData = await rentForm.rentModel.findOneAndUpdate(
    { _id: rental_id },
    { approvedBy: staff_id, Status: "approved", approvalDate: new Date(), dueDate: dueDate },
    { new: true },
    (err, docs) => {
      if (err) {
        console.log(err);
        res.send("task failed");
      } else {
        console.log("Updated: ", docs);
        res.send("approved").status(200);
      }
    }
  );

  console.log(rentData);

  // res.send("let check")
}



async function bookrentaldeclinectrl(req, res) {
  const rental_id = req.body.rental_id;
  const staff_id = req.body.staff_id;
  console.log(req.body._id);

  // let rentData = await rentForm.rentModel.find({_id : req.body._id })

  //updating rent object
  //let dueDate = new Date()
  let rent = await rentForm.rentModel.findOne({ _id: rental_id })
  //dueDate.setDate(dueDate.getDate() + rent.noOfDaysToRent)
  let rentData = await rentForm.rentModel.findOneAndUpdate(
    { _id: rental_id },
    { approvedBy: staff_id, Status: "decline", approvalDate: new Date() },
    { new: true },
    (err, docs) => {
      if (err) {
        console.log(err);
        res.send("task failed");
      } else {
        console.log("Updated: ", docs);
        res.send("Request Declined").status(200);
      }
    }
  );

  console.log(rentData);

  // res.send("let check")
}

module.exports = { listPendingRequests, bookrentalapprovalctrl, bookrentaldeclinectrl }