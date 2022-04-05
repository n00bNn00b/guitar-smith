import React from "react";
import useConsumerReview from "../../hook/useConsumerReview";
import AllReviews from "../AllReviews/AllReviews";

const Reviews = () => {
  const [reviews, setReviews] = useConsumerReview();
  return (
    <div>
      <h2>Review App</h2>
      {reviews.map((review) => (
        <AllReviews key={review.id} review={review} />
      ))}
    </div>
  );
};

export default Reviews;
