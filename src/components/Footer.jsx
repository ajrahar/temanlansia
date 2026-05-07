import styles from './Footer.module.css'

const footerLinks = [
  { label: 'Tentang Kami', href: '#' },
  { label: 'Cara Kerja', href: '#' },
  { label: 'Layanan', href: '#layanan' },
  { label: 'Blog', href: '#' },
  { label: 'Karir', href: '#' },
]

export default function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.container}>
        {/* Brand */}
        <div className={styles.brand}>
          <span className={styles.logo}>Teman Lansia</span>
          <p className={styles.tagline}>
            Pendamping profesional dan terpercaya untuk lansia Indonesia, hadir agar Anda bisa bekerja dengan tenang.
          </p>
        </div>

        {/* Nav links */}
        <nav className={styles.links} aria-label="Footer navigation">
          {footerLinks.map(l => (
            <a key={l.label} href={l.href} className={styles.link}>{l.label}</a>
          ))}
        </nav>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Teman Lansia. Hak cipta dilindungi undang-undang.</p>
      </div>
    </footer>
  )
}
