import styles from './HeroSection.module.css'
import { useLanguage } from '../i18n/LanguageContext'

export default function HeroSection() {
  const { t } = useLanguage()
  const h = t.hero

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.container}>
        {/* Left: Copy */}
        <div className={styles.copy}>
          {/* Badge */}
          <div className={styles.badge} aria-label={h.badge}>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="6.5" cy="6.5" r="6.5" fill="#38593A"/>
            </svg>
            <span>{h.badge}</span>
          </div>

          {/* H1 */}
          <h1 className={`${styles.heading} fade-in`}>{h.heading}</h1>

          {/* Subheading */}
          <p className={`${styles.subheading} fade-in-delay-1`}>
            {h.subheading}
          </p>

          {/* Buttons */}
          <div className={`${styles.buttons} fade-in-delay-2`}>
            <a href="#cta" className={styles.btnPrimary} id="hero-cta-primary">
              {h.btnPrimary}
            </a>
            <a href="#layanan" className={styles.btnSecondary} id="hero-cta-secondary">
              {h.btnSecondary}
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className={styles.imageWrap}>
          {/* Decorative blurs */}
          <div className={styles.blobBlue} />
          <div className={styles.blobGreen} />

          {/* Main photo */}
          <div className={styles.photoCard}>
            <img
              src="/elderly_care_hero.png"
              alt={h.photoAlt}
              className={styles.photo}
            />
          </div>

          {/* Floating info card */}
          <div className={styles.floatingCard}>
            <div className={styles.floatingIcon}>
              <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
                <path d="M13.5 7L7.5 1L1.5 7M3 5.5V12.5C3 12.78 3.22 13 3.5 13H6V10H9V13H11.5C11.78 13 12 12.78 12 12.5V5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className={styles.floatingText}>
              <span className={styles.floatingTitle}>{h.floatingTitle}</span>
              <span className={styles.floatingDesc}>{h.floatingDesc}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
