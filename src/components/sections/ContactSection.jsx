import { useState } from 'react'
import { FaEnvelope, FaLinkedinIn, FaPhone } from 'react-icons/fa'
import { contactCards, socialLinks } from '../../data/siteData'
import AnimatedSection from '../common/AnimatedSection'
import GlassCard from '../common/GlassCard'
import SectionHeading from '../common/SectionHeading'

const iconMap = {
  linkedin: FaLinkedinIn,
  email: FaEnvelope,
  phone: FaPhone
}

const initialFormState = {
  name: '',
  email: '',
  message: ''
}

export default function ContactSection() {
  const [formState, setFormState] = useState(initialFormState)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formFeedback, setFormFeedback] = useState({
    type: 'idle',
    message: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormFeedback({ type: 'idle', message: '' })
    setFormState((current) => ({
      ...current,
      [name]: value
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setFormFeedback({ type: 'idle', message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formState)
      })

      const data = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(data.message || 'Unable to save your message right now.')
      }

      setFormState(initialFormState)
      setFormFeedback({
        type: 'success',
        message: data.message || 'Thank you for your message.'
      })
    } catch (error) {
      const isConnectionIssue = error instanceof TypeError

      setFormFeedback({
        type: 'error',
        message: isConnectionIssue
          ? 'Backend server is not running. Start the project with npm.cmd start and try again.'
          : error.message || 'Unable to save your message right now.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <AnimatedSection id="contact" className="py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Contact"
          title="Let's connect about dashboards, analytics, and new opportunities."
          description="Reach out through the form or use the direct contact options below. Messages are saved in the backend so you can review them later."
        />

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <GlassCard className="p-8 sm:p-9">
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-200">Get In Touch</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">Open to analytics roles, collaborations, and dashboard projects.</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
              Use the contact form for a quick introduction, or connect directly through email, phone, and LinkedIn.
            </p>

            <div className="mt-8 space-y-4">
              {contactCards.map((item) => {
                const Icon = iconMap[item.icon] || FaEnvelope

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.icon === 'linkedin' ? '_blank' : undefined}
                    rel={item.icon === 'linkedin' ? 'noreferrer' : undefined}
                    className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950/80 text-cyan-200">
                      <Icon />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-slate-400">{item.label}</p>
                      <p className="mt-1 text-sm font-medium text-white sm:text-base">{item.value}</p>
                    </div>
                  </a>
                )
              })}
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Social Links</p>
              <div className="mt-4 flex items-center gap-3">
                {socialLinks.map((item) => {
                  const Icon = iconMap[item.icon] || FaEnvelope

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.icon === 'linkedin' ? '_blank' : undefined}
                      rel={item.icon === 'linkedin' ? 'noreferrer' : undefined}
                      aria-label={item.label}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:text-white"
                    >
                      <Icon />
                    </a>
                  )
                })}
              </div>
              {/* <p className="mt-4 text-xs leading-6 text-slate-500">
                Open http://localhost:5050 to view stored submissions in the backend.
              </p> */}
            </div>
          </GlassCard>

          <GlassCard className="p-8 sm:p-9">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-200">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  className="input-surface"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  className="input-surface"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  required
                  value={formState.message}
                  onChange={handleChange}
                  className="input-surface resize-none"
                  placeholder="Tell me about the role, project, or collaboration opportunity."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-violet-500 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                {isSubmitting ? 'Saving...' : 'Submit Message'}
              </button>

              {formFeedback.message ? (
                <div
                  className={`rounded-2xl border px-4 py-3 text-sm ${
                    formFeedback.type === 'success'
                      ? 'border-emerald-400/20 bg-emerald-400/10 text-emerald-200'
                      : 'border-rose-400/20 bg-rose-400/10 text-rose-200'
                  }`}
                >
                  {formFeedback.message}
                </div>
              ) : null}
            </form>
          </GlassCard>
        </div>
      </div>
    </AnimatedSection>
  )
}


