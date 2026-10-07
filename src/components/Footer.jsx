import { useLang } from '../i18n'
import { LEGAL, UPDATED } from '../data/legal'

export default function Footer() {
  const { t, lang } = useLang()
  return (
    <footer className="px-6 py-10 text-center text-sm text-white/40 border-t border-white/5">
      {/* ponytail: native <details> instead of a router + separate legal pages */}
      <div className="mx-auto max-w-3xl mb-6 text-start">
        {LEGAL.map((doc) => (
          <details key={doc.id} id={doc.id} className="border-b border-white/5 py-3">
            <summary className="cursor-pointer text-white/60 hover:text-accent transition-colors">
              {doc.title[lang]}
            </summary>
            <div className="mt-3 space-y-3 leading-relaxed">
              <p className="text-white/30">{UPDATED[lang]}</p>
              {doc.sections.map((s, i) => (
                <p key={i}>{s[lang]}</p>
              ))}
            </div>
          </details>
        ))}
      </div>
      © {new Date().getFullYear()} איי.סייפטי בטיחות וגיהות בע״מ. {t.rights}
    </footer>
  )
}
