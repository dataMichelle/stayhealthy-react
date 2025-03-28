// src/components/LoginBtn.jsx
import React from "react";
import { Link } from "react-router-dom"; // For navigation
import { useAuthStore } from "../store/authStore"; // Zustand store for user management
import { signOut } from "firebase/auth"; // Firebase sign out function
import { auth } from "../lib/firebase"; // Import Firebase auth from your Firebase config file
import styles from "./Navbar.module.css"; // Import CSS module for styling

const LoginBtn = () => {
  const { user, logout } = useAuthStore(); // Zustand store to manage authentication state

  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out using Firebase
      logout(); // Clear Zustand store after logging out
    } catch (error) {
      console.error("Error logging out:", error); // Handle errors
    }
  };

  return (
    <div>
      {/* If the user is logged in, show the Logout button */}
      {user ? (
        <button className={styles.loginBtn} onClick={handleLogout}>
          Logout
        </button>
      ) : (
        // If the user is not logged in, show the Login button
        <Link to="/login" className={styles.loginBtn}>
          Login
        </Link>
      )}
    </div>
  );
};

export default LoginBtn;
