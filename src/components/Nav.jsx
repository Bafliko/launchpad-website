export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-bg/70 border-b border-white/5">
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        <span className="font-semibold text-lg tracking-tight text-white">
          Launch<span className="text-accent">Pad</span>
        </span>
        <div className="flex gap-6 text-sm text-white/70">
          <a href="#features" className="hover:text-accent transition-colors">
            Features
          </a>
          <a href="#pricing" className="hover:text-accent transition-colors">
            Pricing
          </a>
        </div>
      </nav>
    </header>
  )
}
