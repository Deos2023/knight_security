"use client"
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Gallery() {
  // Generate image paths (replace with your actual image paths)
  const images = Array.from({ length: 17 }, (_, i) => `/img/1 (${i + 1}).jpeg`);
  
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (index) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  const navigateImage = (direction) => {
    let newIndex = selectedImage + direction;
    if (newIndex < 0) newIndex = images.length - 1;
    if (newIndex >= images.length) newIndex = 0;
    setSelectedImage(newIndex);
  };

  return (
    <div className="min-h-screen bg-[#FDF8F3] text-[#3D2B1F]">
      <Head>
        <title>Gallery | Knight Security - Our Security Team in Action</title>
        <meta name="description" content="View our gallery to see Knight Security's professional security team in action across various locations in Kolkata." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      

      {/* Gallery Hero Section */}
      <section className="relative h-64 md:h-80 flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/8.webp)' }}>
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.h1
            className="text-3xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Security Team in Action
          </motion.h1>
          <motion.div
            className="w-20 h-1 bg-yellow-500 mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          ></motion.div>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#3D2B1F]">Security Operations Gallery</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-[#5E3B1F]">
              Browse through our gallery to see our professional security team providing top-notch services across Kolkata.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((src, index) => (
              <motion.div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => openImage(index)}
                whileHover={{ scale: 1.03 }}
              >
                <Image
                  src={src}
                  alt={`Security operation ${index + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal/Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button 
            onClick={closeImage}
            className="absolute top-4 right-4 text-white text-4xl hover:text-yellow-500 transition"
          >
            &times;
          </button>
          
          <button 
            onClick={(e) => { e.stopPropagation(); navigateImage(-1); }}
            className="absolute left-4 text-white text-4xl hover:text-yellow-500 transition md:left-10"
          >
            &#10094;
          </button>
          
          <div className="relative w-full max-w-4xl h-full max-h-[90vh]">
            <Image
              src={images[selectedImage]}
              alt={`Security operation ${selectedImage + 1}`}
              fill
              className="object-contain"
              priority
            />
          </div>
          
          <button 
            onClick={(e) => { e.stopPropagation(); navigateImage(1); }}
            className="absolute right-4 text-white text-4xl hover:text-yellow-500 transition md:right-10"
          >
            &#10095;
          </button>
          
          <div className="absolute bottom-4 left-0 right-0 text-center text-white">
            Image {selectedImage + 1} of {images.length}
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-[#5E3B1F] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Professional Security Services?</h2>
          <p className="mb-8 max-w-2xl mx-auto">Contact us today to discuss your security requirements with our experts.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+919123322412" className="bg-yellow-500 text-white px-6 py-3 rounded hover:bg-yellow-600">Call Now</a>
            <Link href="/contact" className="border border-white text-white px-6 py-3 rounded hover:bg-white hover:text-black transition">Get a Quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
}