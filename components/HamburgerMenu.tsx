'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: '/', label: 'Home' },
    { href: '/rooms', label: 'Rooms' },
    { href: '/restaurant', label: 'Restaurant' },
    { href: '/facilities', label: 'Facilities' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-white/10 rounded-lg transition-colors"
        aria-label="Menu"
      >
        <Menu className="w-6 h-6 text-white" />
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 z-[60]"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed top-0 right-0 h-full w-80 bg-gray-900 z-[70] shadow-2xl">
            <div className="p-6">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              <nav className="mt-16 space-y-6">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-2xl text-white hover:text-[#D4A04C] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  )
}
