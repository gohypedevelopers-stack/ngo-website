'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageCircle,
  Users,
  Heart,
  ArrowRight,
} from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email Us',
    value: 'aloha@huinehu.org',
    href: 'mailto:aloha@huinehu.org',
    desc: 'General inquiries & support',
    color: 'text-teal-600 bg-teal-50 border-teal-200/60',
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: '(808) 555-NEHU',
    href: 'tel:8085556348',
    desc: 'Mon – Fri, 9 AM – 5 PM HST',
    color: 'text-cyan-600 bg-cyan-50 border-cyan-200/60',
  },
  {
    icon: MapPin,
    label: 'Visit Us',
    value: 'Maui, Hawaiʻi',
    href: '#',
    desc: 'Kīhei Field Station, Maui County',
    color: 'text-amber-600 bg-amber-50 border-amber-200/60',
  },
  {
    icon: Clock,
    label: 'Office Hours',
    value: 'Mon – Fri, 9 AM – 5 PM',
    href: '#',
    desc: 'Hawaiʻi Standard Time (HST)',
    color: 'text-blue-600 bg-blue-50 border-blue-200/60',
  },
]

const quickLinks = [
  {
    icon: Heart,
    title: 'Donate',
    desc: 'Support marine conservation with a tax-deductible gift.',
    href: '/get-involved/investment-tiers',
    color: 'text-rose-600 bg-rose-50',
  },
  {
    icon: Users,
    title: 'Volunteer',
    desc: 'Join a community workday or become a Kiaʻi Kai.',
    href: '/get-involved/volunteer-workdays',
    color: 'text-teal-600 bg-teal-50',
  },
  {
    icon: MessageCircle,
    title: 'Partner With Us',
    desc: 'Explore coalition and institutional partnerships.',
    href: '/get-involved/partner-with-us',
    color: 'text-cyan-600 bg-cyan-50',
  },
]

const faqs = [
  {
    q: 'How can I support Hui Nehu?',
    a: 'You can donate, volunteer for community workdays, or partner with us as an organization. Visit our Get Involved page for all options.',
  },
  {
    q: 'Where are you located?',
    a: 'Our field station is in Kīhei, Maui County, Hawaiʻi. We operate across the south and west Maui coastlines.',
  },
  {
    q: 'Can I visit your field station?',
    a: 'Yes! We welcome visitors by appointment. Reach out via email or phone to schedule a tour or join a community science event.',
  },
  {
    q: 'How quickly do you respond to inquiries?',
    a: 'We typically respond within 1–2 business days. For urgent matters, please call our office during business hours.',
  },
]

export default function ContactPage() {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent'>('idle')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('sending')
    setTimeout(() => {
      setFormState('sent')
    }, 1800)
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-800 flex flex-col justify-between">
      {/* Dark Nav Background */}
      <div className="bg-slate-950 w-full h-20" />
      <SiteNav />

      {/* ─── Hero ─── */}
      <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-50 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-500/8 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/8 blur-[100px] rounded-full" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-16 pb-24 sm:pt-20 sm:pb-32">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto space-y-6">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-teal-500/30 bg-teal-500/10 text-teal-400">
                  <Mail className="h-5 w-5" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-400 font-mono">
                  Get In Touch
                </span>
              </div>

              <h1 className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
                We&apos;d Love to
                <br />
                <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  Hear From You
                </span>
              </h1>

              <p className="text-lg text-slate-400 font-light leading-relaxed max-w-xl mx-auto">
                Whether you have a question, want to volunteer, or are interested
                in partnering — our ʻohana is ready to connect.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Contact Info Cards ─── */}
      <section className="relative -mt-12 z-10">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((item, i) => {
              const IconComp = item.icon
              return (
                <Reveal key={item.label} delay={i * 60}>
                  <a
                    href={item.href}
                    className="group block rounded-2xl border bg-white p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border ${item.color} mb-3`}
                    >
                      <IconComp className="h-5 w-5" />
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm font-semibold text-slate-900 mb-1 group-hover:text-teal-600 transition-colors">
                      {item.value}
                    </p>
                    <p className="text-xs text-slate-500 font-light">
                      {item.desc}
                    </p>
                  </a>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── Form + Map Section ─── */}
      <section className="bg-white py-20 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Contact Form */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="rounded-3xl border border-slate-200/60 bg-slate-50/50 p-6 sm:p-10 shadow-sm">
                  <div className="mb-8 space-y-2">
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                      Send Us a Message
                    </h2>
                    <p className="text-sm text-slate-500 font-light">
                      Fill out the form below and our team will get back to you
                      within 1–2 business days.
                    </p>
                  </div>

                  {formState === 'sent' ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center space-y-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-50 text-teal-600 border border-teal-200">
                        <CheckCircle className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-serif font-bold text-slate-900">
                        Mahalo!
                      </h3>
                      <p className="text-sm text-slate-500 font-light max-w-sm">
                        Your message has been sent successfully. We&apos;ll be in
                        touch soon. 🤙
                      </p>
                      <button
                        onClick={() => setFormState('idle')}
                        className="mt-4 text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors underline underline-offset-4"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div className="space-y-1.5">
                          <label
                            htmlFor="contact-name"
                            className="text-xs font-semibold text-slate-700 uppercase tracking-wider"
                          >
                            Full Name *
                          </label>
                          <input
                            id="contact-name"
                            type="text"
                            required
                            placeholder="Your full name"
                            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-all"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label
                            htmlFor="contact-email"
                            className="text-xs font-semibold text-slate-700 uppercase tracking-wider"
                          >
                            Email *
                          </label>
                          <input
                            id="contact-email"
                            type="email"
                            required
                            placeholder="you@example.com"
                            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-all"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label
                          htmlFor="contact-subject"
                          className="text-xs font-semibold text-slate-700 uppercase tracking-wider"
                        >
                          Subject *
                        </label>
                        <select
                          id="contact-subject"
                          required
                          defaultValue=""
                          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-all appearance-none"
                        >
                          <option value="" disabled>
                            Select a topic…
                          </option>
                          <option>General Inquiry</option>
                          <option>Volunteering</option>
                          <option>Donations & Giving</option>
                          <option>Partnerships</option>
                          <option>Media & Press</option>
                          <option>Research Collaboration</option>
                          <option>Other</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label
                          htmlFor="contact-message"
                          className="text-xs font-semibold text-slate-700 uppercase tracking-wider"
                        >
                          Message *
                        </label>
                        <textarea
                          id="contact-message"
                          required
                          rows={5}
                          placeholder="Tell us how we can help…"
                          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-all resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={formState === 'sending'}
                        className="group flex w-full items-center justify-center gap-2.5 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-teal-600 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {formState === 'sending' ? (
                          <>
                            <svg
                              className="h-4 w-4 animate-spin"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                              />
                            </svg>
                            Sending…
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </Reveal>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-5 space-y-8">
              {/* Map / Image */}
              <Reveal delay={80}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 shadow-xl">
                  <Image
                    src="/contact_ocean.png"
                    alt="Kīhei, Maui — Hui Nehu field station area"
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center gap-2 text-white">
                      <MapPin className="h-4 w-4 text-teal-400" />
                      <span className="text-sm font-semibold">
                        Kīhei, Maui, Hawaiʻi
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 font-light mt-1">
                      Our field station overlooks the South Maui coastline
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Quick Links */}
              <Reveal delay={140}>
                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono mb-4">
                    Quick Links
                  </h3>
                  {quickLinks.map((link) => {
                    const IconComp = link.icon
                    return (
                      <a
                        key={link.title}
                        href={link.href}
                        className="group flex items-start gap-4 rounded-xl border border-slate-200/60 bg-slate-50/50 p-4 hover:border-teal-500/30 hover:bg-white hover:shadow-md transition-all duration-300"
                      >
                        <div
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${link.color}`}
                        >
                          <IconComp className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-900 group-hover:text-teal-600 transition-colors flex items-center gap-1.5">
                            {link.title}
                            <ArrowRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                          </p>
                          <p className="text-xs text-slate-500 font-light mt-0.5">
                            {link.desc}
                          </p>
                        </div>
                      </a>
                    )
                  })}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ Section ─── */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal>
            <div className="text-center mb-12 space-y-3">
              <h2 className="font-serif text-3xl font-bold text-slate-900">
                Frequently Asked Questions
              </h2>
              <div className="mx-auto h-1 w-12 bg-teal-500 rounded-full" />
              <p className="text-sm text-slate-500 font-light max-w-md mx-auto">
                Can&apos;t find what you&apos;re looking for? Send us a message
                above.
              </p>
            </div>
          </Reveal>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="rounded-2xl border border-slate-200/60 bg-white overflow-hidden transition-all duration-300 hover:border-teal-500/20 hover:shadow-sm">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-sm font-semibold text-slate-900">
                      {faq.q}
                    </span>
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        openFaq === i
                          ? 'border-teal-500 bg-teal-50 text-teal-600 rotate-180'
                          : 'border-slate-200 text-slate-400'
                      }`}
                    >
                      <svg
                        className="h-3.5 w-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="px-6 pb-5 text-sm text-slate-500 font-light leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
