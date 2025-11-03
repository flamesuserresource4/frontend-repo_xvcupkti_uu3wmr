import { useState } from 'react'

export default function RegisterPage() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', job: '', health: '' })

  const onSubmit = (e) => {
    e.preventDefault()
    // شبیه‌سازی ارسال
    setTimeout(() => setSent(true), 400)
  }

  if (sent) {
    return (
      <main className="mx-auto max-w-xl px-4 py-12 text-right">
        <div className="rounded-2xl border border-zinc-200 bg-white p-8 text-right">
          <h1 className="text-2xl font-semibold text-zinc-900 mb-3">ثبت‌نام شما دریافت شد</h1>
          <p className="text-zinc-700 leading-8 mb-4">یک پیام تأیید برای واتس‌اپ شما ارسال شد. به‌زودی با شما تماس می‌گیریم.</p>
          <div className="flex justify-end">
            <a href="#/" className="inline-flex rounded-md bg-rose-700 px-5 py-3 text-white font-medium hover:bg-rose-800">بازگشت به خانه</a>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-xl px-4 py-12 text-right">
      <h1 className="text-3xl font-semibold text-zinc-900 mb-6">فرم ثبت‌نام</h1>
      <form onSubmit={onSubmit} className="space-y-5">
        <Field label="نام و نام خانوادگی">
          <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-right text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-rose-200" placeholder="مثال: نازگل محمدی" />
        </Field>
        <Field label="شماره تماس (واتس‌اپ)">
          <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-right text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-rose-200" placeholder="09xxxxxxxxx" />
        </Field>
        <Field label="شغل / وضعیت کاری">
          <input value={form.job} onChange={(e) => setForm({ ...form, job: e.target.value })} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-right text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-rose-200" placeholder="مثال: برنامه‌نویس بک‌اند، دورکار" />
        </Field>
        <Field label="شرح کوتاه وضعیت سلامت">
          <textarea value={form.health} onChange={(e) => setForm({ ...form, health: e.target.value })} rows={4} className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-right text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-rose-200" placeholder="مثال: درد گردن و شانه سمت راست در پایان روز" />
        </Field>

        <div className="flex justify-end gap-3 pt-2">
          <a href="https://wa.me/" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-md border border-zinc-300 px-4 py-2 text-zinc-800 hover:bg-zinc-50">ارتباط واتس‌اپ</a>
          <button type="submit" className="inline-flex items-center rounded-md bg-rose-700 px-5 py-2.5 text-white font-medium hover:bg-rose-800">ارسال فرم</button>
        </div>
      </form>
    </main>
  )
}

function Field({ label, children }) {
  return (
    <label className="block text-right">
      <div className="mb-1 text-sm text-zinc-700">{label}</div>
      {children}
    </label>
  )
}
