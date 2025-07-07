// Komponen WebHotelKendal
'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { MapPin, Phone, Globe, MessageSquare, Bot, Clock, Star, CheckCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import SEO from './SEO';

const KendalHotelWebsite: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const features = [
    {
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      title: "Website Siap Pakai",
      description: "Desain responsif dan profesional yang langsung bisa digunakan"
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-green-500" />,
      title: "Booking WhatsApp",
      description: "Tombol booking langsung terhubung ke WhatsApp hotel Anda"
    },
    {
      icon: <Bot className="w-8 h-8 text-purple-500" />,
      title: "AI Chatbot 24 Jam",
      description: "Asisten virtual yang melayani tamu kapan saja"
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      title: "Domain + Hosting",
      description: "Paket lengkap dengan domain .com dan hosting cepat"
    }
  ];

  const createWhatsAppLink = () => {
    const message = encodeURIComponent(
      "Halo, saya tertarik dengan jasa pembuatan website hotel di Kendal. Boleh dibantu info lebih lanjut?"
    );
    return `https://wa.me/6285198526632?text=${message}`;
  };

  return (
    <>
      <SEO 
        title="Jasa Pembuatan Website Hotel di Kendal"
        description="Bantu penginapan Anda di Kendal tampil lebih profesional dengan website + booking WhatsApp dan AI 24 jam. Mulai dari Rp 499.000."
        canonical="https://citradigitalhotel.com/web-hotel-kendal"
      />
      
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-500">Beranda</Link>
            <span>/</span>
            <span className="text-gray-900">Website Hotel Kendal</span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Jasa Pembuatan Website Hotel di Kendal
          </h1>
          <div className="flex items-center justify-center gap-2 mb-6">
            <MapPin className="w-5 h-5 text-blue-500" />
            <span className="text-lg text-gray-600">Khusus untuk Penginapan di Kendal</span>
          </div>
          <img 
            src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Hotel di Kendal"
            className="w-full h-64 object-cover rounded-xl shadow-lg mb-8"
          />
        </div>

        {/* Article Content */}
        <article className="prose max-w-none">
          <section className="mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Kendal sebagai kabupaten dengan pantai utara Jawa, menarik banyak wisatawan dan pelaku bisnis setiap harinya. Industri perhotelan di Kendal semakin kompetitif, mulai dari hotel berbintang hingga penginapan budget seperti homestay dan guest house.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Di era digital ini, memiliki website bukan lagi pilihan—tetapi kebutuhan wajib. Calon tamu mencari penginapan melalui Google, membandingkan fasilitas, dan ingin kemudahan booking. Penginapan tanpa website akan tertinggal dari kompetitor yang sudah tampil profesional secara online.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Mengapa Website Penting untuk Hotel di Kendal?</h2>
            
            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Star className="w-6 h-6 text-yellow-500" />
                <span className="font-semibold text-lg">Fakta Menarik</span>
              </div>
              <p className="text-gray-700">
                Lebih dari 75% wisatawan yang berkunjung ke Kendal mencari informasi penginapan secara online sebelum melakukan pemesanan.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4 mb-3">
                    {feature.icon}
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Siap Tingkatkan Bisnis Hotel Anda?</h2>
            
            <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Konsultasi Gratis untuk Penginapan di Kendal</h3>
              <p className="mb-6 text-blue-100">
                Dapatkan analisis gratis untuk website hotel Anda dan strategi digital marketing yang tepat untuk pasar Kendal.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={createWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-medium transition-colors"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Hubungi Kami Sekarang
                </a>
                
                <div className="flex items-center justify-center gap-2 text-blue-100">
                  <Phone className="w-4 h-4" />
                  <span>+62 851 9852 6632</span>
                </div>
              </div>
            </div>
          </section>
        </article>
      </div>
    </>
  );
};

export default KendalHotelWebsite;
