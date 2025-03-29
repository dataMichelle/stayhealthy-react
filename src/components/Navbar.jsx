import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Add useNavigate here
import LoginBtn from "./LoginBtn"; // Import LoginBtn component
import styles from "./Navbar.module.css"; // CSS module for styling
import logo from "../assets/logo.png"; // Import logo image
import { useAuthStore } from "../store/authStore"; // Zustand store for authentication

const Navbar = () => {
  const navigate = useNavigate(); // Initialize useNavigate here
  const { user } = useAuthStore(); // Access user from Zustand store

  const handleAppointmentsClick = (e) => {
    if (!user) {
      // Prevent default link behavior
      e.preventDefault();
      // Redirect to login with message
      alert("Please log in to book an appointment.");
      navigate("/login"); // Use navigate here to redirect
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="Stay Healthy Logo" style={{ width: "50px" }} />
          <span>Stay Healthy</span>
        </Link>

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/appointments" onClick={handleAppointmentsClick}>
                Appointments
              </Link>
            </li>
            <li>
              <Link to="/blog">Health Blog</Link>
            </li>
            <li>
              <Link to="/reviews">Reviews</Link>
            </li>
          </ul>
        </nav>

        {/* Use LoginBtn to handle Login/Logout */}
        <LoginBtn />
      </div>
    </header>
  );
};

export default Navbar;
