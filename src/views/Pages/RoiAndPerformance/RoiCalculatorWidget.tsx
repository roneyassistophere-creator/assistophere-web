'use client'
import React, { useState } from 'react'
import { Calculator } from 'lucide-react'

export const RoiCalculatorWidget: React.FC = () => {
  const [nightlyRate, setNightlyRate] = useState<string>('120')
  const [occupancy, setOccupancy] = useState<string>('70')
  const [monthlyCosts, setMonthlyCosts] = useState<string>('800')
  const [daysAvailable, setDaysAvailable] = useState<string>('30')

  const rate = parseFloat(nightlyRate) || 0
  const occ = Math.min(100, Math.max(0, parseFloat(occupancy) || 0))
  const costs = parseFloat(monthlyCosts) || 0
  const days = Math.min(31, Math.max(0, parseFloat(daysAvailable) || 0))

  const bookedNights = Math.round((occ / 100) * days)
  const revenue = rate * bookedNights
  const profit = revenue - costs
  const annualProfit = profit * 12
  // ROI vs a typical £15k annual investment assumption
  const invested = 15000
  const roi = invested > 0 ? ((annualProfit / invested) * 100) : 0

  const fmt = (n: number) =>
    n.toLocaleString('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 })

  return (
    <div className="bg-base-100 rounded-3xl border border-base-300 shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-linear-to-r from-primary/15 to-secondary/10 px-6 py-4 border-b border-base-300 flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-primary/15 flex items-center justify-center">
          <Calculator className="w-5 h-5 text-primary" />
        </div>
        <div>
          <p className="font-bold text-sm">STR ROI Calculator</p>
          <p className="text-xs text-base-content/50">Instant estimate · UK properties</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-base-300">
        {/* Inputs */}
        <div className="p-6 space-y-5">
          <p className="text-xs font-bold uppercase tracking-widest text-base-content/40">Your Numbers</p>
          {[
            { label: 'Nightly Rate', id: 'nightly', value: nightlyRate, set: setNightlyRate, prefix: '£', suffix: '/ night', min: 1, max: 2000 },
            { label: 'Target Occupancy', id: 'occ', value: occupancy, set: setOccupancy, prefix: '', suffix: '%', min: 1, max: 100 },
            { label: 'Monthly Costs', id: 'costs', value: monthlyCosts, set: setMonthlyCosts, prefix: '£', suffix: '/ month', min: 0, max: 20000 },
            { label: 'Days Available', id: 'days', value: daysAvailable, set: setDaysAvailable, prefix: '', suffix: 'days', min: 1, max: 31 },
          ].map(({ label, id, value, set, prefix, suffix, min, max }) => (
            <div key={id}>
              <label htmlFor={id} className="text-xs font-semibold text-base-content/60 block mb-1.5">{label}</label>
              <div className="flex items-center gap-2">
                {prefix && <span className="text-sm font-bold text-base-content/50 w-4">{prefix}</span>}
                <input
                  id={id}
                  type="number"
                  min={min}
                  max={max}
                  value={value}
                  onChange={e => set(e.target.value)}
                  className="input input-bordered input-sm flex-1 text-sm font-semibold"
                />
                <span className="text-xs text-base-content/40 shrink-0">{suffix}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Outputs */}
        <div className="p-6 space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-base-content/40">Your Estimate</p>
          <div className="space-y-3">
            {[
              { label: 'Booked Nights', value: `${bookedNights} nights`, highlight: false },
              { label: 'Monthly Revenue', value: fmt(revenue), highlight: false },
              { label: 'Monthly Profit', value: fmt(profit), highlight: profit > 0, negative: profit < 0 },
              { label: 'Annual Profit', value: fmt(annualProfit), highlight: annualProfit > 0, negative: annualProfit < 0 },
            ].map(({ label, value, highlight, negative }) => (
              <div key={label} className={`flex items-center justify-between px-4 py-3 rounded-xl border ${highlight ? 'bg-success/8 border-success/25' : negative ? 'bg-error/8 border-error/20' : 'bg-base-200 border-base-300'}`}>
                <span className="text-sm text-base-content/60">{label}</span>
                <span className={`text-sm font-bold ${highlight ? 'text-success' : negative ? 'text-error' : ''}`}>{value}</span>
              </div>
            ))}
          </div>

          {/* ROI highlight */}
          <div className="mt-4 rounded-2xl border-2 border-primary/25 bg-primary/6 px-5 py-4 text-center">
            <p className="text-xs text-base-content/50 mb-1">Estimated Annual ROI</p>
            <p className={`text-4xl font-extrabold ${roi >= 0 ? 'text-primary' : 'text-error'}`}>
              {roi.toFixed(1)}%
            </p>
            <p className="text-[10px] text-base-content/35 mt-1">Based on £{invested.toLocaleString()} assumed investment</p>
          </div>

          <p className="text-[10px] text-base-content/35 leading-relaxed pt-1">
            This is an estimate only. Actual returns depend on pricing strategy, occupancy management, costs,
            and how well your operation is run. Book a call for a proper analysis.
          </p>
        </div>
      </div>
    </div>
  )
}
