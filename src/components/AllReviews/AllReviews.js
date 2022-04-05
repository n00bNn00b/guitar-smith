import React from "react";
import "./AllReview.css";

const AllReviews = ({ review }) => {
  const { reviewer_name, rating, band, role, comment, image } = review;
  return (
    <div className="all-review">
      <img src={image} alt="" />
      <p id="comment">{comment}</p>
      <p id="signature">
        ~{reviewer_name}, {role}, {band}{" "}
      </p>
    </div>
  );
};

export default AllReviews;
