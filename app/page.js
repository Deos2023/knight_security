// pages/index.js
"use client"
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDF8F3] text-[#3D2B1F]">
      <Head>
        <title>Knight Security | Professional Security Services in Kolkata</title>
        <meta name="description" content="Knight Security provides top-quality security guard services for residences, offices, hospitals, and commercial establishments in Kolkata." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation - Add your navigation component here */}

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/hero.jpeg)' }}>
        <div className="absolute inset-0 bg-black/40 bg-opacity-60 z-0"></div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.h1
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="block">Secure Your Property with</span>
            <span className="block text-yellow-400">Knight Security</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            56/1A Selimpur Lane, Dhakuria, Kolkata (Landmark: Gupta Para) – 700031<br />
            Mobile: <Link href="tel:+919123322412" className="underline">9123322412</Link> / <Link href="tel:+917003536374" className="underline">7003536374</Link><br />
            Email: <Link href="mailto:knight.services815@gmail.com" className="underline">knight.services815@gmail.com</Link>
          </motion.p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/services" className="bg-yellow-500 text-white px-6 py-3 rounded hover:bg-yellow-600">Explore Services</Link>
            <Link href="https://maps.app.goo.gl/NUniuM8gDbMSjT3q9" target="_blank" rel="noopener noreferrer" className="border border-white text-white px-6 py-3 rounded hover:bg-white hover:text-black transition">View on Map</Link>
          </div>
        </div>
      </section>

      {/* Feature Icons Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#FDF8F3] rounded-lg shadow hover:shadow-md overflow-hidden"
              style={{ height: '350px' }}
            >
              <div className="relative h-40 w-full">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 flex flex-col justify-between h-[calc(100%-10rem)]">
                <h3 className="text-xl font-semibold mb-2 text-[#3D2B1F]">{feature.title}</h3>
                <p className="text-sm text-[#5E3B1F]">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[#5E3B1F] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Knight Security?</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-[#F0E6DB]">
              We provide comprehensive security solutions tailored to your specific needs with professionalism and reliability.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#3D2B1F] p-8 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-500 p-2 rounded-full mr-4">
                    {/* <Image src={item.icon} alt={item.title} width={24} height={24} /> */}
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                <p className="text-[#F0E6DB]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#3D2B1F]">Our Security Services</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-[#5E3B1F]">
              Comprehensive security solutions tailored for various sectors in Kolkata
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#FDF8F3] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="relative h-48">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill
                    className="object-cover transition duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-[#3D2B1F]">{service.title}</h3>
                  <p className="text-[#5E3B1F] mb-4">{service.description}</p>
                  <Link href={`/services/${service.slug}`} className="text-yellow-600 font-medium hover:underline">
                    Learn More &rarr;
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/services" className="inline-block bg-[#5E3B1F] text-white px-8 py-3 rounded-full font-medium hover:bg-[#8B5E3C] transition duration-300">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-[#FDF8F3]">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-[#3D2B1F]">We Have 21 Years of Experience</h2>
            <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
            <p className="mb-4 text-[#5E3B1F]">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p className="mb-6 text-[#5E3B1F]">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <Link href="/contact" className="inline-block bg-yellow-500 text-white px-6 py-3 rounded-full font-medium hover:bg-yellow-600 transition duration-300">
              Contact Us
            </Link>
          </motion.div>

          <motion.div
            className="md:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <Image
                src="/img/1 (3).jpeg"
                alt="Security Guard"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-yellow-500 w-20 h-20 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M6 4l10 6-10 6V4z" /></svg>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#5E3B1F] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-[#F0E6DB]">
              Hear from our satisfied clients about their experience with Knight Security
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#3D2B1F] p-8 rounded-lg shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#F0E6DB] italic mb-6">&quot;{testimonial.quote}&quot;</p>
                <div className="flex items-center">
                  <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-[#F0E6DB]">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#FDF8F3]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#3D2B1F]">Ready to Secure Your Property?</h2>
            <p className="text-xl mb-8 text-[#5E3B1F]">
              Contact us today for a free consultation and quote tailored to your security needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-[#5E3B1F] text-white px-8 py-3 rounded-full font-medium hover:bg-[#8B5E3C] transition duration-300">
                Get a Free Quote
              </Link>
              <Link href="tel:+919123322412" className="border-2 border-[#5E3B1F] text-[#5E3B1F] px-8 py-3 rounded-full font-medium hover:bg-[#5E3B1F] hover:text-white transition duration-300">
                Call Now: 9123322412
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Data arrays
const features = [
  {
    icon: "/cctv.webp",
    title: "Webcam Security",
    description: "Access complete visibility through your phone or device. We provide a complete range of security solutions, day and night vision to improve security & enhance capabilities."
  },
  {
    icon: "/5.webp",
    title: "Security Guard",
    description: "Alarm services to suit the right environment. From wired to wireless systems, Remote Monitored and Integrating systems. We install all alarms to suit the need of the location."
  },
  {
    icon: "/3.webp",
    title: "Motivated Guards",
    description: "Combining identification technology with security solutions to give you a high level of protection, whether your business has a single or multi-site entry points."
  },
  {
    icon: "/4.webp",
    title: "24/7 Services",
    description: "We offer & manage ongoing maintenance of your security systems. Keeping it working as it should be and keeping up with improvements that can be made."
  },
];

const whyChooseUs = [
  {
    icon: "/icons/shield.png",
    title: "Trained Professionals",
    description: "Our security personnel undergo rigorous training and background checks to ensure reliability and professionalism."
  },
  {
    icon: "/icons/clock.png",
    title: "24/7 Availability",
    description: "We provide round-the-clock security services to ensure your property is protected at all times."
  },
  {
    icon: "/icons/custom.png",
    title: "Custom Solutions",
    description: "We tailor our security services to meet your specific needs and budget requirements."
  },
  {
    icon: "/icons/license.png",
    title: "Licensed & Insured",
    description: "Fully licensed security agency with comprehensive insurance coverage for your peace of mind."
  },
  {
    icon: "/icons/response.png",
    title: "Quick Response",
    description: "Our rapid response team is always ready to handle any security situation immediately."
  },
  {
    icon: "/icons/experience.png",
    title: "21 Years Experience",
    description: "With over two decades in the security industry, we have the expertise to handle any security challenge."
  }
];

const services = [
  {
    title: "Residential Security",
    description: "Protecting your home and family with well-trained security personnel and advanced monitoring systems.",
    image: "/2.webp",
    slug: "residential-security"
  },
  {
    title: "Commercial Security",
    description: "Safeguarding your business premises, assets, and employees with customized security solutions.",
    image: "/4.webp",
    slug: "commercial-security"
  },
  {
    title: "Hospital Security",
    description: "Maintaining a safe environment for patients, staff and visitors with specialized healthcare security.",
    image: "/5.webp",
    slug: "hospital-security"
  },
  {
    title: "Office Security",
    description: "Professional security solutions for corporate environments with access control and surveillance.",
    image: "/6.webp",
    slug: "office-security"
  },
  {
    title: "Event Security",
    description: "Crowd management and security for special events, concerts, and public gatherings.",
    image: "/7.webp",
    slug: "event-security"
  },
  {
    title: "VIP Protection",
    description: "Discreet and professional personal protection services for high-profile individuals.",
    image: "/8.webp",
    slug: "vip-protection"
  }
];

const testimonials = [
  {
    quote: "Knight Security has been protecting our hospital for over 2 years. Their guards are professional and well-trained, handling sensitive situations with care.",
    name: "Dr. Ananya Chatterjee",
    role: "Medical Superintendent"
  },
  {
    quote: "The residential security service gives us peace of mind. Quick response and reliable personnel who know our neighborhood well.",
    name: "Mr. Rajiv Mehra",
    role: "Homeowner"
  },
  {
    quote: "Excellent commercial security services for our office complex. They customized a solution that fits our needs perfectly.",
    name: "Ms. Priya Kapoor",
    role: "Business Owner"
  }
];