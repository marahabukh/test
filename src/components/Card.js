import React from "react";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";
import shop from "./shop.png";
import Ratings from "./Ratings";

const Card = ({ title, description, price, image, rating}) => {
  const handleAddToCart = async () => {
    try {
      await addDoc(collection(db, "cart"), {
        title,
        description,
        price,
        image,
        rating,
        
      });
      alert("Item added to cart!");
    } catch (error) {
      console.error("Error adding item to cart: ", error);
      alert("Failed to add item to cart. Please try again.");
    }
  };

  return (
      <div
          className="card overflow-hidden mt-1 mb-1 p-0 bigcard Translate-middle mx-auto hover-zoom"
          style={{ width: "18rem", height: "auto" }}
      >
        {/* Card Image */}
        <img
            src={image || "https://via.placeholder.com/150"}
            className="card-img-top"
            alt={title || "Card image"}
            style={{ objectFit: "cover", height: "180px", width: "100%" }} // Ensures image fills the card
        />

        {/* Card Body */}
        <div className="card-body card1 text-center">
          <h5 className="card-title">{title || "Card Title"}</h5>
          <p className="card-text">{description || "No description provided."}</p>
          {/* Display Rating */}
          <div className="rate d-flex justify-content-center align-items-center">
            <Ratings rating={rating || 2} />
            <span className="ms-2">({rating || 2} / 5)</span> {/* Show numeric rating */}
          </div>

          <p className="Price">{price ? `${price}$$` : "Price not available"}</p>

          {/* Add to Cart Button */}
          <button
              className="btn btn-dark w-100 mt-3"
              onClick={handleAddToCart}
          >
            <img
                className="photoCard me-2"
                style={{ width: "20px", height: "20px" }}
                src={shop}
                alt="shop"
            />
            Add To Cart
          </button>
        </div>
      </div>
  );
};

export default Card;
