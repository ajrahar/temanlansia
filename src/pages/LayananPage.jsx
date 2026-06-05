import styles from './LayananPage.module.css'
import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'

const serviceColors = [
  { color: '#ECE7E1', accent: '#3E6284', emoji: '🩺' },
  { color: '#C6EDC4', accent: '#38593A', emoji: '🚶' },
  { color: '#FEC38F', accent: '#643C14', emoji: '🛒' },
  { color: '#EEF4FA', accent: '#3E6284', emoji: '📱' },
]

export default function LayananPage() {
  const { t } = useLanguage()
  const l = t.layananPage

  const services = l.services.map((s, i) => ({
    ...s,
    ...serviceColors[i],
  }))

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.badge}>{l.badge}</div>
          <h1 className={styles.heroTitle}>{l.heroTitle}</h1>
          <p className={styles.heroDesc}>{l.heroDesc}</p>
          <Link to="/caregiver" className={styles.heroLink} id="layanan-caregiver-cta">{l.caregiverLink}</Link>
        </div>
      </section>

      {/* Services list */}
      <section className={styles.list}>
        {services.map((s, i) => (
          <div key={s.id} className={`${styles.card} ${i % 2 === 1 ? styles.reversed : ''}`} id={`service-${s.id}`}>
            {/* Visual */}
            <div className={styles.visual} style={{ background: s.color }}>
              <span className={styles.emoji}>{s.emoji}</span>
              {s.tag && <span className={styles.tag}>{s.tag}</span>}
            </div>
            {/* Content */}
            <div className={styles.content}>
              <p className={styles.subtitle} style={{ color: s.accent }}>{s.subtitle}</p>
              <h2 className={styles.title}>{s.title}</h2>
              <p className={styles.desc}>{s.desc}</p>
              <ul className={styles.features}>
                {s.features.map(f => (
                  <li key={f} className={styles.feature}>
                    <span className={styles.check} style={{ color: s.accent }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className={styles.footer}>
                <span className={styles.price}>{s.price}</span>
                <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer"
                  className={styles.btn} id={`service-${s.id}-cta`}>
                  {l.orderNow}
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA strip */}
      <section className={styles.ctaStrip}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>{l.ctaTitle}</h2>
          <p className={styles.ctaDesc}>{l.ctaDesc}</p>
          <a href="https://wa.me/6281234567890" id="layanan-whatsapp-cta" target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
            {l.ctaBtn}
          </a>
        </div>
      </section>
    </>
  )
}
