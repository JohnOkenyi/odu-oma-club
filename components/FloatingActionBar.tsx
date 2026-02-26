'use client'

import Link from 'next/link'
import { Hotel, Utensils, Building2, Phone } from 'lucide-react'

export default function FloatingActionBar() {
  return (
    <div className="fixed bottom-6 right-6 z-50 hidden md:flex items-center gap-3 bg-gray-800 rounded-full px-4 py-3 shadow-2xl">
      <Link href="/rooms" className="p-2 hover:bg-gray-700 rounded-full transition-colors" title="Rooms">
        <Hotel className="w-5 h-5 text-white" />
      </Link>
      <Link href="/restaurant" className="p-2 hover:bg-gray-700 rounded-full transition-colors" title="Restaurant">
        <Utensils className="w-5 h-5 text-white" />
      </Link>
      <Link href="/facilities" className="p-2 hover:bg-gray-700 rounded-full transition-colors" title="Facilities">
        <Building2 className="w-5 h-5 text-white" />
      </Link>
      <a href="tel:07046080351" className="p-2 hover:bg-gray-700 rounded-full transition-colors" title="Call Us">
        <Phone className="w-5 h-5 text-white" />
      </a>
    </div>
  )
}
