// components/Footer.tsx
import Link from 'next/link';
import styles from '../css/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">My Portfolio</Link>
        </div>

        <div className={styles.links}>
          <Link href="/about" className={styles.link}>About</Link>
          <Link href="/contact" className={styles.link}>Contact</Link>
        </div>

        <div className={styles.socials}>
          <a href="https://vercel.com/ammars-projects-1e3ab620" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>Vercel</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>LinkedIn</a>
          <a href="https://github.com/MAmmarShaikh01/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>GitHub</a>
        </div>

        <p className={styles.copyright}>© 2024 My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
