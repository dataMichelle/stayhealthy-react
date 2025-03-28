import React from "react";
import LandingCard from "../components/LandingCard";
import styles from "./Home.module.css";
import instantConsultImg from "../assets/instant_consult.png";
import bookApptImg from "../assets/book_appt.png";
import selfCheckupImg from "../assets/self_checkup.png";
import healthTipsImg from "../assets/health_tips.png";

export default function Home() {
  const cards = [
    {
      title: "Instant Consultation",
      description: "Get immediate medical advice from our experts.",
      imageSrc: instantConsultImg,
      link: "/appointments/instant",
    },
    {
      title: "Book an Appointment",
      description: "Schedule an appointment with a healthcare provider.",
      imageSrc: bookApptImg,
      link: "/appointments/new",
    },
    {
      title: "Self Checkup",
      description: "Perform a self-checkup to monitor your health.",
      imageSrc: selfCheckupImg,
      link: "/self-checkup",
    },
    {
      title: "Health Tips and Guidance",
      description: "Receive tips and guidance to maintain a healthy lifestyle.",
      imageSrc: healthTipsImg,
      link: "/blog",
    },
  ];

  return (
    <main className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>Welcome to Stay Healthy</h1>
        <p>Your trusted source for medical consultations and health advice.</p>
      </section>

      {/* Landing Cards */}
      <div className={styles.cardContainer}>
        {cards.map((card) => (
          <LandingCard key={card.link} {...card} />
        ))}
      </div>
    </main>
  );
}
