'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  Heart,
  Landmark,
  CreditCard,
  User,
  MapPin,
  Loader2,
  CheckCircle,
  XCircle,
  Clock,
  ArrowRight,
} from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { CheckoutForm } from '@/components/checkout-form'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string, {
  developerTools: { assistant: { enabled: true } }
} as any)

const presetAmounts = [50, 100, 500, 1000, 5000]

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | 'custom'>(100)
  const [customAmount, setCustomAmount] = useState('')
  
  // Personal Details
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [dob, setDob] = useState('')
  const [organization, setOrganization] = useState('')

  // Address Details
  const [address1, setAddress1] = useState('')
  const [address2, setAddress2] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [pinCode, setPinCode] = useState('')
  const [country, setCountry] = useState('')

  // Payment Status
  const [paymentState, setPaymentState] = useState<'idle' | 'processing' | 'success' | 'failed' | 'pending'>('idle')
  const [transactionId, setTransactionId] = useState('')
  const [clientSecret, setClientSecret] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const getDonationAmount = () => {
    if (selectedAmount === 'custom') {
      return parseFloat(customAmount) || 0
    }
    return selectedAmount
  }

  const handleDonate = async (e: React.FormEvent) => {
    e.preventDefault()

    const amount = getDonationAmount()
    if (amount <= 0) {
      alert('Please enter or select a valid donation amount.')
      return
    }

    setPaymentState('processing')
    setErrorMessage('')

    try {
      const res = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount,
          donorName: fullName,
          donorEmail: email,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Failed to initialize payment')
      }

      setClientSecret(data.clientSecret)
      setPaymentState('idle')
    } catch (err: any) {
      console.error(err)
      setErrorMessage(err.message)
      setPaymentState('failed')
    }
  }

  const getFirstName = () => {
    return fullName.trim().split(' ')[0] || 'Donor'
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-800 flex flex-col justify-between">
      {/* Dark Nav Background container */}
      <div className="bg-slate-950 w-full h-20" />
      <SiteNav />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-50 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-500/8 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/8 blur-[100px] rounded-full" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-16 pb-24 sm:pt-20 sm:pb-32">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto space-y-6">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20">
                  <Heart className="h-5 w-5" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-400 font-mono">
                  Make a Difference
                </span>
              </div>

              <h1 className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
                Support
                <br />
                <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  Hui Nehu
                </span>
              </h1>

              <p className="text-lg text-white font-light leading-relaxed max-w-xl mx-auto">
                Your contribution directly funds community-led science, coral restoration, and watershed health across Maui.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Main Donation Container */}
      <section className="relative -mt-16 z-10 mb-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="rounded-3xl border border-slate-200/60 bg-white p-6 sm:p-10 shadow-xl">
            
            {/* 1. PROCESSING STATE */}
            {paymentState === 'processing' && (
              <div className="flex flex-col items-center justify-center py-20 text-center space-y-6">
                <Loader2 className="h-16 w-16 text-teal-500 animate-spin" />
                <h3 className="text-xl font-serif font-bold text-slate-900">
                  Securing Your Donation
                </h3>
                <p className="text-sm text-slate-600 font-light max-w-md leading-relaxed">
                  Please wait... Securing your donation. Do not refresh or press back.
                </p>
              </div>
            )}

            {/* 2. PAYMENT SUCCESSFUL */}
            {paymentState === 'success' && (
              <div className="flex flex-col items-center justify-center py-12 text-center space-y-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-50 text-teal-600 border border-teal-200">
                  <CheckCircle className="h-8 w-8" />
                </div>
                
                <h3 className="text-2xl font-serif font-bold text-slate-900">
                  🎉 Thank You, {getFirstName()}!
                </h3>
                
                <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-6 w-full max-w-md text-left space-y-3">
                  <p className="text-sm text-slate-600 font-light leading-relaxed">
                    Your donation of <strong className="font-semibold text-slate-900">${getDonationAmount()} USD</strong> toward Hui Nehu has been received successfully.
                  </p>
                  <p className="text-xs text-slate-500 font-mono">
                    Transaction ID: <span className="text-slate-900 font-semibold">{transactionId}</span>
                  </p>
                  <p className="text-xs text-slate-550 font-light">
                    A receipt has been sent to <span className="font-medium text-slate-900">{email}</span>
                  </p>
                  <p className="text-sm text-slate-600 font-medium pt-2 border-t border-slate-200/60">
                    Your generosity is changing lives. 💛
                  </p>
                  <p className="text-xs font-semibold text-teal-650">
                    — The Hui Nehu Team
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                  <button
                    onClick={() => {
                      setPaymentState('idle')
                      setClientSecret('')
                      setFullName('')
                      setEmail('')
                      setPhone('')
                      setDob('')
                      setOrganization('')
                      setAddress1('')
                      setAddress2('')
                      setCity('')
                      setState('')
                      setPinCode('')
                      setSelectedAmount(100)
                    }}
                    className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-xs"
                  >
                    Make another donation
                  </button>
                  <a
                    href="/our-work"
                    className="group flex items-center justify-center gap-1.5 rounded-xl bg-slate-900 px-5 py-3 text-xs font-bold text-white transition-all hover:bg-teal-650 hover:shadow-md"
                  >
                    Explore campaigns
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            )}

            {/* 3. PAYMENT FAILED */}
            {paymentState === 'failed' && (
              <div className="flex flex-col items-center justify-center py-12 text-center space-y-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-rose-50 text-rose-600 border border-rose-200">
                  <XCircle className="h-8 w-8" />
                </div>
                
                <h3 className="text-2xl font-serif font-bold text-rose-900">
                  ⚠️ Payment Unsuccessful
                </h3>
                
                <div className="bg-rose-50/50 border border-rose-100 rounded-2xl p-6 w-full max-w-md space-y-3 text-sm text-rose-800">
                  <p className="font-light leading-relaxed">
                    {errorMessage || 'We were unable to process your donation. No amount has been deducted.'}
                  </p>
                  <p className="font-light">
                    Please check your card details and try again, or use a different payment method.
                  </p>
                  <p className="text-xs font-medium pt-2 border-t border-rose-200/40">
                    Need help? Contact us at <a href="mailto:help@ngo.org" className="underline font-semibold">help@ngo.org</a>
                  </p>
                </div>

                <button
                  onClick={() => setPaymentState('idle')}
                  className="rounded-xl bg-slate-900 px-6 py-3.5 text-xs font-bold text-white transition-all hover:bg-teal-650 hover:shadow-md"
                >
                  Try Again
                </button>
              </div>
            )}

            {/* 4. PAYMENT PENDING */}
            {paymentState === 'pending' && (
              <div className="flex flex-col items-center justify-center py-12 text-center space-y-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-50 text-amber-600 border border-amber-200 animate-pulse">
                  <Clock className="h-8 w-8" />
                </div>
                
                <h3 className="text-2xl font-serif font-bold text-slate-900">
                  🕐 Donation Pending
                </h3>
                
                <div className="bg-amber-50/30 border border-amber-100 rounded-2xl p-6 w-full max-w-md space-y-3 text-sm text-slate-700">
                  <p className="font-light leading-relaxed">
                    Your donation is being processed. Bank transfers may take 2–5 business days.
                  </p>
                  <p className="text-xs text-slate-500 font-mono">
                    Transaction Ref: <span className="text-slate-900 font-semibold">{transactionId}</span>
                  </p>
                  <p className="text-xs font-medium pt-2 border-t border-amber-200/40">
                    We&apos;ll notify you once confirmed.
                  </p>
                </div>

                <button
                  onClick={() => setPaymentState('idle')}
                  className="rounded-xl bg-slate-900 px-6 py-3.5 text-xs font-bold text-white transition-all hover:bg-teal-650 hover:shadow-md"
                >
                  Return to Form
                </button>
              </div>
            )}

            {/* FORM IDLE STATE */}
            {paymentState === 'idle' && (
              <>
              <form onSubmit={handleDonate} className="space-y-8">
                {/* Section A: Donation Amount */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                    <Heart className="h-5 w-5 text-teal-500" />
                    <h3 className="text-lg font-serif font-bold text-slate-900">
                      1. Select Donation Amount
                    </h3>
                  </div>

                  {/* Preset amounts Grid */}
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
                    {presetAmounts.map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => setSelectedAmount(amt)}
                        className={`rounded-xl border py-3.5 text-sm font-bold transition-all ${
                          selectedAmount === amt
                            ? 'border-teal-500 bg-teal-50 text-teal-700 shadow-sm'
                            : 'border-slate-200 bg-white text-slate-700 hover:border-slate-350 hover:bg-slate-50'
                        }`}
                      >
                        ${amt}
                      </button>
                    ))}
                  </div>

                  {/* Custom amount selector */}
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedAmount('custom')}
                      className={`rounded-xl border px-5 py-3.5 text-sm font-bold transition-all ${
                        selectedAmount === 'custom'
                          ? 'border-teal-500 bg-teal-50 text-teal-700'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-slate-350 hover:bg-slate-50'
                      }`}
                    >
                      Custom Amount
                    </button>
                    {selectedAmount === 'custom' && (
                      <div className="relative flex-1">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-450 text-sm font-semibold">
                          $
                        </span>
                        <input
                          type="number"
                          required
                          min="1"
                          placeholder="Enter amount"
                          value={customAmount}
                          onChange={(e) => setCustomAmount(e.target.value)}
                          className="w-full rounded-xl border border-slate-200 bg-white pl-8 pr-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-all"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Section B: Personal Details */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                    <User className="h-5 w-5 text-teal-500" />
                    <h3 className="text-lg font-serif font-bold text-slate-900">
                      2. Donor Personal Details
                    </h3>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-all"
                      />

                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-3">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(808) 555-0199"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                        Date of Birth (optional)
                      </label>
                      <input
                        type="date"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                        Organization (optional)
                      </label>
                      <input
                        type="text"
                        placeholder="Company name"
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Section C: Address Details */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                    <MapPin className="h-5 w-5 text-teal-500" />
                    <h3 className="text-lg font-serif font-bold text-slate-900">
                      3. Address Details
                    </h3>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                        Address Line 1 *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Street address or P.O. Box"
                        value={address1}
                        onChange={(e) => setAddress1(e.target.value)}
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                        Address Line 2
                      </label>
                      <input
                        type="text"
                        placeholder="Apartment, suite, unit, building, floor, etc."
                        value={address2}
                        onChange={(e) => setAddress2(e.target.value)}
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                        City *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="City"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                        State *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="State"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                        PIN / Zip Code *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Zip code"
                        value={pinCode}
                        onChange={(e) => setPinCode(e.target.value)}
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                        Country *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit button */}
                {!clientSecret && (
                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-2.5 rounded-xl bg-slate-900 px-6 py-4 text-sm font-bold text-white transition-all hover:bg-teal-650 hover:shadow-lg"
                  >
                    Continue to Payment of ${getDonationAmount()} USD
                  </button>
                )}
              </form>

              {/* Payment Section (Outside the primary form) */}
              {clientSecret && (
                <div className="pt-6 mt-8 border-t border-slate-100">
                  <h3 className="text-lg font-serif font-bold text-slate-900 mb-4">
                    4. Secure Payment
                  </h3>
                  <Elements stripe={stripePromise} options={{ clientSecret }}>
                    <CheckoutForm 
                      amount={getDonationAmount()} 
                      onSuccess={(txId) => {
                        setTransactionId(txId)
                        setPaymentState('success')
                      }}
                      onError={(err) => {
                        setErrorMessage(err)
                        setPaymentState('failed')
                      }}
                    />
                  </Elements>
                </div>
              )}
              </>
            )}

          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
