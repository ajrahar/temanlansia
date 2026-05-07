import styles from './LayananPage.module.css'
import { Link } from 'react-router-dom'

const services = [
  {
    id: 'medis',
    emoji: '🩺',
    color: '#ECE7E1',
    accent: '#3E6284',
    tag: 'UNGGULAN',
    title: 'Kunjungan Medis',
    subtitle: 'Perawatan kesehatan langsung di rumah',
    desc: 'Tenaga medis terlatih hadir ke rumah untuk memantau tekanan darah, gula darah, kondisi fisik, serta memberikan pertolongan pertama dan edukasi kesehatan rutin.',
    features: ['Pemantauan vital signs harian', 'Pemberian dan pengawasan obat', 'Konsultasi dengan dokter mitra', 'Laporan kondisi ke keluarga'],
    price: 'Mulai Rp 150.000 / kunjungan',
  },
  {
    id: 'jalan',
    emoji: '🚶',
    color: '#C6EDC4',
    accent: '#38593A',
    tag: null,
    title: 'Teman Jalan',
    subtitle: 'Aktivitas fisik dan sosial bersama pendamping',
    desc: 'Pendamping ramah menemani orang tua berolahraga pagi, berjalan santai di taman, atau sekadar berbincang agar tetap aktif secara fisik dan mental.',
    features: ['Jalan pagi & olahraga ringan', 'Kunjungan taman & tempat umum', 'Interaksi sosial & obrolan', 'Pemantauan keselamatan selama aktivitas'],
    price: 'Mulai Rp 100.000 / sesi',
  },
  {
    id: 'harian',
    emoji: '🛒',
    color: '#FEC38F',
    accent: '#643C14',
    tag: null,
    title: 'Bantuan Kegiatan Harian',
    subtitle: 'Urusan sehari-hari ditangani dengan amanah',
    desc: 'Dari belanja kebutuhan, antar jemput ke dokter, hingga membantu pekerjaan rumah ringan — semua ditangani oleh pendamping kami dengan penuh tanggung jawab.',
    features: ['Belanja kebutuhan harian', 'Antar jemput ke dokter / apotek', 'Membantu kebersihan ringan di rumah', 'Memasak makanan sesuai diet lansia'],
    price: 'Mulai Rp 120.000 / hari',
  },
  {
    id: 'monitoring',
    emoji: '📱',
    color: '#EEF4FA',
    accent: '#3E6284',
    tag: null,
    title: 'Monitoring 24/7',
    subtitle: 'Pantau kondisi orang tua dari mana saja',
    desc: 'Teknologi aplikasi Teman Lansia memungkinkan Anda menerima laporan aktivitas, foto, dan notifikasi kondisi orang tua secara real-time langsung di smartphone Anda.',
    features: ['Laporan harian lewat aplikasi', 'Notifikasi darurat real-time', 'Foto & video aktivitas', 'Riwayat kesehatan terdigital'],
    price: 'Mulai Rp 200.000 / bulan',
  },
]

export default function LayananPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.badge}>Layanan Kami</div>
          <h1 className={styles.heroTitle}>Solusi Lengkap untuk Merawat Orang Tua Anda</h1>
          <p className={styles.heroDesc}>Empat pilar layanan yang dirancang khusus agar Anda bisa bekerja dengan tenang, sementara orang tua mendapatkan perhatian terbaik.</p>
          <Link to="/caregiver" className={styles.heroLink} id="layanan-caregiver-cta">Bergabung sebagai Caregiver →</Link>
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
                  Pesan Sekarang
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA strip */}
      <section className={styles.ctaStrip}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Tidak yakin layanan mana yang tepat?</h2>
          <p className={styles.ctaDesc}>Konsultasikan kebutuhan orang tua Anda secara gratis bersama tim kami.</p>
          <a href="https://wa.me/6281234567890" id="layanan-whatsapp-cta" target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
            Konsultasi Gratis via WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}
