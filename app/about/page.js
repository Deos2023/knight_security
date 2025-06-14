// app/about/page.js
"use client"
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen bg-[#FDF8F3] text-[#3D2B1F]">
      <Head>
        <title>About Us | Knight Security - Trusted Security Services in Kolkata</title>
        <meta name="description" content="Learn about Knight Security&apos;s 21 years of experience providing professional security services in Kolkata. Our mission, vision, and commitment to safety." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* About Hero Section */}
      <section className="relative h-64 md:h-80 flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/5.webp)' }}>
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.h1
            className="text-3xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Knight Security
          </motion.h1>
          <motion.div
            className="w-20 h-1 bg-yellow-500 mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          ></motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-[#3D2B1F]">Our Story</h2>
              <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
              <p className="mb-4 text-[#5E3B1F]">
                Founded in 2003, Knight Security has been at the forefront of providing professional security solutions in Kolkata for over two decades. What began as a small security agency has grown into one of the most trusted names in the industry.
              </p>
              <p className="mb-4 text-[#5E3B1F]">
                Our journey has been marked by a steadfast commitment to excellence, integrity, and customer satisfaction. We&apos;ve built our reputation one client at a time, ensuring that every assignment receives our undivided attention.
              </p>
            </motion.div>
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/img/1 (11).jpeg"
                alt="Knight Security Team"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-[#FDF8F3]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#3D2B1F]">Our Mission &amp; Vision</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-yellow-400 p-3 rounded-full mr-4">
                  {/* <Image src="/icons/target.png" alt="Mission" width={24} height={24} /> */}
                </div>
                <h3 className="text-xl font-semibold text-[#3D2B1F]">Our Mission</h3>
              </div>
              <p className="text-[#5E3B1F]">
                To provide exceptional security services through highly trained personnel, cutting-edge technology, and unwavering commitment to our clients&apos; safety. We aim to create secure environments where businesses can thrive and families can live without fear.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-yellow-400 p-3 rounded-full mr-4">
                  {/* <Image src="/icons/eye.png" alt="Vision" width={24} height={24} /> */}
                </div>
                <h3 className="text-xl font-semibold text-[#3D2B1F]">Our Vision</h3>
              </div>
              <p className="text-[#5E3B1F]">
                To be Kolkata&apos;s most trusted security partner, recognized for our reliability, professionalism, and innovative security solutions. We envision a safer Kolkata where our services contribute to the overall well-being and prosperity of the community.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#3D2B1F]">Why Choose Knight Security</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Experienced Professionals",
                description: "Our security personnel undergo rigorous training and background checks, ensuring only the most qualified professionals protect your property.",
                icon: "/icons/shield.png"
              },
              {
                title: "24/7 Availability",
                description: "Security concerns don&apos;t keep business hours, and neither do we. Our team is available round-the-clock for your protection.",
                icon: "/icons/clock.png"
              },
              {
                title: "Customized Solutions",
                description: "We understand every client has unique needs. We tailor our services to provide the perfect security solution for your specific requirements.",
                icon: "/icons/settings.png"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-[#FDF8F3] p-6 rounded-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-400 p-3 rounded-full mr-4">
                    {/* <Image src={item.icon} alt={item.title} width={24} height={24} /> */}
                  </div>
                  <h3 className="text-xl font-semibold text-[#3D2B1F]">{item.title}</h3>
                </div>
                <p className="text-[#5E3B1F]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#5E3B1F] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Secure Your Property?</h2>
          <p className="mb-8 max-w-2xl mx-auto">Contact us today to discuss your security needs and get a free consultation from our experts.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="tel:+919123322412" className="bg-yellow-500 text-white px-6 py-3 rounded hover:bg-yellow-600">Call Now</Link>
            <Link href="/contact" className="border border-white text-white px-6 py-3 rounded hover:bg-white hover:text-black transition">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}