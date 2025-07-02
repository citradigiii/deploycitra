'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { MapPin, Phone, Clock, CheckCircle, Star, Users, Globe, Zap } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import SEO from './SEO';

const PekalonganHotelWebsite: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const benefits = [
    {
      icon: <Globe className="w-6 h-6 text-blue-500" />,
      title: "Jangkauan Wisatawan Batik",
      description: "Tampil di pencarian Google untuk wisatawan yang mencari penginapan di kota batik"
    },
    {
      icon: <FaWhatsapp className="w-6 h-6 text-green-500" />,
      title: "Booking Praktis WhatsApp",
      description: "Sistem reservasi mudah yang cocok untuk wisatawan domestik"
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: "AI Customer Service",
      description: "Layani pertanyaan wisatawan tentang Pekalongan 24 jam nonstop"
    },
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      title: "Manajemen Efisien",
      description: "Kelola reservasi dan data tamu dengan sistem terintegrasi"
    }
  ];

  const features = [
    "Website responsif untuk semua perangkat",
    "Domain .com gratis selama 1 tahun",
    "Hosting cepat dan aman",
    "Galeri foto kamar dan batik",
    "Info wisata Pekalongan terintegrasi",
    "Integrasi Google Maps",
    "SEO optimization untuk Pekalongan",
    "SSL certificate gratis"
  ];

  const packages = [
    {
      name: "Starter Pekalongan",
      price: "Rp 499.000",
      originalPrice: "Rp 700.000",
      features: [
        "1 halaman landing page",
        "Desain tema batik Pekalongan",
        "Booking WhatsApp",
        "Domain .my.id gratis",
        "Hosting 3 bulan",
        "1x revisi gratis"
      ]
    },
    {
      name: "Professional Pekalongan",
      price: "Rp 699.000",
      originalPrice: "Rp 900.000",
      popular: true,
      features: [
        "Website multi-halaman",
        "AI Customer Service 3 bulan",
        "Domain .com gratis",
        "Hosting 6 bulan",
        "Info wisata batik",
        "2x revisi gratis",
        "SEO optimization"
      ]
    },
    {
      name: "Premium Pekalongan",
      price: "Custom",
      features: [
        "Website custom sesuai kebutuhan",
        "AI Customer Service 6 bulan",
        "Hosting 12 bulan",
        "Integrasi media sosial",
        "Priority support",
        "Unlimited revisi",
        "Advanced SEO"
      ]
    }
  ];

  const createWhatsAppLink = (packageName: string) => {
    const message = encodeURIComponent(
      `Halo, saya tertarik dengan paket ${packageName} untuk website hotel di Pekalongan. Boleh tahu informasi lebih detail?`
    );
    return `https://wa.me/6285198526632?text=${message}`;
  };

  return (
    <>
      <SEO 
        title="Jasa Pembuatan Website Hotel di Pekalongan"
        description="Jasa pembuatan website hotel profesional di Pekalongan mulai Rp 499rb. Dilengkapi booking WhatsApp, AI customer service 24/7, dan domain gratis. Cocok untuk hotel, penginapan, dan homestay di kota batik Pekalongan."
        canonical="https://citradigitalhotel.com/web-hotel-pekalongan"
      />
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-500">Beranda</Link>
            <span>/</span>
            <span className="text-gray-900">Jasa Website Hotel Pekalongan</span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Jasa Pembuatan Website Hotel di Pekalongan
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Tingkatkan okupansi hotel Anda di kota batik Pekalongan dengan website profesional. 
            Dilengkapi booking WhatsApp otomatis dan AI customer service 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={createWhatsAppLink("Professional Pekalongan")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-3 rounded-full font-medium transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <FaWhatsapp />
              Konsultasi Gratis
            </a>
            <button className="border border-blue-500 text-blue-500 hover:bg-blue-50 px-8 py-3 rounded-full font-medium transition-colors duration-200">
              Lihat Portfolio
            </button>
          </div>
        </div>

        {/* Location Context */}
        <div className="bg-blue-50 rounded-2xl p-8 mb-16">
          <div className="flex items-start gap-4">
            <MapPin className="w-8 h-8 text-blue-500 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold mb-4">Mengapa Hotel di Pekalongan Butuh Website?</h2>
              <p className="text-gray-700 mb-4">
                Pekalongan dikenal sebagai kota batik dengan wisata budaya yang kaya. Museum Batik, 
                Kampung Batik Kauman, dan berbagai sentra batik menarik wisatawan domestik dan mancanegara 
                yang membutuhkan akomodasi berkualitas.
              </p>
              <p className="text-gray-700">
                Wisatawan modern mencari penginapan melalui internet. Website profesional akan membantu 
                hotel Anda menjangkau lebih banyak tamu dan meningkatkan tingkat okupansi di kota batik ini.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Manfaat Website Hotel untuk Bisnis Anda di Pekalongan
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Fitur Lengkap Website Hotel Kami
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Packages Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-4">
            Paket Website Hotel Pekalongan
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Pilih paket yang sesuai dengan kebutuhan dan budget hotel Anda
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl p-8 ${
                  pkg.popular ? 'ring-2 ring-blue-500 shadow-lg' : 'border border-gray-200'
                }`}
              >
                {pkg.popular && (
                  <span className="bg-blue-500 text-white text-sm font-medium px-3 py-1 rounded-full mb-4 inline-block">
                    Paling Populer
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="mb-6">
                  {pkg.originalPrice && (
                    <span className="text-gray-500 line-through text-sm block">{pkg.originalPrice}</span>
                  )}
                  <span className="text-3xl font-bold text-blue-600">{pkg.price}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={createWhatsAppLink(pkg.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-3 flex items-center justify-center gap-2 transition-colors duration-200"
                >
                  <FaWhatsapp />
                  Pesan Sekarang
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-500 to-green-400 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Siap Tingkatkan Booking Hotel Anda di Pekalongan?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Jangan biarkan wisatawan batik memilih kompetitor. Mulai digitalisasi hotel Anda sekarang!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={createWhatsAppLink("Konsultasi Gratis")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-full font-medium transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <FaWhatsapp />
              Konsultasi Gratis Sekarang
            </a>
            <a
              href="tel:+6285198526632"
              className="border border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-full font-medium transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Hubungi: 0851-9852-6632
            </a>
          </div>
        </div>

        {/* Coverage Area */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-4">Area Layanan di Pekalongan</h3>
          <p className="text-gray-600">
            Kami melayani pembuatan website hotel di seluruh area Pekalongan: Pekalongan Barat, Pekalongan Timur, 
            Pekalongan Utara, Pekalongan Selatan, dan sekitarnya. Khusus untuk hotel dekat sentra batik dan wisata budaya.
          </p>
        </div>
      </div>
    </>
  );
};

export default PekalonganHotelWebsite;