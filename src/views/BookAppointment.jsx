import React, { useState } from "react";
import styles from "./BookAppointment.module.css";
import doctorData from "../data/doctors"; // Import doctors data
import { toast } from "react-hot-toast"; // Import toast from react-hot-toast

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    specialty: "",
    doctor: "",
  });

  const specialties = doctorData.doctors
    ? [...new Set(doctorData.doctors.map((doctor) => doctor.specialty))]
    : [];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "specialty") {
      setFormData({ ...formData, specialty: value, doctor: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you can handle form submission (e.g., send data to backend, etc.)
    console.log("Appointment booked:", formData);

    // Show a success toast
    toast.success("Appointment booked successfully!"); // Success toast notification
  };

  const filteredDoctors = doctorData.doctors
    ? doctorData.doctors.filter(
        (doctor) => doctor.specialty === formData.specialty
      )
    : [];

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Book an Appointment</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Time:</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Specialty:</label>
          <select
            name="specialty"
            value={formData.specialty}
            onChange={handleChange}
            required
            className={styles.input}
          >
            <option value="" disabled>
              Select a specialty
            </option>
            {specialties.map((specialty) => (
              <option key={specialty} value={specialty}>
                {specialty}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Doctor:</label>
          <select
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
            required
            className={styles.input}
            disabled={!formData.specialty}
          >
            <option value="" disabled>
              Select a doctor
            </option>
            {filteredDoctors.map((doctor) => (
              <option key={doctor.id} value={doctor.id}>
                {doctor.firstName} {doctor.lastName}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className={styles.button}>
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default BookAppointment;
