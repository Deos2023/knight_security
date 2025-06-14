'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ]

  const isActive = (href) => pathname === href

  return (
    <nav className="bg-white shadow-md text-[#3D2B1F] fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <Image src="/logo.png" alt="Knight Security Logo" width={80} height={80} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-medium transition hover:text-[#5E3B1F] ${
                isActive(link.href) ? 'text-[#5E3B1F] underline underline-offset-4 font-semibold' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="tel:+919123322412"
            className="bg-[#5E3B1F] text-white px-4 py-2 rounded hover:bg-[#8B5E3C] transition"
          >
            Call Now
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#3D2B1F]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-3 shadow-md">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block py-2 font-medium border-b border-gray-100 transition ${
                isActive(link.href) ? 'text-[#5E3B1F] underline underline-offset-4 font-semibold' : 'text-[#3D2B1F]'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="tel:+919123322412"
            className="block w-full text-center bg-[#5E3B1F] text-white px-4 py-2 rounded hover:bg-[#8B5E3C] transition"
          >
            Call Now
          </Link>
        </div>
      )}
    </nav>
  )
}
