import { FaArrowUp, FaEnvelope, FaLinkedinIn, FaPhone } from 'react-icons/fa'

const iconMap = {
  linkedin: FaLinkedinIn,
  email: FaEnvelope,
  phone: FaPhone
}

export default function Footer({ socialLinks }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="pb-8 pt-14">
      <div className="section-shell">
        <div className="glass-panel rounded-[2rem] px-6 py-8 sm:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-2xl font-bold text-white">Kamlesh Singh</p>
              <p className="mt-2 max-w-xl text-sm leading-7 text-slate-300">
                Data Analyst portfolio crafted to showcase dashboards, analytical thinking, and modern reporting experiences.
              </p>
            </div>

            <div className="flex items-center gap-3">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon] || FaEnvelope

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.icon === 'linkedin' ? '_blank' : undefined}
                    rel={link.icon === 'linkedin' ? 'noreferrer' : undefined}
                    aria-label={link.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:text-white"
                  >
                    <Icon />
                  </a>
                )
              })}

              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="ml-2 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 text-slate-950 transition hover:-translate-y-1"
                aria-label="Scroll to top"
              >
                <FaArrowUp />
              </button>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-5 text-sm text-slate-400">
            Copyright {currentYear} Kamlesh Singh. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
