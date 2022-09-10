import React from "react";
import './bookCard.css'
export default function BookCard() {
  return (
    <div className="book unread">
      <div className="cover">
        <img src="http://www.publishersweekly.com/images/data/ARTICLE_PHOTO/photo/000/028/28129-1.JPG" />
      </div>
      <div className="description">
        <p className="title">
          Roughing It
          <br />
          <span className="author">Mark Twain</span>
        </p>
      </div>
      {/* <div className="details">
        <p>publisher: string
    category: string
    yearOfPublishing: Int32  //number
    uploader: String  // users_id
    amountRate: Int32 // number</p>
      </div> */}
    </div>
  );
}
