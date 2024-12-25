import React from "react";
import "./Ratings.css";


const Ratings = ({ rating }) => {
  const maxStars = 5;
  const starEmpty  =
      "https://cdn-icons-png.flaticon.com/512/1828/1828970.png"

  const starFilled =
      " https://cdn-icons-png.flaticon.com/512/1828/1828884.png"

  return (
      <div className="ratings d-flex justify-content-center">
        {[...Array(maxStars)].map((_, index) => (
            <img
                key={index}
                src={index < rating ? starFilled : starEmpty}
                alt={index < rating ? "Filled Star" : "Empty Star"}
                style={{ width: "20px", height: "20px", margin: "0 2px" }}
            />
        ))}
      </div>
  );
};

export default Ratings;
