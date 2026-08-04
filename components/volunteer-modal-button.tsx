'use client'

import { useEffect, useState, type FormEvent } from 'react'
import { ArrowRight, Check, CheckCircle, ChevronDown, X } from 'lucide-react'
import { createPortal } from 'react-dom'

export function VolunteerModalButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [isWorkdayMenuOpen, setIsWorkdayMenuOpen] = useState(false)
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

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen])

  const handleSubmit = (e: FormEvent) => {
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
        className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-500 px-8 py-4 text-sm font-bold text-slate-950 shadow-[0_12px_30px_rgba(20,184,166,0.28)] transition-all hover:-translate-y-0.5 hover:bg-teal-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
      >
        Sign up for the next community workday
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </button>

      {isMounted && isOpen && createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4 sm:p-6">
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-slate-950/45 backdrop-blur-[2px]"
            aria-hidden="true"
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="volunteer-signup-title"
            className="relative z-10 my-auto w-full max-w-xl overflow-y-auto rounded-2xl bg-white shadow-2xl ring-1 ring-slate-900/10"
          >
            {isSubmitted ? (
              <div className="relative px-6 py-12 text-center sm:px-10">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close volunteer signup form"
                  className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                  <CheckCircle className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-serif text-3xl font-bold text-slate-950">Mahalo!</h3>
                <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-slate-600">
                  We&apos;ll email you the workday details and what to bring.
                </p>
              </div>
            ) : (
              <>
                <div className="relative border-b border-slate-100 px-6 pb-6 pt-7 sm:px-8">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close volunteer signup form"
                    className="absolute right-5 top-5 inline-flex h-9 w-9 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
                  >
                    <X className="h-5 w-5" aria-hidden="true" />
                  </button>
                  <div className="h-1 w-10 rounded-full bg-teal-500" />
                  <h3 id="volunteer-signup-title" className="mt-4 pr-10 font-serif text-3xl font-bold text-slate-950">
                    Volunteer signup
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Register for a community workday. We&apos;ll send the details before the event.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5 px-6 py-6 sm:px-8 sm:py-7">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="volunteer-name" className="mb-1.5 block text-sm font-semibold text-slate-700">
                        Full name <span className="text-teal-600">*</span>
                      </label>
                      <input
                        id="volunteer-name"
                        type="text"
                        required
                        autoComplete="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 hover:border-slate-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/10"
                      />
                    </div>

                    <div>
                      <label htmlFor="volunteer-email" className="mb-1.5 block text-sm font-semibold text-slate-700">
                        Email address <span className="text-teal-600">*</span>
                      </label>
                      <input
                        id="volunteer-email"
                        type="email"
                        required
                        autoComplete="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 hover:border-slate-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/10"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="volunteer-phone" className="mb-1.5 block text-sm font-semibold text-slate-700">
                        Phone <span className="font-normal text-slate-400">(optional)</span>
                      </label>
                      <input
                        id="volunteer-phone"
                        type="tel"
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(808) 555-0199"
                        className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 hover:border-slate-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/10"
                      />
                    </div>

                    <div className="relative">
                      <label id="volunteer-workday-label" className="mb-1.5 block text-sm font-semibold text-slate-700">
                        Workday
                      </label>
                      <button
                        id="volunteer-workday"
                        type="button"
                        aria-haspopup="listbox"
                        aria-expanded={isWorkdayMenuOpen}
                        aria-controls="volunteer-workday-options"
                        aria-labelledby="volunteer-workday-label volunteer-workday"
                        onClick={() => setIsWorkdayMenuOpen((isOpen) => !isOpen)}
                        onKeyDown={(event) => {
                          if (event.key === 'Escape') setIsWorkdayMenuOpen(false)
                        }}
                        className="flex w-full items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-left text-sm text-slate-900 outline-none transition-colors hover:border-slate-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/10"
                      >
                        <span className="truncate">{formData.workday}</span>
                        <ChevronDown
                          className={`h-4 w-4 shrink-0 text-slate-500 transition-transform ${isWorkdayMenuOpen ? 'rotate-180' : ''}`}
                          aria-hidden="true"
                        />
                      </button>

                      {isWorkdayMenuOpen && (
                        <div
                          id="volunteer-workday-options"
                          role="listbox"
                          aria-labelledby="volunteer-workday-label"
                          className="absolute left-0 right-0 z-20 mt-1 overflow-hidden rounded-xl border border-slate-200 bg-white p-1 shadow-lg"
                        >
                          {workdays.map((day) => {
                            const isSelected = day === formData.workday

                            return (
                              <button
                                key={day}
                                type="button"
                                role="option"
                                aria-selected={isSelected}
                                onClick={() => {
                                  setFormData({ ...formData, workday: day })
                                  setIsWorkdayMenuOpen(false)
                                }}
                                className="flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left text-sm leading-snug text-slate-700 transition-colors hover:bg-teal-50 hover:text-teal-900 focus-visible:bg-teal-50 focus-visible:outline-none"
                              >
                                <span>{day}</span>
                                {isSelected && <Check className="h-4 w-4 shrink-0 text-teal-600" aria-hidden="true" />}
                              </button>
                            )
                          })}
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="volunteer-notes" className="mb-1.5 block text-sm font-semibold text-slate-700">
                      Notes <span className="font-normal text-slate-400">(optional)</span>
                    </label>
                    <textarea
                      id="volunteer-notes"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Accessibility needs, dietary requirements, or questions."
                      rows={2}
                      className="w-full resize-none rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 hover:border-slate-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/10"
                    />
                  </div>

                  <div className="flex flex-col gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs leading-relaxed text-slate-500">
                      No experience is needed. We&apos;ll share what to bring.
                    </p>
                    <button
                      type="submit"
                      className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-teal-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
                    >
                      Sign up
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>,
        document.body,
      )}
    </>
  )
}