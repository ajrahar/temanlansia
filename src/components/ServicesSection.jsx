import styles from './ServicesSection.module.css'

export default function ServicesSection() {
  return (
    <section className={styles.section} id="layanan">
      {/* Section header */}
      <div className={styles.header}>
        <h2 className={styles.heading}>Layanan Kami</h2>
        <p className={styles.subheading}>
          Empat pilar layanan yang dirancang untuk memberikan ketenangan pikiran bagi Anda dan kebahagiaan untuk orang tua tercinta.
        </p>
      </div>

      {/* Bento grid */}
      <div className={styles.grid}>
        {/* Service 1: Medical Visits – tall left */}
        <div className={styles.cardMedical} id="service-medical">
          <div className={styles.tag}>UNGGULAN</div>
          <h3 className={styles.cardTitle}>Kunjungan Medis</h3>
          <p className={styles.cardDesc} style={{ color: '#615F5A', maxWidth: 300 }}>
            Perawat dan tenaga medis terlatih hadir ke rumah untuk memantau kesehatan rutin orang tua Anda.
          </p>
          <div className={styles.medicalDecor} aria-hidden="true">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" opacity="0.35">
              <circle cx="60" cy="60" r="55" stroke="#6B8FAF" strokeWidth="2"/>
              <path d="M60 30v60M30 60h60" stroke="#6B8FAF" strokeWidth="5" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        {/* Service 2: Companion Walks – tall right */}
        <div className={styles.cardWalk} id="service-walk">
          <h3 className={styles.cardTitle}>Teman Jalan</h3>
          <p className={styles.cardDesc} style={{ color: '#38593A', maxWidth: 300 }}>
            Pendamping ramah dan aktif menemani orang tua berolahraga ringan dan beraktivitas di luar rumah.
          </p>
          <div className={styles.walkDecor} aria-hidden="true">
            <svg width="52" height="86" viewBox="0 0 52 86" fill="none" opacity="0.25">
              <circle cx="26" cy="10" r="9" stroke="#38593A" strokeWidth="3"/>
              <path d="M26 19v30M12 36l14 13 14-13M18 49l-6 22M34 49l6 22" stroke="#38593A" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        {/* Service 3: Errands – bottom left small */}
        <div className={styles.cardErrands} id="service-errands">
          <svg width="44" height="38" viewBox="0 0 44 38" fill="none">
            <path d="M4 10h36M8 10V34a2 2 0 002 2h24a2 2 0 002-2V10M16 10V6a2 2 0 012-2h8a2 2 0 012 2v4" stroke="#643C14" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <h3 className={styles.errandsTitle}>Bantuan Kegiatan Harian</h3>
          <p className={styles.errandsDesc}>
            Belanja, antar ke dokter, dan urusan sehari-hari ditangani dengan penuh tanggung jawab.
          </p>
        </div>

        {/* Service 4: Monitoring – bottom right wide */}
        <div className={styles.cardMonitor} id="service-monitor">
          <div className={styles.monitorText}>
            <h3 className={styles.cardTitleDark}>Monitoring 24/7</h3>
            <p className={styles.cardDesc} style={{ color: '#615F5A' }}>
              Laporan aktivitas langsung ke smartphone Anda melalui aplikasi Teman Lansia.
            </p>
          </div>
          <div className={styles.monitorIcon}>
            <svg width="44" height="32" viewBox="0 0 44 32" fill="none">
              <rect x="2" y="2" width="40" height="24" rx="3" stroke="#3E6284" strokeWidth="2.5"/>
              <path d="M15 30h14M22 26v4" stroke="#3E6284" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M9 16l6-6 5 5 6-8 7 7" stroke="#3E6284" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
