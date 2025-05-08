// src/components/SignUp.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../lib/firebase"; // Import your Firebase auth instance
import { createUserWithEmailAndPassword } from "firebase/auth";
import styles from "./SignUp.module.css"; // Import the CSS module

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // Add confirm password for verification
  const [error, setError] = useState(""); // For handling error messages
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error state

    // Validate that passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      // Sign up user with email and password
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/appointments"); // Redirect to the Appointments page after successful signup
    } catch (error) {
      console.error(error.message);
      setError(error.message); // Display error message if signup fails
    }
  };

  return (
    <div className={styles.container}>
      <h2>Sign Up</h2>
      {error && <p className={styles.error}>{error}</p>}{" "}
      {/* Display error message if exists */}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
