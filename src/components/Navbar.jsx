import { useEffect, useState } from 'react'

const colors = {
  accent: '#C66C5D',
  text: '#333333',
}

const links = [
  { href: '#/', label: 'صفحه اصلی' },
  { href: '#/about', label: 'درباره ما' },
  { href: '#/programs', label: 'خدمات' },
  { href: '#/corporate', label: 'همکاری سازمانی' },
  { href: '#/contact', label: 'تماس' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [hash, setHash] = useState(window.location.hash || '#/')

  useEffect(() => {
    const onHash = () => setHash(window.location.hash || '#/')
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  return (
    <header className="w-full bg-white/80 backdrop-blur border-b border-zinc-200 sticky top-0 z-20">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full" style={{ backgroundColor: colors.accent }} />
          <div className="text-right leading-tight">
            <div className="text-sm" style={{ color: colors.text }}>نازگل فیت استودیو</div>
            <div className="text-[11px] text-zinc-500">Nazgol Fit Studio</div>
          </div>
        </a>
        <button
          className="sm:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-zinc-300 text-zinc-700"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
        <ul className="hidden sm:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-sm ${hash === l.href ? 'font-medium' : 'hover:opacity-80'}`}
                style={{ color: hash === l.href ? colors.accent : colors.text }}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#/assessment" className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-white hover:opacity-95" style={{ backgroundColor: colors.accent }}>
              شروع ارزیابی
            </a>
          </li>
        </ul>
      </nav>
      {open && (
        <ul className="sm:hidden px-4 pb-4 space-y-2 border-t border-zinc-200">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block rounded-md px-3 py-2 text-sm ${hash === l.href ? 'bg-zinc-50' : ''}`}
                style={{ color: hash === l.href ? colors.accent : colors.text }}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#/assessment" onClick={() => setOpen(false)} className="block text-center rounded-md px-3 py-2 text-sm font-medium text-white" style={{ backgroundColor: colors.accent }}>
              شروع ارزیابی
            </a>
          </li>
        </ul>
      )}
    </header>
  )
}
