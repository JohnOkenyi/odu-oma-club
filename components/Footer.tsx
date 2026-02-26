import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-1 text-2xl font-bold mb-4">
              <span className="text-[#D4A04C]">DANHOLT</span>
              <span className="text-white">SUITES</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your home in Abuja. Experience comfort, privacy, and convenience at Danholt Suites – where every stay feels like coming home.
            </p>
          </div>

          <div>
            <h3 className="text-[#D4A04C] font-bold text-lg mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/rooms" className="text-gray-400 hover:text-white transition-colors">Rooms</Link></li>
              <li><Link href="/restaurant" className="text-gray-400 hover:text-white transition-colors">Restaurant</Link></li>
              <li><Link href="/facilities" className="text-gray-400 hover:text-white transition-colors">Facilities</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#D4A04C] font-bold text-lg mb-4 uppercase tracking-wider">Contact</h3>
            <div className="text-gray-400 space-y-2 leading-relaxed">
              <p>#3 Iyabo Okeyode Street</p>
              <p>Beside Collinear Hospital</p>
              <p>Jikwoyi Phase 3, Abuja</p>
              <a href="tel:07046080351" className="block hover:text-white transition-colors font-semibold">07046080351</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2026 Danholt Suites. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
