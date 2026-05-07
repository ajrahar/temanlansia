import styles from './CTASection.module.css'

export default function CTASection() {
  return (
    <section className={styles.section} id="cta">
      {/* Decorative blobs */}
      <div className={styles.blobRight} aria-hidden="true" />
      <div className={styles.blobLeft} aria-hidden="true" />

      <div className={styles.content}>
        <h2 className={styles.heading}>
          Mulai Perjalanan Merawat dengan Tenang Hari Ini
        </h2>
        <p className={styles.subtext}>
          Bergabunglah dengan ribuan keluarga yang sudah mempercayakan perawatan orang tua mereka kepada Teman Lansia.
        </p>

        <div className={styles.buttons}>
          <a href="https://wa.me/6281234567890" id="cta-whatsapp-btn" className={styles.btnWhite} target="_blank" rel="noopener noreferrer">
            Konsultasi Gratis via WhatsApp
          </a>
          <a href="#layanan" id="cta-services-btn" className={styles.btnOutline}>
            Pelajari Semua Layanan
          </a>
        </div>

        <div className={styles.note}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <circle cx="6" cy="6" r="6" fill="#F7F9FF"/>
          </svg>
          <span>Tanpa komitmen jangka panjang · Bisa dibatalkan kapan saja</span>
        </div>
      </div>
    </section>
  )
}
