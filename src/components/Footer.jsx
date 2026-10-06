import { useLang } from '../i18n'

export default function Footer() {
  const { t } = useLang()
  return (
    <footer className="px-6 py-10 text-center text-sm text-white/40 border-t border-white/5">
      © {new Date().getFullYear()} Bafliko. {t.rights}
    </footer>
  )
}
