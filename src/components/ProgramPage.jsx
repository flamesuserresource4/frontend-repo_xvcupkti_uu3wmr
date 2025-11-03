export default function ProgramPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 text-right">
      <h1 className="text-3xl font-semibold text-zinc-900 mb-4">برنامه فردی ۳۰ روزه</h1>
      <p className="text-zinc-700 leading-8 mb-6">
        مسیر خانگی ۳۰ روزه با جلسات کوتاه ۱۰–۲۰ دقیقه‌ای برای افزایش انرژی، کاهش درد و ساختن عادت‌های حرکتی پایدار. هر هفته تمرینات اصلاحی، کشش‌های کاربردی و تمرینات تنفسی خواهید داشت.
      </p>

      <div className="rounded-2xl border border-zinc-200 bg-white p-6 mb-6">
        <h2 className="text-xl font-semibold text-zinc-900 mb-2">گزینه VIP</h2>
        <p className="text-zinc-700 leading-8">همراهی نزدیک‌تر با بررسی ویدیوهای ارسالی شما، اصلاح فرم حرکات، و تماس هفتگی کوتاه برای تنظیم برنامه.</p>
      </div>

      <div className="flex flex-col sm:flex-row justify-end gap-3">
        <a href="#/register" className="inline-flex justify-center rounded-md bg-rose-700 px-5 py-3 text-white font-medium hover:bg-rose-800">ثبت‌نام</a>
        <a href="https://spatplayer.com" target="_blank" rel="noreferrer" className="inline-flex justify-center rounded-md border border-zinc-300 px-5 py-3 text-zinc-800 hover:bg-zinc-50">مشاهده دسترسی دوره‌ها</a>
      </div>
    </main>
  )
}
