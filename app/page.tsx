import Header from "../components/Header";
import Footer from "../components/footer";
import styles from '../css/MainContent.module.css';

export default function Home() {
  return (
    <>
    <Header />

    <main className={styles.mainContent}>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Welcome to My Portfolio</h1>
        <p className={styles.heroSubtitle}>Crafting digital experiences that inspire and engage</p>
        <a href="#features" className={styles.ctaButton}>Discover More</a>
      </section>

      {/* Features Section */}
      <section id="features" className={styles.features}>
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
      <section className={styles.ctaSection}>
        <h2>Let's work together</h2>
        <p>Have a project in mind? Let's make it a reality.</p>
        <a href="/contact" className={styles.ctaButton}>Contact Me</a>
      </section>
    </main>
    
    <Footer />
    </>
  );
}
