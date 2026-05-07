import styles from './TopNavBar.module.css'
import { useState, useEffect } from 'react'

const links = ['Beranda', 'Layanan', 'Untuk Caregiver', 'Sumber Daya']

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
        <div className={styles.logo}>Teman Lansia</div>

        <ul className={styles.links}>
          {links.map((l, i) => (
            <li key={l}>
              <a href="#" className={i === 0 ? styles.active : styles.link}>{l}</a>
            </li>
          ))}
        </ul>

        <a href="#cta" className={styles.cta} id="nav-cta-btn">Mulai Sekarang</a>
      </div>
    </nav>
  )
}
