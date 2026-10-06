import { createContext, useContext, useEffect, useState } from 'react'

export const STRINGS = {
  he: {
    title: 'LaunchPad — כל הכלים לעבודה היומיומית במקום אחד',
    switchTo: 'Switch to English',
    switchLabel: 'EN',
    navFeatures: 'הכלים',
    navPricing: 'מחיר',
    heroTitle: 'כל הכלים לעבודה היומיומית, במקום אחד',
    heroSub:
      'חמש תוכנות שימושיות בהתקנה אחת. הכול רץ על המחשב שלך – בלי אינטרנט, בלי הרשמה ובלי סיבוכים.',
    download: 'להורדה ל־Windows',
    featuresTitle: 'חמש תוכנות, מנוי אחד',
    points: [
      { title: 'עובד בלי אינטרנט', body: 'הכול רץ על המחשב שלך. לא צריך חשבון, והקבצים שלך לא עולים לשום שרת.' },
      { title: 'מנוי אחד לכל הכלים', body: 'תשלום חודשי אחד פותח את כל התוכנות. לא צריך לקנות כל אחת בנפרד.' },
      { title: 'תמיד בגרסה האחרונה', body: 'LaunchPad וכל התוכנות שבו מתעדכנים לבד, בלי שתצטרכו לעשות כלום.' },
    ],
    pricingTitle: 'מחיר אחד, בלי הפתעות',
    pricingSub: 'חודש ראשון חינם, ואחר כך ₪9.99 לחודש על כל הכלים.',
    perMonth: ' לחודש',
    trial: 'התחילו חודש חינם',
    rights: 'כל הזכויות שמורות.',
  },
  en: {
    title: 'LaunchPad — the ultimate tool for everyday work',
    switchTo: 'החלפה לעברית',
    switchLabel: 'עב',
    navFeatures: 'Features',
    navPricing: 'Pricing',
    heroTitle: 'The ultimate tool for everyday work',
    heroSub:
      'One launcher. Five offline tools. Everything you need to get things done, without the cloud, the accounts, or the clutter.',
    download: 'Download for Windows',
    featuresTitle: 'Five tools, one license',
    points: [
      { title: 'Offline-first', body: 'Every tool runs locally. No cloud, no accounts, nothing leaves your machine.' },
      { title: 'One license', body: 'A single subscription unlocks the whole toolkit — no per-app purchases.' },
      { title: 'Always current', body: 'LaunchPad and every app inside it update themselves automatically.' },
    ],
    pricingTitle: 'Simple pricing',
    pricingSub: '30-day free trial, then ₪9.99/month for every tool in LaunchPad.',
    perMonth: '/month',
    trial: 'Start free trial',
    rights: 'All rights reserved.',
  },
}

// ponytail: components rendered without a provider (unit tests) get English; the app itself defaults to Hebrew
const LangContext = createContext({ lang: 'en', t: STRINGS.en, toggle: () => {} })

export const useLang = () => useContext(LangContext)

function savedLang() {
  try {
    return localStorage.getItem('lang')
  } catch {
    return null
  }
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => (savedLang() === 'en' ? 'en' : 'he'))

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr'
    document.title = STRINGS[lang].title
    try {
      localStorage.setItem('lang', lang)
    } catch {}
  }, [lang])

  const toggle = () => setLang((l) => (l === 'he' ? 'en' : 'he'))

  return (
    <LangContext.Provider value={{ lang, t: STRINGS[lang], toggle }}>
      {children}
    </LangContext.Provider>
  )
}
