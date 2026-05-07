import styles from './WhyUsSection.module.css'

const features = [
  {
    id: 'verified',
    color: '#3E6284',
    shadow: 'rgba(62,98,132,0.2)',
    title: 'Caregiver Terverifikasi',
    desc: 'Seluruh tenaga pendamping kami telah melewati seleksi ketat, pelatihan bersertifikat, dan pemeriksaan latar belakang.',
    icon: (
      <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
        <path d="M8 1L1 4.5V10c0 5 4 8 7 9 3-1 7-4 7-9V4.5L8 1z" stroke="#F7F9FF" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M5 10l2 2 4-4" stroke="#F7F9FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 'eco',
    color: '#466747',
    shadow: 'rgba(70,103,71,0.2)',
    title: 'Pendekatan Berbasis Kasih',
    desc: 'Kami percaya bahwa merawat lansia bukan sekadar pekerjaan — ini tentang hubungan yang hangat dan tulus dari hati ke hati.',
    icon: (
      <svg width="22" height="15" viewBox="0 0 22 15" fill="none">
        <path d="M11 13.5C6 8.5 1 7 1 3.5A3.5 3.5 0 017.5 1C9 1 10.5 2 11 3c.5-1 2-2 3.5-2A3.5 3.5 0 0121 3.5c0 3.5-5 5-10 10z" fill="#E9FFE5" stroke="#E9FFE5" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 'realtime',
    color: '#81552B',
    shadow: 'rgba(129,85,43,0.2)',
    title: 'Laporan Real-Time',
    desc: 'Dapatkan update kegiatan dan kondisi orang tua langsung di genggaman Anda melalui aplikasi Teman Lansia.',
    icon: (
      <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
        <path d="M8 1v10M4 6l4-5 4 5M2 14h12M4 17h8M6 20h4" stroke="#FFF7F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function WhyUsSection() {
  return (
    <section className={styles.section} id="keunggulan">
      <div className={styles.container}>
        {/* Left: features */}
        <div className={styles.left}>
          <div className={styles.featureList}>
            {features.map(f => (
              <div key={f.id} className={styles.featureRow} id={`feature-${f.id}`}>
                <div
                  className={styles.iconBox}
                  style={{ background: f.color, boxShadow: `0 10px 15px -3px ${f.shadow}, 0 4px 6px -4px ${f.shadow}` }}
                >
                  {f.icon}
                </div>
                <div className={styles.featureText}>
                  <h3 className={styles.featureTitle}>{f.title}</h3>
                  <p className={styles.featureDesc}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: heading + image */}
        <div className={styles.right}>
          <h2 className={styles.heading}>Ketenangan yang Tak Ternilai</h2>
          <p className={styles.bodyText}>
            Kami tidak hanya menyediakan jasa, kami memberikan "Peace of Mind". Anda bisa fokus bekerja dengan tenang, sementara kami menjaga orang tua Anda dengan penuh kasih sayang dan profesionalisme.
          </p>

          <div className={styles.imageCard}>
            <img
              src="/peace_of_mind.png"
              alt="Anak yang bekerja dengan tenang sambil melihat orang tua bahagia via video call"
              className={styles.image}
            />
            <div className={styles.imageOverlay}>
              <div className={styles.playBtn} aria-label="Tonton video">
                <svg width="17" height="21" viewBox="0 0 17 21" fill="none">
                  <path d="M2 1.5l13 9-13 9V1.5z" fill="#3E6284" stroke="#3E6284" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
