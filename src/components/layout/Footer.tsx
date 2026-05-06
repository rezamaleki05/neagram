import Link from "next/link";
import { PhoneIcon, EnvelopeIcon, CameraIcon, VideoCameraIcon } from "@heroicons/react/24/outline";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerInner}`}>
        <div className={styles.topSection}>
          <div className={styles.brand}>
            <h2 className={styles.logo}>NEAGRAM</h2>
            <p className={styles.tagline}>Add Personality To Your Business.</p>
          </div>
          
          <div className={styles.linksGrid}>
            <div className={styles.linksColumn}>
              <h4 className={styles.columnTitle}>Navigation</h4>
              <Link href="/services">Services</Link>
              <Link href="/work">Case Studies</Link>
              <Link href="/insights">Insights</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <div className={styles.linksColumn}>
              <h4 className={styles.columnTitle}>Get in touch</h4>
              <a href="https://wa.me/971501234567" target="_blank" rel="noopener noreferrer">
                <PhoneIcon className={styles.icon} />
                WhatsApp
              </a>
              <a href="mailto:hello@neagram.com">
                <EnvelopeIcon className={styles.icon} />
                Email
              </a>
              <a href="https://instagram.com/neagram" target="_blank" rel="noopener noreferrer">
                <CameraIcon className={styles.icon} />
                Instagram
              </a>
              <a href="https://youtube.com/@neagram" target="_blank" rel="noopener noreferrer">
                <VideoCameraIcon className={styles.icon} />
                YouTube
              </a>
            </div>
            <div className={styles.linksColumn}>
              <h4 className={styles.columnTitle}>Location</h4>
              <p>Dubai, UAE</p>
            </div>
          </div>
        </div>
        
        <div className={styles.bottomSection}>
          <p className={styles.copyright}>&copy; {new Date().getFullYear()} Neagram Studio. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
