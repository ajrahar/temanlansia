import { createContext, useContext, useState } from 'react'
import id from './translations/id'
import en from './translations/en'

const translations = { id, en }

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('tl-lang') || 'id'
  })

  const toggleLang = () => {
    const next = lang === 'id' ? 'en' : 'id'
    setLang(next)
    localStorage.setItem('tl-lang', next)
  }

  const t = translations[lang]

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider')
  return ctx
}
