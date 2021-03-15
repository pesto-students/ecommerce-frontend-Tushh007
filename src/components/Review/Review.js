import React from "react";
import ProductRating from "../ProductRating/ProductRating";
import "./Review.scss";

const Review = ({ reviewData = {} }) => {
  const reviewContent =
    "I was looking for a bright light for the kitchen but wanted some item more modern than a strip light. this one is perfect, very bright and looks great. I can't comment on interlation as I had an electrition instal it. Would recommend...";

  const {
    name = "Rahul Arya",
    date = "14-03-2021",
    rating = 3.5,
    content = reviewContent,
  } = reviewData;
  return (
    <div className="review">
      <div className="reviewHeader">
        <h4 className="custName">{name}</h4>
        <div className="ratingDate">
          <ProductRating rating={rating} />
          <div className="Date">{date}</div>
        </div>
      </div>
      <p className="reviewContent">{content}</p>
    </div>
  );
};

export default Review;
