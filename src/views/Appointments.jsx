import { Link } from "react-router-dom";
import LandingCard from "../components/LandingCard";
import styles from "./Appointments.module.css";
import instantConsultImg from "../assets/instant_consult.png";
import bookApptImg from "../assets/book_appt.png";

export default function Appointments() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Appointments</h1>
      <div className={styles.cardContainer}>
        <Link to="/appointments/instant" className={styles.cardLink}>
          <LandingCard
            title="Instant Consultation"
            description="Get immediate medical advice from our experts."
            imageSrc={instantConsultImg}
          />
        </Link>
        <Link to="/appointments/new" className={styles.cardLink}>
          <LandingCard
            title="Book an Appointment"
            description="Schedule an appointment with a healthcare provider."
            imageSrc={bookApptImg}
          />
        </Link>
      </div>
    </main>
  );
}
