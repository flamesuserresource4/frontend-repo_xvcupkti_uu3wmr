import { useEffect, useState } from 'react'

const colors = {
  bg: '#FAFAF7',
  text: '#333333',
  accent: '#C66C5D',
  muted: '#7D7D7D',
}

function Section({ title, children }) {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-2xl sm:text-3xl mb-4" style={{ color: colors.text }}>{title}</h1>
      <div className="space-y-4 text-[15px] leading-7" style={{ color: colors.muted }}>{children}</div>
    </div>
  )
}

export default function Pages({ route }) {
  if (route === '#/about') {
    return (
      <main style={{ backgroundColor: colors.bg }}>
        <Section title="درباره نازگل فیت استودیو">
          <p>
            داستان نازگل از پشت میز کار شروع شد. او برنامه‌نویس بود و به خاطر کوچینگ نادرست دچار آسیب شد. همین شد که تصمیم گرفت مسیرش را عوض کند، فیزیولوژی ورزش در دانشگاه الزهرا بخواند و مربی تخصصی حرکت و اصلاح فرم شود.
          </p>
          <p>
            ارزش‌های ما: همدلی، سادگی، علم، قابل پیگیری بودن. تمرکز ما روی بهتر شدنِ واقعی زندگی شماست، با قدم‌های کوچک و ماندگار.
          </p>
        </Section>
      </main>
    )
  }

  if (route === '#/programs') {
    return (
      <main style={{ backgroundColor: colors.bg }}>
        <Section title="خدمات">
          <h2 className="text-lg" style={{ color: colors.text }}>برنامه ۳۰ روزه در خانه</h2>
          <p>جلسات کوتاه و قابل انجام برای روزهای پرمشغله + پیگیری ماهانه.</p>
          <h2 className="text-lg mt-6" style={{ color: colors.text }}>گزینه VIP</h2>
          <p>پشتیبانی نزدیک‌تر، اصلاح فرم دقیق، و تنظیم سبک زندگی.</p>
          <div className="pt-4 flex gap-3">
            <a href="#/assessment" className="px-5 py-2 rounded-md text-white" style={{ backgroundColor: colors.accent }}>شروع ارزیابی</a>
            <a href="https://spatplayer.com" target="_blank" rel="noreferrer" className="px-5 py-2 rounded-md border" style={{ borderColor: '#E7E4DF', color: colors.text }}>دسترسی به ویدیوها</a>
          </div>
        </Section>
      </main>
    )
  }

  if (route === '#/corporate') {
    return (
      <main style={{ backgroundColor: colors.bg }}>
        <Section title="سلامت سازمانی">
          <p>برنامه اختصاصی برای سازمان‌ها و تیم‌های اداری: کاهش خستگی، بهبود تمرکز و دردهای اسکلتی-عضلانی.</p>
          <ol className="list-decimal pr-6 space-y-2">
            <li>نیازسنجی کوتاه برای کارکنان</li>
            <li>طراحی برنامه ۴ هفته‌ای با ویدیوهای کوتاه</li>
            <li>جلسه آنلاین معرفی + آموزش وضعیت بدن در محیط کار</li>
            <li>پیگیری ماهانه و گزارش ساده برای HR</li>
          </ol>
          <a href="#/contact" className="inline-block mt-4 px-5 py-2 rounded-md text-white" style={{ backgroundColor: colors.accent }}>درخواست همکاری سازمانی</a>
        </Section>
      </main>
    )
  }

  if (route === '#/contact') {
    return (
      <main style={{ backgroundColor: colors.bg }}>
        <Section title="تماس با ما">
          <p>ساعات پاسخ‌گویی: شنبه تا پنجشنبه، ۱۰ تا ۱۸</p>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a href="https://wa.me/989000000000" target="_blank" rel="noreferrer" className="px-5 py-2 rounded-md text-white text-center" style={{ backgroundColor: colors.accent }}>واتس‌اپ</a>
            <a href="mailto:hello@nazgolfit.studio" className="px-5 py-2 rounded-md border text-center" style={{ borderColor: '#E7E4DF', color: colors.text }}>ایمیل</a>
          </div>
        </Section>
      </main>
    )
  }

  if (route === '#/assessment') {
    return (
      <main style={{ backgroundColor: colors.bg }}>
        <Section title="فرم ارزیابی اولیه">
          <FormAssessment />
        </Section>
      </main>
    )
  }

  if (route === '#/followup') {
    return (
      <main style={{ backgroundColor: colors.bg }}>
        <Section title="فرم پیگیری ماهانه">
          <FormFollowUp />
        </Section>
      </main>
    )
  }

  if (route === '#/videos') {
    return (
      <main style={{ backgroundColor: colors.bg }}>
        <Section title="کتابخانه ویدیو">
          <p>به زودی. برای دسترسی فعلی به دوره‌ها از طریق SpatPlayer وارد شوید.</p>
          <a href="https://spatplayer.com" target="_blank" rel="noreferrer" className="inline-block mt-3 px-5 py-2 rounded-md text-white" style={{ backgroundColor: colors.accent }}>ورود به SpatPlayer</a>
        </Section>
      </main>
    )
  }

  if (route === '#/login') {
    return (
      <main style={{ backgroundColor: colors.bg }}>
        <Section title="ورود اعضا">
          <p>بخش ورود اعضا به زودی فعال می‌شود.</p>
        </Section>
      </main>
    )
  }

  // Default fallback (home handled outside)
  return null
}

function Label({ children }) {
  return <label className="block text-sm mb-1" style={{ color: colors.text }}>{children}</label>
}

function Input(props) {
  return (
    <input
      {...props}
      className="w-full rounded-md border px-3 py-2 outline-none focus:ring-2"
      style={{ borderColor: '#E6E2DD' }}
    />
  )
}

function Textarea(props) {
  return (
    <textarea
      {...props}
      className="w-full rounded-md border px-3 py-2 outline-none focus:ring-2 min-h-[120px]"
      style={{ borderColor: '#E6E2DD' }}
    />
  )
}

function FormAssessment() {
  const [sent, setSent] = useState(false)
  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    alert('فرم شما با موفقیت ثبت شد. در واتس‌اپ با شما هماهنگ می‌کنیم.')
  }
  if (sent) {
    return (
      <div className="p-6 rounded-md border bg-white" style={{ borderColor: '#EDEAE5', color: colors.text }}>
        <p>سپاس! درخواست شما ثبت شد. تیم ما طی ساعات کاری با شما تماس می‌گیرد.</p>
      </div>
    )
  }
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <Label>نام و نام خانوادگی</Label>
        <Input required name="fullName" />
      </div>
      <div>
        <Label>شماره واتس‌اپ</Label>
        <Input required name="phone" type="tel" placeholder="09xxxxxxxxx" />
      </div>
      <div>
        <Label>شغل / وضعیت کاری</Label>
        <Input required name="job" />
      </div>
      <div>
        <Label>سابقه وضعیت سلامت (کوتاه)</Label>
        <Textarea name="health" />
      </div>
      <button type="submit" className="px-5 py-2 rounded-md text-white" style={{ backgroundColor: colors.accent }}>ثبت و ارسال</button>
    </form>
  )
}

function FormFollowUp() {
  const [sent, setSent] = useState(false)
  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    alert('گزارش ماهانه ثبت شد. متشکریم!')
  }
  if (sent) {
    return (
      <div className="p-6 rounded-md border bg-white" style={{ borderColor: '#EDEAE5', color: colors.text }}>
        <p>گزارش شما دریافت شد. ادامه مسیر باهم.</p>
      </div>
    )
  }
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <Label>نام</Label>
        <Input required name="name" />
      </div>
      <div>
        <Label>پیشرفت این ماه</Label>
        <Textarea required name="progress" />
      </div>
      <div>
        <Label>سوال یا نیاز پشتیبانی</Label>
        <Textarea name="support" />
      </div>
      <button type="submit" className="px-5 py-2 rounded-md text-white" style={{ backgroundColor: colors.accent }}>ارسال</button>
    </form>
  )
}
