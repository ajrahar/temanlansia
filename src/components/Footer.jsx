import styles from './Footer.module.css'
import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.8"/>
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
    </svg>
  )
}

export default function Footer() {
  const { t } = useLanguage()
  const f = t.footer

  const footerLinks = [
    { label: f.about, to: '#' },
    { label: f.services, to: '/layanan' },
    { label: f.caregiver, to: '/caregiver' },
    { label: f.resources, to: '/sumber-daya' },
    { label: f.career, to: '#' },
  ]

  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.container}>
        {/* Brand */}
        <div className={styles.brand}>
          <Link to="/" className={styles.logo}>Teman Lansia</Link>
          <p className={styles.tagline}>{f.tagline}</p>
          {/* Social links */}
          <div className={styles.socials}>
            <a
              href="https://www.instagram.com/temanlansia.id?igsh=ODEyZ2VqMGttb2hq"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              id="footer-instagram-link"
              aria-label={f.igLabel}
            >
              <InstagramIcon />
              <span>@temanlansia.id</span>
            </a>
          </div>
        </div>

        {/* Nav links */}
        <nav className={styles.links} aria-label="Footer navigation">
          {footerLinks.map(l => (
            l.to.startsWith('/')
              ? <Link key={l.label} to={l.to} className={styles.link}>{l.label}</Link>
              : <a key={l.label} href={l.to} className={styles.link}>{l.label}</a>
          ))}
        </nav>
      </div>

      <div className={styles.bottom}>
        <p>{f.copyright}</p>
      </div>
    </footer>
  )
}
