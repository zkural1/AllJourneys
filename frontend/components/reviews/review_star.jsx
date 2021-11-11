import React from "react";
import ReactStars from "react-rating-stars-component";

const Rating = ({ review }) => {
  const star = {
    size: 1,
    isHalf: false,
    edit: false,
  };

  return (
    <div id="star-container">
      <ReactStars {...star} value={review.rating} />
    </div>
  );
};

export default Rating;
