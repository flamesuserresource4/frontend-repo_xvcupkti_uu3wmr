import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import Pages from './components/Pages'

const colors = {
  bg: '#FAFAF7',
}

export default function App() {
  const [route, setRoute] = useState(window.location.hash || '#/')

  useEffect(() => {
    const onHash = () => setRoute(window.location.hash || '#/')
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  return (
    <div dir="rtl" className="min-h-screen flex flex-col" style={{ backgroundColor: colors.bg }}>
      <Navbar />
      <div className="flex-1">
        {route === '#/' ? <HomePage /> : <Pages route={route} />}
      </div>
      <Footer />
    </div>
  )
}
