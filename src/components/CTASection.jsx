import styles from './CTASection.module.css'
import { useLanguage } from '../i18n/LanguageContext'

export default function CTASection() {
  const { t } = useLanguage()
  const c = t.cta

  return (
    <section className={styles.section} id="cta">
      {/* Decorative blobs */}
      <div className={styles.blobRight} aria-hidden="true" />
      <div className={styles.blobLeft} aria-hidden="true" />

      <div className={styles.content}>
        <h2 className={styles.heading}>{c.heading}</h2>
        <p className={styles.subtext}>{c.subtext}</p>

        <div className={styles.buttons}>
          <a href="https://wa.me/6281234567890" id="cta-whatsapp-btn" className={styles.btnWhite} target="_blank" rel="noopener noreferrer">
            {c.btnWhatsapp}
          </a>
          <a href="#layanan" id="cta-services-btn" className={styles.btnOutline}>
            {c.btnServices}
          </a>
        </div>

        <div className={styles.note}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <circle cx="6" cy="6" r="6" fill="#F7F9FF"/>
          </svg>
          <span>{c.note}</span>
        </div>
      </div>
    </section>
  )
}
