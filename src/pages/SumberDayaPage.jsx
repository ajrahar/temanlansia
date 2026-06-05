import styles from './SumberDayaPage.module.css'
import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

const articleColors = [
  { catColor: '#3E6284', catBg: 'rgba(62,98,132,0.1)' },
  { catColor: '#466747', catBg: 'rgba(70,103,71,0.1)' },
  { catColor: '#81552B', catBg: 'rgba(129,85,43,0.1)' },
  { catColor: '#A83836', catBg: 'rgba(168,56,54,0.1)' },
  { catColor: '#3E6284', catBg: 'rgba(62,98,132,0.1)' },
  { catColor: '#466747', catBg: 'rgba(70,103,71,0.1)' },
]

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
  const { t } = useLanguage()
  const s = t.sumberDayaPage

  const articles = s.articles.map((a, i) => ({
    ...a,
    ...articleColors[i],
  }))

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.badge}>{s.badge}</div>
          <h1 className={styles.heroTitle}>{s.heroTitle}</h1>
          <p className={styles.heroDesc}>{s.heroDesc}</p>
        </div>
      </section>

      {/* Articles */}
      <section className={styles.articlesSection}>
        <div className={styles.articlesInner}>
          <h2 className={styles.sectionTitle}>{s.articlesTitle}</h2>
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
                    <button className={styles.readMore} id={`article-${a.id}-read`}>{s.readMore}</button>
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
            <h2 className={styles.sectionTitle}>{s.faqTitle}</h2>
            <p className={styles.sectionDesc}>{s.faqDesc}</p>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer"
              className={styles.faqCta} id="sumberdaya-whatsapp-cta">
              {s.faqCta}
            </a>
          </div>
          <div className={styles.faqRight}>
            {s.faqs.map(f => <FAQItem key={f.q} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className={styles.newsletter}>
        <div className={styles.newsletterInner}>
          <h2 className={styles.newsletterTitle}>{s.newsletterTitle}</h2>
          <p className={styles.newsletterDesc}>{s.newsletterDesc}</p>
          <form
            className={styles.nlForm}
            onSubmit={e => { e.preventDefault(); alert(s.newsletterAlert) }}
          >
            <input
              id="newsletter-email"
              className={styles.nlInput}
              type="email"
              placeholder={s.newsletterPlaceholder}
              required
            />
            <button type="submit" id="newsletter-submit" className={styles.nlBtn}>{s.newsletterBtn}</button>
          </form>
        </div>
      </section>
    </>
  )
}
