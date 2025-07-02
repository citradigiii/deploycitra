'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { MapPin, Phone, Clock, CheckCircle, Star, Users, Globe, Zap } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import SEO from './SEO'; // pastikan path ini benar sesuai struktur project kamu

const SoloHotelWebsite: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const benefits = [
    {
      icon: <Globe className="w-6 h-6 text-blue-500" />,
      title: "Jangkauan Wisatawan Luas",
      description: "Tampil di pencarian Google untuk wisatawan domestik dan mancanegara"
    },
    {
      icon: <FaWhatsapp className="w-6 h-6 text-green-500" />,
      title: "Booking Mudah via WhatsApp",
      description: "Sistem reservasi praktis yang familiar untuk wisatawan Indonesia"
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: "AI Customer Service",
      description: "Layani pertanyaan wisatawan tentang Solo 24 jam nonstop"
    },
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      title: "Manajemen Tamu Efisien",
      description: "Kelola data tamu dan reservasi dengan sistem terintegrasi"
    }
  ];

  const features = [
    "Website responsif untuk semua perangkat",
    "Domain .com gratis selama 1 tahun",
    "Hosting cepat dan aman",
    "Galeri foto kamar dan fasilitas",
    "Info wisata Solo terintegrasi",
    "Integrasi Google Maps",
    "SEO optimization untuk Solo",
    "SSL certificate gratis"
  ];

  const packages = [
    {
      name: "Starter Solo",
      price: "Rp 499.000",
      originalPrice: "Rp 700.000",
      features: [
        "1 halaman landing page",
        "Desain tema budaya Solo",
        "Booking WhatsApp",
        "Domain .my.id gratis",
        "Hosting 3 bulan",
        "1x revisi gratis"
      ]
    },
    {
      name: "Professional Solo",
      price: "Rp 699.000",
      originalPrice: "Rp 900.000",
      popular: true,
      features: [
        "Website multi-halaman",
        "AI Customer Service 3 bulan",
        "Domain .com gratis",
        "Hosting 6 bulan",
        "Info wisata Solo",
        "2x revisi gratis",
        "SEO optimization"
      ]
    },
    {
      name: "Premium Solo",
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
      `Halo, saya tertarik dengan paket ${packageName} untuk website hotel di Solo. Boleh tahu informasi lebih detail?`
    );
    return `https://wa.me/6285198526632?text=${message}`;
  };

  return (
    <>
      <SEO 
        title="Jasa Pembuatan Website Hotel di Solo"
        description="Jasa pembuatan website hotel profesional di Solo mulai Rp 499rb. Dilengkapi booking WhatsApp, AI customer service 24/7, dan domain gratis. Cocok untuk hotel, penginapan, dan homestay di Solo Surakarta."
        canonical="https://citradigitalhotel.com/web-hotel-solo"
      />
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-500">Beranda</Link>
            <span>/</span>
            <span className="text-gray-900">Jasa Website Hotel Solo</span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Jasa Pembuatan Website Hotel di Solo
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Tingkatkan okupansi hotel Anda di kota budaya Solo dengan website profesional. 
            Dilengkapi booking WhatsApp otomatis dan AI customer service 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={createWhatsAppLink("Professional Solo")}
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
              <h2 className="text-2xl font-bold mb-4">Mengapa Hotel di Solo Butuh Website?</h2>
              <p className="text-gray-700 mb-4">
                Solo (Surakarta) adalah destinasi wisata budaya terpopuler di Jawa Tengah. Dengan atraksi 
                seperti Keraton Kasunanan, Pasar Klewer, Kampung Batik Laweyan, dan kuliner legendaris, 
                Solo menarik jutaan wisatawan setiap tahunnya.
              </p>
              <p className="text-gray-700">
                Wisatawan modern mencari akomodasi melalui internet. Tanpa website profesional, 
                hotel Anda akan kehilangan peluang besar dari wisatawan yang mencari penginapan di Solo.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Manfaat Website Hotel untuk Bisnis Anda di Solo
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
            Paket Website Hotel Solo
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

        {/* Process Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl p-8 text-white mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Proses Pembuatan Website Hotel
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Konsultasi", desc: "Diskusi kebutuhan dan pilih paket" },
              { step: "2", title: "Desain", desc: "Buat mockup dan preview website" },
              { step: "3", title: "Develop", desc: "Coding dan integrasi fitur" },
              { step: "4", title: "Launch", desc: "Website siap dan online" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-white text-blue-600 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-blue-100 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Testimoni Klien Hotel di Solo
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Website dari Citra Digital Hotel sangat membantu hotel kami di dekat Keraton. 
                Banyak wisatawan yang booking langsung via WhatsApp setelah lihat website!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="font-semibold text-blue-600">AS</span>
                </div>
                <div>
                  <p className="font-semibold">Andi Susanto</p>
                  <p className="text-sm text-gray-600">Pemilik Hotel Keraton, Solo</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "AI customer service-nya membantu banget! Wisatawan bisa tanya info Solo dan kamar 
                kapan saja. Booking naik 40% sejak pakai website ini."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="font-semibold text-purple-600">DW</span>
                </div>
                <div>
                  <p className="font-semibold">Dewi Wulandari</p>
                  <p className="text-sm text-gray-600">Pemilik Homestay Laweyan</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Pertanyaan Seputar Website Hotel Solo
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Berapa lama proses pembuatan website hotel di Solo?",
                a: "Untuk paket Starter: 1-3 hari kerja. Paket Professional: 3-5 hari kerja. Paket Premium: 5-7 hari kerja."
              },
              {
                q: "Apakah bisa menambahkan info wisata Solo di website?",
                a: "Ya, kami bisa menambahkan informasi wisata Solo seperti Keraton, Pasar Klewer, dan tempat menarik lainnya."
              },
              {
                q: "Bagaimana cara kerja AI customer service?",
                a: "AI akan menjawab pertanyaan umum tentang kamar, fasilitas, dan info wisata Solo secara otomatis 24 jam."
              },
              {
                q: "Apakah website bisa diakses wisatawan asing?",
                a: "Ya, website dibuat responsive dan bisa diakses dari mana saja. Bisa juga ditambahkan versi bahasa Inggris."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-500 to-green-400 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Siap Tingkatkan Booking Hotel Anda di Solo?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Jangan biarkan wisatawan memilih kompetitor. Mulai digitalisasi hotel Anda sekarang!
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
          <h3 className="text-xl font-semibold mb-4">Area Layanan di Solo</h3>
          <p className="text-gray-600">
            Kami melayani pembuatan website hotel di seluruh area Solo: Keraton, Laweyan, Pasar Kliwon, 
            Jebres, Banjarsari, dan sekitarnya. Khusus untuk hotel dekat objek wisata Solo.
          </p>
        </div>
      </div>
    </>
  );
};

export default SoloHotelWebsite;