'use client'

import Link from 'next/link'
import HamburgerMenu from './HamburgerMenu'
import { ArrowRight } from 'lucide-react'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-1 text-2xl font-bold">
            <span className="text-[#D4A04C]">DANHOLT</span>
            <span className="text-white">SUITES</span>
          </Link>

          <div className="flex items-center gap-4">
            <Link 
              href="/rooms"
              className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 bg-[#D4A04C] text-white rounded-full font-semibold hover:bg-[#E5B15D] transition-all shadow-lg"
            >
              Book a Stay
              <ArrowRight className="w-4 h-4" />
            </Link>
            <HamburgerMenu />
          </div>
        </div>
      </div>
    </header>
  )
}
