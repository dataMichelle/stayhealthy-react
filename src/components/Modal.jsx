import React from "react";
import styles from "./Modal.module.css"; // Import the CSS module

export default function Modal({
  isOpen,
  onClose,
  title,
  description,
  children,
}) {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>{title}</h2>
        <p>{description}</p>
        {children}
        <button onClick={onClose} className={styles.closeButton}>
          Close
        </button>
      </div>
    </div>
  );
}
