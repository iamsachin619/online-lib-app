import React from "react";

export default function RequestCard() {
  return (
    <div className="card my-2">
      <div className="row">
        <div className="col-md-8 ">
          {/* Book_id: book_id
                    User_id: user_id
                    issueDate: Date
                    dueDate: Date
                    amount: number
                    approvedBy: ObjectId(User/staff)
                    lateFeeCharged: 0   (will change when rentals closed)
                    returnDate: Date
                    Status: string  */}

          <div className="content m-3 row">
            {/* <div className="col-4 font-weight-bold">
                <p className="detail">Book name: </p>
                <p className="detail">User email:</p>
                <p className="detail">Amount:</p>
                <p className="detail">Returning within: </p>  
            </div>
            <div className="col-8">
                <p className="detail">Roughing It</p>
                <p className="detail">ss.gg@gx.com</p>
                <p className="detail">Rs.250/-</p>
                <p className="detail">15 Days </p> 
            </div> */}
           <table>
            <tr>
                <th><p className="detail">Book name: </p></th>
                <td><p className="detail">Roughing It</p></td>
            </tr>

            <tr>
                <th><p className="detail">User email: </p></th>
                <td><p className="detail">sachin@gg.com</p></td>
            </tr>
            <tr>
                <th><p className="detail">Amount: </p></th>
                <td><p className="detail">Rs.23</p></td>
            </tr>
            <tr>
                <th><p className="detail">Returning within: </p></th>
                <td><p className="detail">15 days</p></td>
            </tr>
           </table>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="btns d-flex justify-content-end m-2">
            <button className="btn btn-success mx-2">Accept</button>
            <button className="btn btn-danger">Decline</button>
          </div>
        </div>
      </div>
    </div>
  );
}
