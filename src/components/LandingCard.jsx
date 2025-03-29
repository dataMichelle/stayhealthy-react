import React from "react";
import { Link } from "react-router-dom";
import styles from "./LandingCard.module.css"; // Using CSS Modules for styling

export default function LandingCard({ title, description, imageSrc, to }) {
  return (
    <Link to={to} style={{ textDecoration: "none", color: "inherit" }}>
      <div className={styles.card}>
        <img src={imageSrc} alt={title} className={styles.cardImage} />
        <div className={styles.cardContent}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
}
