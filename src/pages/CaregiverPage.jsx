import styles from './CaregiverPage.module.css'
import { useLanguage } from '../i18n/LanguageContext'

export default function CaregiverPage() {
  const { t } = useLanguage()
  const c = t.caregiverPage

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.badge}>{c.badge}</div>
          <h1 className={styles.heroTitle}>{c.heroTitle}</h1>
          <p className={styles.heroDesc}>{c.heroDesc}</p>
          <div className={styles.heroStats}>
            <div className={styles.stat}><span className={styles.statNum}>500+</span><span className={styles.statLabel}>{c.statCaregivers}</span></div>
            <div className={styles.divider} />
            <div className={styles.stat}><span className={styles.statNum}>4.9★</span><span className={styles.statLabel}>{c.statRating}</span></div>
            <div className={styles.divider} />
            <div className={styles.stat}><span className={styles.statNum}>1.200+</span><span className={styles.statLabel}>{c.statClients}</span></div>
          </div>
          <a href="#daftar" className={styles.heroCta} id="caregiver-hero-cta">{c.heroCta}</a>
        </div>
      </section>

      {/* Benefits */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>{c.benefitsTitle}</h2>
          <p className={styles.sectionDesc}>{c.benefitsDesc}</p>
          <div className={styles.benefitsGrid}>
            {c.benefits.map(b => (
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
            <h2 className={styles.sectionTitle}>{c.requirementsTitle}</h2>
            <p className={styles.sectionDesc}>{c.requirementsDesc}</p>
            <ul className={styles.reqList}>
              {c.requirements.map(r => (
                <li key={r} className={styles.reqItem}>
                  <span className={styles.reqCheck}>✓</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.reqRight}>
            <h2 className={styles.sectionTitle}>{c.howToJoinTitle}</h2>
            <div className={styles.steps}>
              {c.steps.map(s => (
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
          <h2 className={styles.formTitle}>{c.formTitle}</h2>
          <p className={styles.formDesc}>{c.formDesc}</p>
          <form
            className={styles.form}
            onSubmit={e => { e.preventDefault(); alert(c.alertMsg) }}
          >
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label className={styles.label}>{c.labelName}</label>
                <input id="caregiver-name" className={styles.input} type="text" placeholder={c.placeholderName} required />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>{c.labelPhone}</label>
                <input id="caregiver-phone" className={styles.input} type="tel" placeholder={c.placeholderPhone} required />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>{c.labelCity}</label>
              <input id="caregiver-city" className={styles.input} type="text" placeholder={c.placeholderCity} required />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>{c.labelExp}</label>
              <select id="caregiver-exp" className={styles.input} defaultValue="">
                <option value="" disabled>{c.placeholderExp}</option>
                {c.expOptions.map(opt => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <button type="submit" id="caregiver-submit-btn" className={styles.submitBtn}>{c.submitBtn}</button>
          </form>
        </div>
      </section>
    </>
  )
}
