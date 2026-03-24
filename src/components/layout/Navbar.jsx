import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { navigationLinks } from '../../data/siteData'

function DesktopLink({ link, activeSection }) {
  const isActive = activeSection === link.id

  return (
    <a
      href={`#${link.id}`}
      className={`text-sm font-medium transition ${
        isActive ? 'text-white' : 'text-slate-300 hover:text-white'
      }`}
    >
      {link.label}
    </a>
  )
}

function MobileLink({ link, activeSection, onClick }) {
  const isActive = activeSection === link.id

  return (
    <a
      href={`#${link.id}`}
      onClick={onClick}
      className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
        isActive ? 'bg-white/10 text-white' : 'text-slate-300 hover:bg-white/5 hover:text-white'
      }`}
    >
      {link.label}
    </a>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)

      let current = 'home'

      navigationLinks.forEach((link) => {
        const section = document.getElementById(link.id)

        if (!section) {
          return
        }

        const threshold = section.offsetTop - 140
        if (window.scrollY >= threshold) {
          current = link.id
        }
      })

      setActiveSection(current)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6"
    >
      <div
        className={`section-shell flex items-center justify-between rounded-full border px-4 py-3 transition-all sm:px-6 ${
          isScrolled
            ? 'border-white/10 bg-slate-950/80 shadow-panel backdrop-blur-xl'
            : 'border-white/5 bg-white/5 backdrop-blur-md'
        }`}
      >
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-sky-500 to-violet-500 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20">
            KS
          </div>
          <div>
            <p className="font-display text-sm font-semibold text-white sm:text-base">Kamlesh Singh</p>
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Data Analyst</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigationLinks.map((link) => (
            <DesktopLink key={link.id} link={link} activeSection={activeSection} />
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300/60 hover:bg-cyan-400/20"
          >
            Contact Me
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((current) => !current)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/5 lg:hidden"
        >
          <span className={`h-0.5 w-5 rounded-full bg-white transition ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-5 rounded-full bg-white transition ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-5 rounded-full bg-white transition ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="section-shell mt-3 rounded-3xl border border-white/10 bg-slate-950/95 p-4 shadow-panel backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {navigationLinks.map((link) => (
                <MobileLink
                  key={link.id}
                  link={link}
                  activeSection={activeSection}
                  onClick={() => setMenuOpen(false)}
                />
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  )
}
