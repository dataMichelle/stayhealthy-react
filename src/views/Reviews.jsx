import { useState, useEffect } from "react";
import doctorData from "../data/doctors";
import Modal from "../components/Modal";
import FeedbackForm from "../components/FeedbackForm";
import { PiSortAscendingFill } from "react-icons/pi";
import styles from "./Reviews.module.css";
import { Rating } from "@mui/material";

export default function ReviewsPage() {
  const [reviews, setReviews] = useState({});
  const [sortedDoctors, setSortedDoctors] = useState([...doctorData.doctors]);
  const [sortConfig, setSortConfig] = useState({
    key: "lastName",
    direction: "ascending",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  // Load stored reviews from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedReviews = {};
      doctorData.doctors.forEach((doctor) => {
        const doctorReview = localStorage.getItem(`review-${doctor.id}`);
        if (doctorReview) {
          storedReviews[doctor.id] = JSON.parse(doctorReview);
        }
      });
      setReviews(storedReviews);
    }
  }, []);

  // Save reviews to localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("reviews", JSON.stringify(reviews));
    }
  }, [reviews]);

  // Sorting doctors by last name
  useEffect(() => {
    const sorted = [...doctorData.doctors].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key])
        return sortConfig.direction === "ascending" ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key])
        return sortConfig.direction === "ascending" ? 1 : -1;
      return 0;
    });
    setSortedDoctors(sorted);
  }, [sortConfig]);

  const handleSubmitReview = (reviewData) => {
    const updatedReviews = {
      ...reviews,
      [selectedDoctor.id]: {
        ...reviews[selectedDoctor.id],
        rating: reviewData.rating,
        review: reviewData.review,
      },
    };
    setReviews(updatedReviews);
    setIsModalOpen(false); // Close modal after submitting the review
  };

  const sortDoctors = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const handleGiveReview = (doctor) => {
    console.log("Button clicked:", doctor);
    setSelectedDoctor(doctor);
    setIsModalOpen(true); // Open modal when user clicks "Leave a Review"
  };

  return (
    <main className={styles.reviewsContainer}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Patient Reviews</h1>
        <p className={styles.heroSubtitle}>
          Read real reviews from patients who have visited our healthcare
          professionals.
        </p>
      </section>

      {/* Sorting Section */}
      <div className={styles.sortSection}>
        <p>Sort by Last Name</p>
        <PiSortAscendingFill
          onClick={() => sortDoctors("lastName")}
          className={styles.sortIcon}
        />
      </div>

      {/* Reviews Grid */}
      <section className={styles.gridContainer}>
        {sortedDoctors.map((doctor) => (
          <div key={doctor.id} className={styles.card}>
            <h2 className={styles.cardTitle}>
              Dr. {doctor.firstName} {doctor.lastName}
            </h2>
            <p className={styles.cardSpecialty}>{doctor.specialty}</p>

            <button
              onClick={() => handleGiveReview(doctor)}
              className={styles.reviewButton}
            >
              Leave a Review
            </button>

            {/* Display Review */}
            <div className={styles.reviewContent}>
              <strong>Review:</strong>{" "}
              {reviews[doctor.id]?.review || "No review given"}
            </div>

            {/* Display Rating */}
            <div className={styles.rating}>
              <strong>Rating:</strong>{" "}
              <Rating
                value={reviews[doctor.id]?.rating || 0} // Pass the saved rating
                precision={0.5} // Enable half-star display
                readOnly // Make it read-only
              />
            </div>
          </div>
        ))}
      </section>

      {/* Review Modal */}
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Give Review"
          description={`Review for Dr. ${selectedDoctor?.firstName} ${selectedDoctor?.lastName} (${selectedDoctor?.specialty})`}
        >
          {selectedDoctor && (
            <FeedbackForm
              doctor={selectedDoctor}
              onSubmit={handleSubmitReview}
            />
          )}
        </Modal>
      )}
    </main>
  );
}
