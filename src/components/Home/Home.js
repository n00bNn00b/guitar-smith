import React from "react";
import useConsumerReview from "../../hook/useConsumerReview";
import TopReview from "../TopReview/TopReview";

const Home = () => {
  const [reviews, setReviews] = useConsumerReview();
  return (
    <div>
      <h2>Home App</h2>
      {reviews.slice(0, 3).map((review) => (
        <TopReview key={review.id} review={review} />
      ))}
    </div>
  );
};

export default Home;
