'use client'

import { useState } from 'react'
import { X, Calendar, User, Mail, Phone, MessageSquare, CheckCircle } from 'lucide-react'

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
    // Simulate submission
    setIsSubmitted(true)
    setTimeout(() => {
      // Auto close after showing success for 2 seconds
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
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-500 text-slate-950 font-bold px-8 py-4 text-sm hover:bg-teal-400 transition-all hover:scale-105 shadow-[0_0_20px_rgba(20,184,166,0.3)]"
      >
        Sign up for the next community workday &rarr;
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop overlay */}
          <div 
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity duration-300"
          />

          {/* Modal Container */}
          <div className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white p-6 sm:p-8 text-slate-800 shadow-2xl border border-slate-100 z-10 transform transition-all duration-300 scale-100">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-650 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-8 text-center space-y-4">
                <div className="h-16 w-16 bg-teal-50 rounded-full flex items-center justify-center text-teal-500">
                  <CheckCircle className="h-10 w-10 animate-bounce" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900">Mahalo!</h3>
                <p className="text-sm text-slate-500 max-w-sm">
                  Thank you for signing up to become a Kiaʻi Kai! We will reach out to you soon with meeting details, safety waivers, and what to bring.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-slate-900">Volunteer Workday Signup</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Join a field crew and help protect Maui's coastlines. No experience required.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-teal-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-teal-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
                      Phone Number (Optional)
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(808) 555-0199"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-teal-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Workday Selection */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
                      Select a Workday
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                      <select
                        value={formData.workday}
                        onChange={(e) => setFormData({ ...formData, workday: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-teal-500 focus:outline-none transition-colors bg-white appearance-none cursor-pointer"
                      >
                        {workdays.map((day) => (
                          <option key={day} value={day}>
                            {day}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
                      Special requests or medical notes (Optional)
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                      <textarea
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="E.g., dietary restrictions, allergies, or physical accommodations..."
                        rows={3}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-teal-500 focus:outline-none transition-colors resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full mt-2 inline-flex items-center justify-center rounded-xl bg-teal-500 text-slate-950 font-bold py-3 text-sm hover:bg-teal-400 transition-all shadow-md"
                  >
                    Submit Signup Form
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
