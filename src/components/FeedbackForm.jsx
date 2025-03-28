import React, { useState, useEffect } from "react";
import { Rating } from "@mui/material";
import styles from "./FeedbackForm.module.css"; // Import the CSS module

const FeedbackForm = ({ doctor, onSubmit }) => {
  const [rating, setRating] = useState(0); // State to store rating
  const [review, setReview] = useState(""); // State to store review

  // Load the stored review from localStorage (if any)
  useEffect(() => {
    const storedReview = JSON.parse(
      localStorage.getItem(`review-${doctor.id}`)
    );
    if (storedReview) {
      setRating(storedReview.rating);
      setReview(storedReview.review);
    }
  }, [doctor.id]);

  // Handle the star change
  const handleRatingChange = (event, newRating) => {
    setRating(newRating);
    const updatedReview = { rating: newRating, review };
    localStorage.setItem(`review-${doctor.id}`, JSON.stringify(updatedReview)); // Save updated review
  };

  // Handle review text change
  const handleReviewChange = (e) => {
    const newReview = e.target.value;
    setReview(newReview);
    const updatedReview = { rating, review: newReview };
    localStorage.setItem(`review-${doctor.id}`, JSON.stringify(updatedReview)); // Save updated review
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rating) {
      alert("Please provide a rating before submitting.");
      return;
    }
    onSubmit({ rating, review }); // Submit rating and review
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h3 className={styles.title}>
        Leave a Review for Dr. {doctor.firstName} {doctor.lastName}
      </h3>

      {/* Stars */}
      <div className={styles.stars}>
        <Rating
          name="half-rating"
          value={rating}
          precision={0.5}
          onChange={handleRatingChange}
          sx={{ fontSize: "2rem" }} // Increase star size
        />
      </div>

      {/* Review Text */}
      <textarea
        value={review}
        onChange={handleReviewChange} // Update review on change
        className={styles.textarea}
        placeholder="Write your review here..."
      />

      {/* Submit Button */}
      <button type="submit" className={styles.submitBtn}>
        Submit Review
      </button>
    </form>
  );
};

export default FeedbackForm;
