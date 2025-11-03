const colors = { accent: '#C66C5D', text: '#333333' }

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 mt-16 bg-white/60">
      <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm" style={{ color: '#7D7D7D' }}>
        <p>© {new Date().getFullYear()} نازگل فیت استودیو — همه حقوق محفوظ است.</p>
        <div className="flex items-center gap-6">
          <a href="#/contact" className="hover:opacity-90" style={{ color: colors.text }}>ارتباط با ما</a>
          <a href="#/videos" className="hover:opacity-90" style={{ color: colors.text }}>کتابخانه ویدیو</a>
          <a href="https://spatplayer.com" target="_blank" rel="noreferrer" className="hover:opacity-90" style={{ color: colors.accent }}>دسترسی به دوره‌ها</a>
        </div>
      </div>
    </footer>
  )
}
