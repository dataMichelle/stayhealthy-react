import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Appointments from "./views/Appointments";
import Blog from "./views/Blog";
import Reviews from "./views/Reviews";
import BookAppointment from "./views/BookAppointment";
import ErrorBoundary from "./components/ErrorBoundary"; // Import ErrorBoundary

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Navbar is available on every route */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/appointments/new"
          element={
            <ErrorBoundary>
              <BookAppointment />
            </ErrorBoundary>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
