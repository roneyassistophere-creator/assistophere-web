import React from 'react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-slate-50 flex flex-col items-center justify-center px-4 font-sans overflow-hidden">
      {/* Abstract Background Decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white rounded-full blur-3xl opacity-50"></div>
        <div className="absolute top-[10%] left-[15%] w-[300px] h-[300px] bg-blue-200/40 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-[10%] right-[15%] w-[400px] h-[400px] bg-purple-200/40 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-3xl w-full text-center sm:px-6 lg:px-8 space-y-10 relative z-10">
        {/* Logo Container with Glassmorphism */}
        <div className="flex justify-center">
          <div className="p-6 bg-white/60 backdrop-blur-xl ring-1 ring-gray-900/5 rounded-3xl shadow-sm transition-transform hover:scale-105 duration-500">
            <img
              src="/ASSISTOPHERE%20SITE%20LOGO.svg"
              alt="Assistophere Logo"
              className="w-48 sm:w-64 h-auto"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 ring-1 ring-gray-200 shadow-sm backdrop-blur-sm text-sm font-medium text-gray-700">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            Systems Operational
          </div>

          <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 tracking-tight text-balance">
            Welcome to{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Assistophere
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Your modern backend infrastructure is seamlessly deployed and ready for action. Fast,
            secure, and infinitely scalable.
          </p>
        </div>

        {/* Call to Action */}
        <div className="flex justify-center pt-6">
          <Link
            href="/admin"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full text-base font-semibold shadow-lg shadow-slate-900/20 transition-all duration-300 hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
          >
            <span>Enter Admin Dashboard</span>
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

export const generateMetadata = () => {
  return {
    title: 'Assistophere | Welcome',
    description: 'Welcome to Assistophere - Systems Operational',
  }
}
