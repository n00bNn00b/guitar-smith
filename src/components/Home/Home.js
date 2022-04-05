import React from "react";
import { Link } from "react-router-dom";
import useConsumerReview from "../../hook/useConsumerReview";
import TopReview from "../TopReview/TopReview";
import "./Home.css";

const Home = () => {
  const [reviews, setReviews] = useConsumerReview();
  return (
    <div>
      <div className="site-intro">
        <div className="intro-container">
          <h2>Guitar Smith </h2>
          <p className="intro-info">
            Guitar Smith is an instrument repairing shop where we assure
            instrumentalists to repair their broken instruments. Services we
            provide:
            <ul>
              <li>Fix Broken Guitar Neck</li>
              <li>Fix Guitar Headstock</li>
              <li> Fix Tuning Pegs </li>
              <li> Fix Guitar Bridge </li>
              <li>Fix Guitar pickups</li>
              <li>Fix Guitar Alignment & many more</li>
            </ul>
          </p>
          <Link to="/about">
            <button>Explore More</button>
          </Link>
        </div>
        <div className="intro-cover">
          <img src="ibanez.png" alt="" />
        </div>
      </div>

      <div>
        <h2>Top Reviews</h2>
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
