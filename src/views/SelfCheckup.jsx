"use client";

import React, { useState } from "react";
import styles from "./SelfCheckup.module.css"; // Import CSS Module

const SelfCheckup = () => {
  const [selectedConditions, setSelectedConditions] = useState([]);
  const [feverTemperature, setFeverTemperature] = useState("98.6"); // Default fever temperature

  const conditions = [
    "Headache",
    "Fever",
    "Cough",
    "Shortness of breath",
    "Fatigue",
    "Body aches",
    "Nausea",
    "Chest pain",
  ];

  const handleConditionChange = (event) => {
    const value = event.target.value;
    setSelectedConditions((prevState) => {
      if (prevState.includes(value)) {
        return prevState.filter((condition) => condition !== value);
      } else {
        return [...prevState, value];
      }
    });
  };

  const handleFeverChange = (event) => {
    setFeverTemperature(event.target.value);
  };

  const getRecommendations = () => {
    if (selectedConditions.length === 0) {
      return <p>Please select your symptoms to get recommendations.</p>;
    }

    const recommendations = [];

    // Recommendations for Fever
    if (
      selectedConditions.includes("Fever") &&
      parseFloat(feverTemperature) > 104
    ) {
      recommendations.push(
        "Your fever is very high. Please head to urgent care immediately."
      );
    } else {
      if (selectedConditions.includes("Fever")) {
        recommendations.push("Drink plenty of fluids and rest.");
      }
    }

    // Recommendations for Headache
    if (selectedConditions.includes("Headache")) {
      recommendations.push(
        "Try taking over-the-counter pain relievers like ibuprofen or acetaminophen."
      );
    }

    // Recommendations for Cough
    if (selectedConditions.includes("Cough")) {
      recommendations.push("Try warm fluids and throat lozenges.");
    }

    // Recommendations for Shortness of Breath
    if (selectedConditions.includes("Shortness of breath")) {
      recommendations.push(
        "If mild, rest and focus on slow, deep breathing. If severe, seek emergency medical attention immediately."
      );
    }

    // Recommendations for Fatigue
    if (selectedConditions.includes("Fatigue")) {
      recommendations.push(
        "Try to rest, hydrate well, and take breaks. If persistent or severe, seek medical advice."
      );
    }

    // Recommendations for Body Aches
    if (selectedConditions.includes("Body aches")) {
      recommendations.push(
        "Take over-the-counter pain relievers, stay hydrated, and rest."
      );
    }

    // Recommendations for Nausea
    if (selectedConditions.includes("Nausea")) {
      recommendations.push(
        "Stay hydrated with clear liquids and try ginger ale or tea. If nausea persists, seek medical advice."
      );
    }

    // Recommendations for Chest Pain
    if (selectedConditions.includes("Chest pain")) {
      recommendations.push(
        "If mild and suspected acid reflux, try antacids. If severe, call 911 immediately."
      );
    }

    // Dangerous combinations:
    if (
      selectedConditions.includes("Shortness of breath") &&
      selectedConditions.includes("Chest pain")
    ) {
      recommendations.push(
        "Chest pain and shortness of breath are signs of a possible heart attack or pulmonary embolism. Seek emergency medical attention immediately."
      );
    }

    if (
      selectedConditions.includes("Chest pain") &&
      selectedConditions.includes("Sweating")
    ) {
      recommendations.push(
        "Chest pain combined with sweating may be a sign of a heart attack. Call 911 immediately."
      );
    }

    if (
      selectedConditions.includes("Fever") &&
      selectedConditions.includes("Shortness of breath")
    ) {
      recommendations.push(
        "Fever and shortness of breath may be signs of a respiratory infection like COVID-19 or pneumonia. Seek medical attention immediately."
      );
    }

    // Joining selected symptoms with commas
    const selectedSymptoms = selectedConditions.join(", ");

    return (
      <div>
        <h3>Selected Symptoms:</h3>
        <p>{selectedSymptoms}</p>{" "}
        {/* Displaying symptoms as a comma-separated string */}
        <h3>Recommendations:</h3>
        <ul>
          {recommendations.map((rec, index) => (
            <li key={index}>{rec}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>Self Checkup</h1>
        <p className={styles.heroSubtitle}>
          Select your symptoms to get advice
        </p>
      </div>
      <div className={styles.form}>
        <h1 className={styles.heading}>Check Your Symptoms</h1>
        <form>
          {conditions.map((condition, index) => (
            <div key={index} className={styles.formGroup}>
              <input
                type="checkbox"
                id={condition}
                value={condition}
                onChange={handleConditionChange}
                className={styles.input}
              />
              <label htmlFor={condition} className={styles.label}>
                {condition}
              </label>
            </div>
          ))}

          {/* Input for fever temperature */}
          {selectedConditions.includes("Fever") && (
            <div className={styles.formGroup}>
              <label htmlFor="feverTemperature" className={styles.label}>
                Fever Temperature (°F)
              </label>
              <input
                type="number"
                id="feverTemperature"
                value={feverTemperature}
                onChange={handleFeverChange}
                className={styles.feverInput}
                placeholder="Enter your fever temperature"
                step="0.1" // Allow decimal increments of 0.1
                min="95" // Minimum temperature
                max="108" // Maximum temperature
              />
            </div>
          )}
        </form>

        {/* Content below checkboxes */}
        <div className={styles.formContent}>{getRecommendations()}</div>
      </div>
    </div>
  );
};

export default SelfCheckup;
