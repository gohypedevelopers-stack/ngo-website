'use client'

import { useState } from 'react'
import { ArrowRight, Calendar, CheckCircle, Mail, MessageSquare, Phone, User, X } from 'lucide-react'

export function VolunteerModalButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    workday: 'June 20, 2026 - Beach & Coastline Cleanup',
    notes: ''
  })

  const workdays = [
    'June 20, 2026 - Beach & Coastline Cleanup',
    'July 11, 2026 - Water Quality Testing & Monitoring',
    'July 25, 2026 - Coral Propagation & Outplanting',
    'August 15, 2026 - Limu (Seaweed) Restoration'
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setIsOpen(false)
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        workday: 'June 20, 2026 - Beach & Coastline Cleanup',
        notes: ''
      })
    }, 2500)
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-500 px-8 py-4 text-sm font-bold text-slate-950 shadow-[0_12px_30px_rgba(20,184,166,0.28)] transition-all hover:-translate-y-0.5 hover:bg-teal-400 hover:shadow-[0_16px_34px_rgba(20,184,166,0.34)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
      >
        Sign up for the next community workday
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex overflow-y-auto p-3 sm:p-6">
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
            aria-hidden="true"
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="volunteer-signup-title"
            className="relative z-10 m-auto w-full max-w-2xl overflow-hidden rounded-[28px] border border-white/20 bg-white shadow-[0_32px_80px_rgba(2,12,27,0.46)]"
          >
            {isSubmitted ? (
              <div className="relative overflow-hidden bg-slate-950 px-6 py-16 text-center text-white sm:px-12">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal-300 via-cyan-400 to-teal-300" />
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-teal-300/30 bg-teal-400/15 text-teal-300">
                  <CheckCircle className="h-8 w-8" aria-hidden="true" />
                </div>
                <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-teal-300">Mahalo</p>
                <h3 className="mt-3 font-serif text-3xl font-bold">You&apos;re on the crew list.</h3>
                <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-slate-300">
                  We&apos;ll be in touch with the workday details, safety information, and what to bring.
                </p>
              </div>
            ) : (
              <>
                <div className="relative overflow-hidden bg-slate-950 px-6 pb-8 pt-7 text-white sm:px-10 sm:pb-9 sm:pt-9">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal-300 via-cyan-400 to-teal-300" />
                  <div className="pointer-events-none absolute -bottom-24 -right-10 h-52 w-80 rounded-[100%] border border-teal-300/15" />
                  <div className="pointer-events-none absolute -bottom-32 -right-16 h-52 w-80 rounded-[100%] border border-cyan-300/10" />

                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close volunteer signup form"
                    className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/10 text-slate-300 transition-colors hover:bg-white/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 sm:right-6 sm:top-6"
                  >
                    <X className="h-4 w-4" aria-hidden="true" />
                  </button>

                  <div className="relative max-w-lg">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-teal-300">Kiaʻi Kai field crew</p>
                    <h3 id="volunteer-signup-title" className="mt-3 pr-10 font-serif text-3xl font-bold leading-none sm:text-4xl">
                      Reserve your place on the shoreline.
                    </h3>
                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-[15px]">
                      Choose a workday and share a few details. We&apos;ll send the final plan, waiver, and what to bring.
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5 px-6 py-6 sm:px-10 sm:py-8">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="volunteer-name" className="mb-2 block text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">
                        Full name
                      </label>
                      <div className="relative">
                        <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-teal-700" aria-hidden="true" />
                        <input
                          id="volunteer-name"
                          type="text"
                          required
                          autoComplete="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your full name"
                          className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 hover:border-slate-300 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="volunteer-phone" className="mb-2 block text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">
                        Phone <span className="normal-case tracking-normal text-slate-400">(optional)</span>
                      </label>
                      <div className="relative">
                        <Phone className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-teal-700" aria-hidden="true" />
                        <input
                          id="volunteer-phone"
                          type="tel"
                          autoComplete="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(808) 555-0199"
                          className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 hover:border-slate-300 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="volunteer-email" className="mb-2 block text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">
                      Email address
                    </label>
                    <div className="relative">
                      <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-teal-700" aria-hidden="true" />
                      <input
                        id="volunteer-email"
                        type="email"
                        required
                        autoComplete="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 hover:border-slate-300 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="volunteer-workday" className="mb-2 block text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">
                      Choose a workday
                    </label>
                    <div className="relative">
                      <Calendar className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-teal-700" aria-hidden="true" />
                      <select
                        id="volunteer-workday"
                        value={formData.workday}
                        onChange={(e) => setFormData({ ...formData, workday: e.target.value })}
                        className="w-full cursor-pointer rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm text-slate-800 outline-none transition-colors hover:border-slate-300 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10"
                      >
                        {workdays.map((day) => (
                          <option key={day} value={day}>
                            {day}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="volunteer-notes" className="mb-2 block text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">
                      Anything our crew should know? <span className="normal-case tracking-normal text-slate-400">(optional)</span>
                    </label>
                    <div className="relative">
                      <MessageSquare className="pointer-events-none absolute left-4 top-3.5 h-4 w-4 text-teal-700" aria-hidden="true" />
                      <textarea
                        id="volunteer-notes"
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="Accessibility needs, dietary requirements, or a question for the team."
                        rows={2}
                        className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 hover:border-slate-300 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10"
                      />
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-5">
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-teal-600 px-5 py-3.5 text-sm font-bold text-white shadow-[0_10px_24px_rgba(13,148,136,0.24)] transition-all hover:-translate-y-0.5 hover:bg-teal-700 hover:shadow-[0_14px_28px_rgba(13,148,136,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
                    >
                      Reserve my place
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                    <p className="mt-3 text-center text-xs text-slate-500">
                      Takes about two minutes · No experience is required.
                    </p>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}