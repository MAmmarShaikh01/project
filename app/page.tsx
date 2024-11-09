import Header from "../components/Header";
import Footer from "../components/footer";
// import styles from '../css/MainContent.module.css';

export default function Home() {
  return (
    <>
    {/* 
.mainContent {
  padding: 2rem;
}

.hero {
  background: linear-gradient(135deg, #ff7e5f, #feb47b);
  color: white;
  text-align: center;
  padding: 4rem 1rem;
  animation: fadeIn 1s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.heroTitle {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  animation: slideDown 1s ease-out;
}

.heroSubtitle {
  font-size: 1.25rem;
  margin-top: 1rem;
  animation: fadeIn 1.5s ease-out;
}

@keyframes slideDown {
  from { 
      transform: translateY(-20px); 
      opacity: 0; 
  }
  to { 
      transform: translateY(0);
       opacity: 1;
      }
}

.ctaButton {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  margin-top: 2rem;
  background-color: #ff7e5f;
  color: white;
  text-decoration: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.ctaButton:hover {
  background-color: #feb47b;
  transform: scale(1.05);
}

.features {
  margin-top: 4rem;
  text-align: center;
}

.featuresTitle {
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

.featureCards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
}

.featureCard {
  background-color: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 300px;
  text-align: center;
  transition: transform 0.3s ease;
  animation: fadeInUp 1s ease-out;
}

.featureCard:hover {
  transform: translateY(-10px);
}

@keyframes fadeInUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.ctaSection {
  background-color: #333;
  color: white;
  padding: 3rem 1rem;
  text-align: center;
  margin-top: 4rem;
  border-radius: 0.5rem;
}

.ctaSection h2 {
  font-size: 2rem;
}

.ctaSection p {
  margin-top: 1rem;
  font-size: 1.125rem;
}

@media (min-width: 768px) {
  .heroTitle {
    font-size: 4rem;
  }

  .featuresTitle {
    font-size: 3rem;
  }

  .ctaSection {
    font-size: 1.25rem;
  }
}

    */}
    <Header />

    {/* <main className={styles.mainContent}>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Welcome to My Portfolio</h1>
        <p className={styles.heroSubtitle}>Crafting digital experiences that inspire and engage</p>
        <a href="#features" className={styles.ctaButton}>Discover More</a>
      </section> */}

      {/* Features Section */}
      {/* <section id="features" className={styles.features}>
        <h2 className={styles.featuresTitle}>What I Offer</h2>
        <div className={styles.featureCards}>
          <div className={styles.featureCard}>
            <h3>Responsive Design</h3>
            <p>Beautiful designs that adapt perfectly to any screen size.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Fast Performance</h3>
            <p>Optimized code to ensure fast loading and a smooth experience.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>SEO Friendly</h3>
            <p>Ensuring your site is visible to search engines from day one.</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      {/* <section className={styles.ctaSection}>
        <h2>Let's work together</h2>
        <p>Have a project in mind? Let's make it a reality.</p>
        <a href="/contact" className={styles.ctaButton}>Contact Me</a>
      </section>
    </main> */}
    
    <Footer />
    </>
  );
}
