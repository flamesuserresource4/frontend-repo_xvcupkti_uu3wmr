export default function CorporatePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 text-right">
      <h1 className="text-3xl font-semibold text-zinc-900 mb-4">برنامه سلامت سازمانی</h1>
      <p className="text-zinc-700 leading-8 mb-8">
        برنامه‌ای ساده و کم‌هزینه برای تیم‌های سازمانی و واحدهای منابع انسانی که می‌خواهند تمرکز، انرژی و شادابی کارکنان را بالا ببرند و دردهای رایج اسکلتی‌عضلانی را کاهش دهند.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <Step n={1} title="جلسه نیازسنجی" desc="یک گفت‌وگوی کوتاه برای شناخت فرهنگ سازمان، نوع شغل‌ها و محدودیت‌ها." />
        <Step n={2} title="طراحی مسیر" desc="چیدمان جلسات کوتاه، ویدیوها، یادآورها و چالش‌های قابل پیگیری." />
        <Step n={3} title="اجرا و گزارش" desc="پیاده‌سازی ساده در پیام‌رسان‌ها/ایمیل و ارائه گزارش دوره‌ای." />
      </div>

      <div className="mt-10 flex justify-end">
        <a href="#/register" className="inline-flex rounded-md bg-rose-700 px-5 py-3 text-white font-medium hover:bg-rose-800">
          درخواست همکاری سازمانی
        </a>
      </div>
    </main>
  )
}

function Step({ n, title, desc }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6">
      <div className="flex items-center justify-end gap-3 mb-2">
        <h3 className="text-lg font-medium text-zinc-900">{title}</h3>
        <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center font-semibold">{n}</div>
      </div>
      <p className="text-zinc-700 leading-7">{desc}</p>
    </div>
  )
}
