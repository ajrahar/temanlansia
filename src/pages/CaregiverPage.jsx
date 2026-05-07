import styles from './CaregiverPage.module.css'

const benefits = [
  { emoji: '💰', title: 'Penghasilan Kompetitif', desc: 'Gaji di atas rata-rata industri dengan bonus performa dan tunjangan kesehatan.' },
  { emoji: '📚', title: 'Pelatihan & Sertifikasi', desc: 'Program pelatihan terstruktur gratis untuk meningkatkan keahlian Anda merawat lansia.' },
  { emoji: '🕐', title: 'Jadwal Fleksibel', desc: 'Pilih jam kerja yang sesuai dengan kebutuhan dan gaya hidup Anda.' },
  { emoji: '🤝', title: 'Komunitas Supportif', desc: 'Bergabung dengan ratusan caregiver yang saling mendukung dan berbagi pengalaman.' },
  { emoji: '📱', title: 'Dukungan Aplikasi', desc: 'Kelola jadwal, laporan, dan komunikasi dengan keluarga klien lewat aplikasi kami.' },
  { emoji: '⭐', title: 'Karir Jangka Panjang', desc: 'Jalur karir yang jelas dari Junior Caregiver hingga Senior Care Specialist.' },
]

const steps = [
  { num: '01', title: 'Daftar Online', desc: 'Isi formulir pendaftaran dan unggah dokumen yang diperlukan dalam 10 menit.' },
  { num: '02', title: 'Seleksi & Verifikasi', desc: 'Tim kami memverifikasi latar belakang dan pengalaman Anda secara menyeluruh.' },
  { num: '03', title: 'Pelatihan Intensif', desc: 'Ikuti program pelatihan 3 hari untuk memastikan Anda siap memberikan pelayanan terbaik.' },
  { num: '04', title: 'Mulai Bertugas', desc: 'Dapatkan penugasan pertama Anda dan mulai memberikan dampak nyata bagi lansia Indonesia.' },
]

const requirements = [
  'Usia 20–50 tahun, sehat jasmani & rohani',
  'Minimal pendidikan SMA / SMK (diutamakan bidang kesehatan)',
  'Sabar, empati tinggi, dan komunikatif',
  'Memiliki smartphone Android / iOS',
  'Berdomisili di Jabodetabek (untuk tahap awal)',
  'Bersedia menjalani pelatihan wajib 3 hari',
]

export default function CaregiverPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.badge}>Untuk Caregiver</div>
          <h1 className={styles.heroTitle}>Jadilah Bagian dari Misi Mulia Kami</h1>
          <p className={styles.heroDesc}>
            Bergabunglah sebagai Caregiver Teman Lansia dan dapatkan pekerjaan bermakna yang berdampak langsung pada kehidupan lansia Indonesia.
          </p>
          <div className={styles.heroStats}>
            <div className={styles.stat}><span className={styles.statNum}>500+</span><span className={styles.statLabel}>Caregiver Aktif</span></div>
            <div className={styles.divider} />
            <div className={styles.stat}><span className={styles.statNum}>4.9★</span><span className={styles.statLabel}>Rating Rata-rata</span></div>
            <div className={styles.divider} />
            <div className={styles.stat}><span className={styles.statNum}>1.200+</span><span className={styles.statLabel}>Klien Puas</span></div>
          </div>
          <a href="#daftar" className={styles.heroCta} id="caregiver-hero-cta">Daftar Jadi Caregiver</a>
        </div>
      </section>

      {/* Benefits */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>Keuntungan Menjadi Caregiver Kami</h2>
          <p className={styles.sectionDesc}>Kami percaya caregiver yang bahagia akan memberikan perawatan terbaik.</p>
          <div className={styles.benefitsGrid}>
            {benefits.map(b => (
              <div key={b.title} className={styles.benefitCard}>
                <span className={styles.benefitEmoji}>{b.emoji}</span>
                <h3 className={styles.benefitTitle}>{b.title}</h3>
                <p className={styles.benefitDesc}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className={styles.reqSection}>
        <div className={styles.reqInner}>
          <div className={styles.reqLeft}>
            <h2 className={styles.sectionTitle}>Persyaratan Pendaftaran</h2>
            <p className={styles.sectionDesc}>Kami menerima caregiver dari berbagai latar belakang yang memiliki passion merawat lansia.</p>
            <ul className={styles.reqList}>
              {requirements.map(r => (
                <li key={r} className={styles.reqItem}>
                  <span className={styles.reqCheck}>✓</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.reqRight}>
            <h2 className={styles.sectionTitle}>Cara Bergabung</h2>
            <div className={styles.steps}>
              {steps.map(s => (
                <div key={s.num} className={styles.step}>
                  <div className={styles.stepNum}>{s.num}</div>
                  <div>
                    <h3 className={styles.stepTitle}>{s.title}</h3>
                    <p className={styles.stepDesc}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form CTA */}
      <section className={styles.formSection} id="daftar">
        <div className={styles.formInner}>
          <h2 className={styles.formTitle}>Siap Bergabung?</h2>
          <p className={styles.formDesc}>Isi formulir minat dan tim kami akan menghubungi Anda dalam 1×24 jam.</p>
          <form className={styles.form} onSubmit={e => { e.preventDefault(); alert('Terima kasih! Tim kami akan segera menghubungi Anda.') }}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Nama Lengkap</label>
                <input id="caregiver-name" className={styles.input} type="text" placeholder="Budi Santoso" required />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Nomor WhatsApp</label>
                <input id="caregiver-phone" className={styles.input} type="tel" placeholder="08xxxxxxxxxx" required />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Domisili</label>
              <input id="caregiver-city" className={styles.input} type="text" placeholder="Jakarta Selatan" required />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Pengalaman merawat lansia</label>
              <select id="caregiver-exp" className={styles.input} defaultValue="">
                <option value="" disabled>Pilih pengalaman...</option>
                <option>Belum ada (siap belajar)</option>
                <option>1–2 tahun</option>
                <option>3–5 tahun</option>
                <option>Lebih dari 5 tahun</option>
              </select>
            </div>
            <button type="submit" id="caregiver-submit-btn" className={styles.submitBtn}>Kirim Pendaftaran</button>
          </form>
        </div>
      </section>
    </>
  )
}
