import styles from './TopNavBar.module.css'
import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

const links = [
  { label: 'Beranda', to: '/' },
  { label: 'Layanan', to: '/layanan' },
  { label: 'Untuk Caregiver', to: '/caregiver' },
  { label: 'Sumber Daya', to: '/sumber-daya' },
]

export default function TopNavBar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`} id="navbar">
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>Teman Lansia</Link>

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

        <Link to="/layanan#cta" className={styles.cta} id="nav-cta-btn">Mulai Sekarang</Link>
      </div>
    </nav>
  )
}
