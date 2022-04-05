import React from "react";
import "./TopReview.css";

const TopReview = ({ review }) => {
  const { reviewer_name, rating, band, role, comment, image } = review;
  return (
    <div className="top-review">
      <img src={image} alt="" />
      <p> {rating} </p>
      <p id="comment">{comment}</p>
      <p id="signature" className="reviewer-name">
        ~{reviewer_name}
        <span>
          {" "}
          {role}, {band}{" "}
        </span>
      </p>
    </div>
  );
};

export default TopReview;
