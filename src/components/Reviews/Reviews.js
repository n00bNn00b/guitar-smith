import React from "react";
import useConsumerReview from "../../hook/useConsumerReview";
import AllReviews from "../AllReviews/AllReviews";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useConsumerReview();
  return (
    <div>
      <h2 className="review-heading">
        Reviews Given By our Satisfied Customers
      </h2>
      <div className="reviews">
        {reviews.map((review) => (
          <AllReviews key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
