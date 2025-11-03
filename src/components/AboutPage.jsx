export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 text-right">
      <h1 className="text-3xl font-semibold text-zinc-900 mb-6">درباره نازگل</h1>
      <p className="text-zinc-700 leading-8 mb-4">
        من نازگل هستم؛ سال‌ها برنامه‌نویس بودم و به خاطر راهنمایی‌های نادرست در تمرینات ورزشی دچار آسیب شدم. همین موضوع باعث شد به صورت علمی سراغ حرکت، تمرین و فیزیولوژی ورزش بروم تا بفهمم چطور می‌شود با کمترین زمان و بدون آسیب، قوی‌تر و سالم‌تر شد.
      </p>
      <p className="text-zinc-700 leading-8 mb-4">
        امروز مأموریتم این است که به آدم‌های واقعی با زندگی‌های واقعی کمک کنم؛ مخصوصا کارمندان پرمشغله که پشت میز ساعت‌های طولانی می‌نشینند. برنامه‌هایم ساده، قابل پیگیری و علمی هستند و با زبان انسانی و قابل فهم ارائه می‌شوند.
      </p>
      <div className="mt-10 rounded-2xl border border-zinc-200 bg-white p-6">
        <h2 className="text-2xl font-semibold text-zinc-900 mb-4">ارزش‌ها</h2>
        <ul className="list-disc pr-6 space-y-3 text-zinc-700 leading-8">
          <li>همدلی — هر بدن و هر روزی متفاوت است.</li>
          <li>سادگی — تمرین‌ها شفاف، کوتاه و قابل اجرا هستند.</li>
          <li>علم — بر پایه فیزیولوژی و اصول تمرین.</li>
          <li>قابل پیگیری — مسیر مشخص با قدم‌های کوچک اما پایدار.</li>
        </ul>
      </div>
    </main>
  )
}
