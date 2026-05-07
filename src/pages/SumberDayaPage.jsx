import styles from './SumberDayaPage.module.css'

const articles = [
  {
    id: 'art1',
    category: 'Kesehatan',
    catColor: '#3E6284',
    catBg: 'rgba(62,98,132,0.1)',
    emoji: '❤️',
    title: '10 Tanda Orang Tua Membutuhkan Bantuan Lebih Intensif',
    desc: 'Kenali tanda-tanda awal ketika orang tua Anda mulai membutuhkan pendampingan profesional sebelum kondisi memburuk.',
    readTime: '5 menit baca',
    date: '2 Mei 2025',
  },
  {
    id: 'art2',
    category: 'Nutrisi',
    catColor: '#466747',
    catBg: 'rgba(70,103,71,0.1)',
    emoji: '🥗',
    title: 'Panduan Nutrisi Optimal untuk Lansia di Atas 70 Tahun',
    desc: 'Menu makan bergizi yang mudah disiapkan dan sesuai kebutuhan kalori serta vitamin lansia di usia senja.',
    readTime: '7 menit baca',
    date: '28 Apr 2025',
  },
  {
    id: 'art3',
    category: 'Mental Health',
    catColor: '#81552B',
    catBg: 'rgba(129,85,43,0.1)',
    emoji: '🧠',
    title: 'Cara Mencegah Kesepian pada Lansia yang Tinggal Sendiri',
    desc: 'Strategi praktis untuk menjaga kesehatan mental dan sosial orang tua agar tetap bahagia dan aktif.',
    readTime: '6 menit baca',
    date: '22 Apr 2025',
  },
  {
    id: 'art4',
    category: 'Keamanan',
    catColor: '#A83836',
    catBg: 'rgba(168,56,54,0.1)',
    emoji: '🏠',
    title: 'Modifikasi Rumah Aman untuk Lansia: Checklist Lengkap',
    desc: 'Panduan step-by-step menyiapkan rumah agar aman dari risiko jatuh, kebakaran, dan kecelakaan lainnya.',
    readTime: '8 menit baca',
    date: '15 Apr 2025',
  },
  {
    id: 'art5',
    category: 'Keuangan',
    catColor: '#3E6284',
    catBg: 'rgba(62,98,132,0.1)',
    emoji: '💳',
    title: 'Merencanakan Dana Perawatan Jangka Panjang untuk Orang Tua',
    desc: 'Tips perencanaan keuangan keluarga agar biaya perawatan orang tua tidak membebani kondisi finansial Anda.',
    readTime: '10 menit baca',
    date: '10 Apr 2025',
  },
  {
    id: 'art6',
    category: 'Tips Caregiver',
    catColor: '#466747',
    catBg: 'rgba(70,103,71,0.1)',
    emoji: '💪',
    title: 'Menghindari Burnout: Panduan untuk Anak yang Merawat Orang Tua',
    desc: 'Cara menjaga keseimbangan antara tanggung jawab merawat orang tua dan kebutuhan diri sendiri sebagai sandwich generation.',
    readTime: '9 menit baca',
    date: '5 Apr 2025',
  },
]

const faqs = [
  {
    q: 'Bagaimana cara mulai menggunakan layanan Teman Lansia?',
    a: 'Cukup hubungi kami via WhatsApp atau isi formulir konsultasi gratis. Tim kami akan menghubungi dan melakukan asesmen kebutuhan orang tua Anda dalam 1×24 jam.',
  },
  {
    q: 'Apakah caregiver sudah diverifikasi keamanannya?',
    a: 'Ya. Seluruh caregiver telah melewati pemeriksaan latar belakang, pelatihan bersertifikat, dan wawancara psikologi sebelum mulai bertugas.',
  },
  {
    q: 'Berapa lama kontrak minimum layanan?',
    a: 'Tidak ada kontrak minimum. Anda bisa menggunakan layanan per sesi, per hari, atau berlangganan bulanan sesuai kebutuhan.',
  },
  {
    q: 'Bagaimana jika caregiver yang bertugas tidak cocok dengan orang tua saya?',
    a: 'Kami memiliki kebijakan penggantian caregiver gratis. Kepuasan Anda dan kenyamanan orang tua adalah prioritas utama kami.',
  },
  {
    q: 'Apakah layanan tersedia di seluruh Indonesia?',
    a: 'Saat ini kami beroperasi di Jabodetabek, Bandung, dan Surabaya. Ekspansi ke kota-kota lain sedang dalam persiapan.',
  },
]

import { useState } from 'react'

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={styles.faqItem}>
      <button className={styles.faqQ} onClick={() => setOpen(o => !o)} aria-expanded={open}>
        <span>{q}</span>
        <span className={`${styles.faqIcon} ${open ? styles.faqOpen : ''}`}>+</span>
      </button>
      {open && <p className={styles.faqA}>{a}</p>}
    </div>
  )
}

export default function SumberDayaPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.badge}>Sumber Daya</div>
          <h1 className={styles.heroTitle}>Panduan Merawat Orang Tua dengan Penuh Kasih</h1>
          <p className={styles.heroDesc}>Artikel, tips, dan panduan praktis dari para ahli untuk membantu Anda membuat keputusan terbaik bagi orang tua tercinta.</p>
        </div>
      </section>

      {/* Articles */}
      <section className={styles.articlesSection}>
        <div className={styles.articlesInner}>
          <h2 className={styles.sectionTitle}>Artikel Terbaru</h2>
          <div className={styles.articlesGrid}>
            {articles.map(a => (
              <article key={a.id} className={styles.articleCard} id={`article-${a.id}`}>
                <div className={styles.articleEmoji}>{a.emoji}</div>
                <div className={styles.articleBody}>
                  <div className={styles.articleMeta}>
                    <span className={styles.articleCat} style={{ color: a.catColor, background: a.catBg }}>{a.category}</span>
                    <span className={styles.articleDate}>{a.date}</span>
                  </div>
                  <h3 className={styles.articleTitle}>{a.title}</h3>
                  <p className={styles.articleDesc}>{a.desc}</p>
                  <div className={styles.articleFooter}>
                    <span className={styles.readTime}>⏱ {a.readTime}</span>
                    <button className={styles.readMore} id={`article-${a.id}-read`}>Baca selengkapnya →</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSection}>
        <div className={styles.faqInner}>
          <div className={styles.faqLeft}>
            <h2 className={styles.sectionTitle}>Pertanyaan yang Sering Ditanyakan</h2>
            <p className={styles.sectionDesc}>Tidak menemukan jawaban yang Anda cari? Hubungi kami langsung.</p>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer"
              className={styles.faqCta} id="sumberdaya-whatsapp-cta">
              Tanya via WhatsApp
            </a>
          </div>
          <div className={styles.faqRight}>
            {faqs.map(f => <FAQItem key={f.q} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className={styles.newsletter}>
        <div className={styles.newsletterInner}>
          <h2 className={styles.newsletterTitle}>Dapatkan Tips Perawatan Lansia Setiap Minggu</h2>
          <p className={styles.newsletterDesc}>Artikel terbaik langsung ke email Anda. Gratis selamanya.</p>
          <form className={styles.nlForm} onSubmit={e => { e.preventDefault(); alert('Terima kasih! Anda telah berlangganan.') }}>
            <input id="newsletter-email" className={styles.nlInput} type="email" placeholder="email@anda.com" required />
            <button type="submit" id="newsletter-submit" className={styles.nlBtn}>Berlangganan</button>
          </form>
        </div>
      </section>
    </>
  )
}
