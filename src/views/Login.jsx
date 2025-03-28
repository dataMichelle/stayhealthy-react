import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider, signInWithPopup } from "../lib/firebase"; // Firebase imports
import { signInWithEmailAndPassword } from "firebase/auth";
import { FaGoogle } from "react-icons/fa"; // Google logo icon from react-icons
import styles from "./Login.module.css"; // Corrected import for same-folder CSS module

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Handle Email/Password login
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/"); // Redirect to home page after successful login
    } catch (error) {
      console.error(error.message);
      alert("Error logging in with email/password: " + error.message);
    }
  };

  // Handle Google Login
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider); // Google sign-in
      navigate("/"); // Redirect to home page after successful login
    } catch (error) {
      console.error(error.message);
      alert("Error logging in with Google: " + error.message);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.loginTitle}>Login</h2>
      <form onSubmit={handleEmailLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.inputField}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.inputField}
          required
        />
        <button type="submit" className={styles.submitButton}>
          Log In
        </button>
      </form>

      <div className={styles.orText}>OR</div>

      {/* Google Sign In Button with Google Icon */}
      <button className={styles.googleLoginBtn} onClick={handleGoogleLogin}>
        <FaGoogle className={styles.googleIcon} />
        Log in with Google
      </button>
    </div>
  );
};

export default Login;
