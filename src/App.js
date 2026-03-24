import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import { socialLinks } from './data/siteData'

function App() {
  return (
    <div className="app-shell relative min-h-screen overflow-x-hidden bg-midnight text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[-8rem] h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-[-8%] top-[10rem] h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute bottom-[-6rem] left-1/3 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-mesh opacity-70" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:110px_110px] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" />
      </div>
      <Navbar />
      <HomePage />
      <Footer socialLinks={socialLinks} />
    </div>
  )
}

export default App
