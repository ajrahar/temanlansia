import styles from './ProblemSection.module.css'
import { useLanguage } from '../i18n/LanguageContext'

export default function ProblemSection() {
  const { t } = useLanguage()
  const p = t.problem

  const cards = [
    {
      id: 'gap',
      color: '#3E6284',
      title: p.gapTitle,
      desc: p.gapDesc,
      icon: (
        <svg width="28" height="29" viewBox="0 0 28 29" fill="none">
          <rect width="28" height="29" rx="4" fill="#3E6284"/>
          <path d="M6 14.5h16M14 6.5v16" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      id: 'guilt',
      color: '#A83836',
      title: p.guiltTitle,
      desc: p.guiltDesc,
      icon: (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
          <rect width="30" height="30" rx="4" fill="#A83836"/>
          <path d="M15 9v7M15 19.5v1.5" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      ),
    },
  ]

  return (
    <section className={styles.section} id="masalah">
      <div className={styles.container}>
        {/* Left column: heading + desc */}
        <div className={styles.leftCol}>
          <h2 className={styles.heading}>{p.heading}</h2>
          <p className={styles.desc}>{p.desc}</p>
        </div>

        {/* Right column: problem cards */}
        <div className={styles.rightCol}>
          <div className={styles.topRow}>
            {cards.map(c => (
              <div key={c.id} className={styles.card} id={`problem-card-${c.id}`}>
                <div className={styles.cardIcon}>{c.icon}</div>
                <h3 className={styles.cardTitle}>{c.title}</h3>
                <p className={styles.cardDesc}>{c.desc}</p>
              </div>
            ))}
          </div>

          {/* Wide bottom card: The Risk */}
          <div className={styles.riskCard} id="problem-card-risk">
            <div className={styles.riskIconWrap}>
              <div className={styles.riskIconCircle}>
                <svg width="28" height="24" viewBox="0 0 28 24" fill="none">
                  <path d="M14 2L2 22h24L14 2z" stroke="#A83836" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M14 9v6M14 17.5v1.5" stroke="#A83836" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
            <div className={styles.riskText}>
              <h3 className={styles.riskTitle}>{p.riskTitle}</h3>
              <p className={styles.riskDesc}>{p.riskDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
