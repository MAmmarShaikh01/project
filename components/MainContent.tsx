// components/MainContent.tsx
import styles from '../css/MainContent.module.css';

const MainContent: React.FC = () => {
  return (
    <main className={styles.mainContent}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>Welcome to My Portfolio</h1>
          <p>Crafting beautiful, responsive, and performant websites tailored to your needs.</p>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.about}>
        <h2>About Me</h2>
        <p>
          I am a passionate web developer with experience in creating functional and visually appealing
          websites. My goal is to bring your ideas to life in the digital world with clean, modern designs.
        </p>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <h2>What I Offer</h2>
        <div className={styles.featureCards}>
          {["Responsive Design", "Fast Performance", "SEO Friendly"].map((feature, index) => (
            <div
              key={index}
              className={`${styles.featureCard} ${styles.hidden}`}
              style={{ "--card-index": index } as React.CSSProperties}
            >
              <h3>{feature}</h3>
              <p>
                {feature === "Responsive Design"
                  ? "Beautiful designs that adapt perfectly to any screen size."
                  : feature === "Fast Performance"
                  ? "Optimized code to ensure fast loading and a smooth experience."
                  : "Ensuring your site is visible to search engines from day one."}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default MainContent;
