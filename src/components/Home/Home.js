import React from "react";
import { Link } from "react-router-dom";
import useConsumerReview from "../../hook/useConsumerReview";
import TopReview from "../TopReview/TopReview";
import "./Home.css";

const Home = () => {
  const [reviews, setReviews] = useConsumerReview();
  return (
    <div>
      <div>Home App</div>
      <div>
        {reviews.slice(0, 3).map((review) => (
          <TopReview key={review.id} review={review} />
        ))}
        <Link to="/reviews">
          <button>See All Reviews</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
