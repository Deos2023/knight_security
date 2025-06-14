'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="text-[#3D2B1F] relative" style={{ backgroundImage: 'url(/footer.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className=" backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* About Column */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6">Knight Security</h3>
              <p className="text-[#5E3B1F] mb-6">
                Trusted security service provider in Kolkata. Offering residential, commercial, and specialized guarding solutions for over a decade.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="bg-[#5E3B1F] hover:bg-[#3D2B1F] p-2 rounded-full transition text-white">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link href="#" className="bg-[#5E3B1F] hover:bg-[#3D2B1F] p-2 rounded-full transition text-white">
                  <Instagram className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>

            {/* Services Column */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6">Our Services</h3>
              <ul className="space-y-3 text-[#5E3B1F]">
                <li>Security Services</li>
                <li>Security Guard Services</li>
                <li>Residential Security</li>
                <li>Commercial Security</li>
                <li>Hospital Security</li>
                <li>Office Security</li>
                <li>VIP Protection</li>
              </ul>
            </motion.div>

            {/* Quick Links Column */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><Link href="/" className="text-[#5E3B1F] hover:text-black transition">Home</Link></li>
                <li><Link href="/about" className="text-[#5E3B1F] hover:text-black transition">About Us</Link></li>
                <li><Link href="/services" className="text-[#5E3B1F] hover:text-black transition">Services</Link></li>
                <li><Link href="/contact" className="text-[#5E3B1F] hover:text-black transition">Contact</Link></li>
              </ul>
            </motion.div>

            {/* Contact Column */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#8B5E3C]" />
                  <span className="text-[#5E3B1F]">9123322412 / 7003536374</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#8B5E3C]" />
                  <span className="text-[#5E3B1F]">knight.services815@gmail.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#8B5E3C] mt-1" />
                  <span className="text-[#5E3B1F]">
                    56/1A Selimpur Lane, Dhakuria, Kolkata (Landmark: Gupta Para), 700031
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="border-t border-[#8B5E3C] my-12"
          />

          {/* Embedded Google Map */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="overflow-hidden shadow-xl"
          >

           
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.939696743663!2d88.37392609999999!3d22.5064456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0271d72d505739%3A0x1696328322e50eaf!2sKnight%20Security!5e0!3m2!1sen!2sin!4v1749889533476!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="w-full"
            ></iframe>
          </motion.div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-12">
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-sm text-center md:text-left text-[#5E3B1F]"
            >
              © {new Date().getFullYear()} Knight Security. All rights reserved.<br />
              Website Developed & Maintained by Digital Exposure Online Services
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex gap-6"
            >
              <Link href="#" className="text-[#8B5E3C] hover:text-[#5E3B1F] text-sm transition">Privacy Policy</Link>
              <Link href="#" className="text-[#8B5E3C] hover:text-[#5E3B1F] text-sm transition">Terms of Service</Link>
              <Link href="#" className="text-[#8B5E3C] hover:text-[#5E3B1F] text-sm transition">Sitemap</Link>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}
