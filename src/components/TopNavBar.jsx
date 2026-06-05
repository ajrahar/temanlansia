import styles from './TopNavBar.module.css'
import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'

function HamburgerIcon({ open }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {open ? (
        <>
          <line x1="4" y1="4" x2="20" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="20" y1="4" x2="4" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </>
      ) : (
        <>
          <line x1="3" y1="7" x2="21" y2="7"  stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="3" y1="17" x2="21" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </>
      )}
    </svg>
  )
}

export default function TopNavBar() {
  const { t, lang, toggleLang } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { label: t.nav.home, to: '/' },
    { label: t.nav.services, to: '/layanan' },
    { label: t.nav.caregiver, to: '/caregiver' },
    { label: t.nav.resources, to: '/sumber-daya' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu when route changes or Escape pressed
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`} id="navbar">
        <div className={styles.container}>
          <Link to="/" className={styles.logo} onClick={closeMenu}>Teman Lansia</Link>

          {/* Desktop links */}
          <ul className={styles.links}>
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) => isActive ? styles.active : styles.link}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop right group */}
          <div className={styles.rightGroup}>
            {/* Language toggle */}
            <button
              className={styles.langToggle}
              onClick={toggleLang}
              aria-label={`Switch to ${lang === 'id' ? 'English' : 'Bahasa Indonesia'}`}
              id="lang-toggle-btn"
            >
              <span className={lang === 'id' ? styles.langActive : styles.langInactive}>ID</span>
              <span className={styles.langDivider}>|</span>
              <span className={lang === 'en' ? styles.langActive : styles.langInactive}>EN</span>
            </button>

            <Link to="/layanan" className={styles.cta} id="nav-cta-btn">{t.nav.cta}</Link>
          </div>

          {/* Hamburger button (mobile only) */}
          <button
            className={styles.burger}
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={menuOpen}
            id="nav-burger-btn"
          >
            <HamburgerIcon open={menuOpen} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer backdrop */}
      {menuOpen && (
        <div className={styles.backdrop} onClick={closeMenu} aria-hidden="true" />
      )}

      {/* Mobile drawer */}
      <div className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`} id="mobile-menu">
        <div className={styles.drawerHeader}>
          <span className={styles.drawerLogo}>Teman Lansia</span>
          <div className={styles.drawerHeaderRight}>
            {/* Language toggle in drawer */}
            <button
              className={styles.langToggleMobile}
              onClick={toggleLang}
              aria-label={`Switch to ${lang === 'id' ? 'English' : 'Bahasa Indonesia'}`}
            >
              <span className={lang === 'id' ? styles.langActive : styles.langInactive}>ID</span>
              <span className={styles.langDivider}>|</span>
              <span className={lang === 'en' ? styles.langActive : styles.langInactive}>EN</span>
            </button>
            <button className={styles.drawerClose} onClick={closeMenu} aria-label={t.nav.closeMenu}>
              <HamburgerIcon open={true} />
            </button>
          </div>
        </div>

        <nav className={styles.drawerLinks}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `${styles.drawerLink} ${isActive ? styles.drawerLinkActive : ''}`
              }
              onClick={closeMenu}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.drawerFooter}>
          <Link
            to="/layanan"
            className={styles.drawerCta}
            id="mobile-cta-btn"
            onClick={closeMenu}
          >
            {t.nav.cta}
          </Link>
          <a
            href="https://www.instagram.com/temanlansia.id?igsh=ODEyZ2VqMGttb2hq"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.drawerIg}
            id="mobile-instagram-link"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.8"/>
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
            </svg>
            @temanlansia.id
          </a>
        </div>
      </div>
    </>
  )
}
