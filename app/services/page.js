"use client"
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      title: "Residential Security",
      description: "Protect your home and family with our trained residential security guards. We provide 24/7 monitoring and patrol services tailored to your property's needs.",
      icon: "/3.webp",
      image: "/10.webp"
    },
    {
      title: "Commercial Security",
      description: "Safeguard your business premises, assets, and employees with our professional commercial security services. We offer access control, surveillance, and on-site guards.",
      icon: "/icons/business.png",
      image: "/9.webp"
    },
    {
      title: "Hospital Security",
      description: "Specialized security solutions for healthcare facilities. Our hospital security personnel are trained to handle sensitive environments with care and professionalism.",
      icon: "/icons/hospital.png",
      image: "/4.webp"
    },
    {
      title: "Office Security",
      description: "Comprehensive security for corporate offices, including reception security, access control, and emergency response planning.",
      icon: "/icons/office.png",
      image: "/5.webp"
    },
    {
      title: "Event Security",
      description: "Professional crowd management and security for weddings, corporate events, and public gatherings. We ensure your event runs smoothly and safely.",
      icon: "/icons/event.png",
      image: "/6.webp"
    },
    {
      title: "VIP Protection",
      description: "Discreet and professional personal protection services for high-profile individuals and executives.",
      icon: "/icons/vip.png",
      image: "/7.webp"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDF8F3] text-[#3D2B1F]">
      <Head>
        <title>Services | Knight Security - Comprehensive Security Solutions in Kolkata</title>
        <meta name="description" content="Knight Security offers professional security services including residential, commercial, hospital, and office security solutions in Kolkata." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      

      {/* Services Hero Section */}
      <section className="relative h-64 md:h-80 flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/6.webp)' }}>
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.h1
            className="text-3xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Security Services
          </motion.h1>
          <motion.div
            className="w-20 h-1 bg-yellow-500 mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          ></motion.div>
        </div>
      </section>

      {/* All Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#3D2B1F]">Comprehensive Security Solutions</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-[#5E3B1F]">
              Knight Security offers a complete range of professional security services tailored to meet the unique needs of each client. Our solutions combine trained personnel with strategic security planning.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-[#FDF8F3] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-yellow-100 p-2 rounded-full mr-4">
                      <Image src={service.icon} alt={service.title} width={20} height={20} />
                    </div>
                    <h3 className="text-xl font-semibold text-[#3D2B1F]">{service.title}</h3>
                  </div>
                  <p className="text-[#5E3B1F] mb-4">{service.description}</p>
                  <Link href="/contact" className="text-yellow-600 font-medium hover:text-yellow-700">
                    Enquire Now →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process Section */}
      <section className="py-16 bg-[#FDF8F3]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#3D2B1F]">Our Service Process</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Consultation",
                description: "We discuss your security needs and assess your property."
              },
              {
                step: "2",
                title: "Custom Plan",
                description: "We create a tailored security solution for your requirements."
              },
              {
                step: "3",
                title: "Deployment",
                description: "Our trained security personnel are assigned to your property."
              },
              {
                step: "4",
                title: "Ongoing Support",
                description: "Regular reviews and adjustments to ensure optimal security."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#3D2B1F]">{item.title}</h3>
                <p className="text-[#5E3B1F]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/img/1 (14).jpeg"
              alt="Knight Security Team"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-[#3D2B1F]">Why Choose Our Services</h2>
            <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
            
            <div className="space-y-6">
              {[
                "Licensed and insured security professionals",
                "Rigorous background checks on all personnel",
                "24/7 availability and rapid response",
                "Customized security solutions",
                "Regular training and performance evaluations",
                "Competitive pricing with no hidden costs"
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-yellow-100 p-1 rounded-full mr-4 mt-1">
                    <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-[#5E3B1F]">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#5E3B1F] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Get a Free Security Assessment</h2>
          <p className="mb-8 max-w-2xl mx-auto">Contact us today to schedule a no-obligation security assessment of your property.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+919123322412" className="bg-yellow-500 text-white px-6 py-3 rounded hover:bg-yellow-600">Call Now</a>
            <Link href="/contact" className="border border-white text-white px-6 py-3 rounded hover:bg-white hover:text-black transition">Request Assessment</Link>
          </div>
        </div>
      </section>
    </div>
  );
}