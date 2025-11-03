export default function ContactPage() {
  return (
    <main className="mx-auto max-w-xl px-4 py-12 text-right">
      <h1 className="text-3xl font-semibold text-zinc-900 mb-6">تماس با پشتیبانی</h1>
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 space-y-4">
        <a
          href="https://wa.me/"
          target="_blank"
          rel="noreferrer"
          className="block text-center rounded-md bg-rose-700 px-5 py-3 text-white font-medium hover:bg-rose-800"
        >
          پیام در واتس‌اپ
        </a>
        <div className="text-zinc-700 leading-8">
          <p>
            ایمیل: <a className="text-rose-700 hover:text-rose-800" href="mailto:support@nazgolfit.studio">support@nazgolfit.studio</a>
          </p>
          <p>ساعات پاسخ‌گویی: شنبه تا چهارشنبه، ۹ تا ۱۷</p>
        </div>
      </div>
    </main>
  )
}
