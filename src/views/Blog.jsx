import styles from "./Blog.module.css";

export default function BlogPage() {
  const healthTips = [
    {
      id: 1,
      title: "Stay Hydrated",
      content:
        "Drinking enough water is crucial for maintaining good health. Aim for 8 glasses of water a day, and more if you are active or in a hot climate.",
    },
    {
      id: 2,
      title: "Exercise Regularly",
      content:
        "Regular physical activity can improve your muscle strength and boost your endurance. Exercise releases endorphins that help reduce stress and promote happiness.",
    },
    {
      id: 3,
      title: "Eat a Balanced Diet",
      content:
        "Incorporating fruits, vegetables, lean proteins, and whole grains into your diet can provide essential nutrients and help maintain a healthy weight.",
    },
  ];

  const healthNews = [
    {
      id: 1,
      title: "COVID-19 Booster Shots Now Available",
      date: "September 1, 2024",
      content:
        "The latest COVID-19 booster shots are now available for everyone above the age of 12. Health experts recommend getting the shot to stay protected.",
    },
    {
      id: 2,
      title: "New Research on the Benefits of Meditation",
      date: "August 20, 2024",
      content:
        "A new study shows that regular meditation can significantly reduce anxiety and improve overall mental well-being. Experts recommend 10-20 minutes daily.",
    },
    {
      id: 3,
      title: "Flu Season is Here: How to Stay Safe",
      date: "August 10, 2024",
      content:
        "Flu season is approaching, and it's important to get your flu shot. Washing your hands regularly and avoiding contact with sick individuals can also help.",
    },
  ];

  return (
    <main className={styles.blogContainer}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Health Blog</h1>
        <p className={styles.heroSubtitle}>
          Stay updated with the latest health trends and expert tips.
        </p>
      </section>

      {/* Health Tips Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Health Tips</h2>
        <div className={styles.cardGrid}>
          {healthTips.map((tip) => (
            <div key={tip.id} className={styles.card}>
              <h3 className={styles.cardTitle}>{tip.title}</h3>
              <p className={styles.cardContent}>{tip.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Health News Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Latest Health News</h2>
        <div className={styles.cardGrid}>
          {healthNews.map((news) => (
            <div key={news.id} className={styles.card}>
              <h3 className={styles.cardTitle}>{news.title}</h3>
              <p className={styles.cardDate}>{news.date}</p>
              <p className={styles.cardContent}>{news.content}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
