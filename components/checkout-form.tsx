'use client'

import React, { useState } from 'react'
import {
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js'
import { Loader2, CreditCard } from 'lucide-react'

interface CheckoutFormProps {
  amount: number
  onSuccess: (transactionId: string) => void
  onError: (error: string) => void
}

export function CheckoutForm({ amount, onSuccess, onError }: CheckoutFormProps) {
  const stripe = useStripe()
  const elements = useElements()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setIsLoading(true)

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Return URL is not strictly needed if redirect="if_required", but good to have
        return_url: `${window.location.origin}/donate`,
      },
      redirect: 'if_required',
    })

    if (error) {
      onError(error.message || 'An unexpected error occurred.')
    } else if (paymentIntent && paymentIntent.status === 'succeeded') {
      onSuccess(paymentIntent.id)
    } else {
      onError('Payment is processing or failed.')
    }

    setIsLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 mt-6">
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <PaymentElement />
      </div>
      <button
        type="submit"
        disabled={!stripe || isLoading}
        className="group flex w-full items-center justify-center gap-2.5 rounded-xl bg-slate-900 px-6 py-4 text-sm font-bold text-white transition-all hover:bg-teal-600 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            <CreditCard className="h-5 w-5" />
            Complete Donation of ${amount} USD
          </>
        )}
      </button>
    </form>
  )
}
