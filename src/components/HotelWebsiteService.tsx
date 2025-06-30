'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { FaWhatsapp, FaCheck } from 'react-icons/fa';
import { Clock, Users, Star, TrendingUp } from 'lucide-react';
import SEO from './SEO'; // pastikan path ini benar sesuai struktur project kamu

const HotelWebsiteService: React.FC = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const benefits = [
        { icon: <TrendingUp className="w-6 h-6" />, text: "Meningkatkan kepercayaan tamu" },
        { icon: <Users className="w-6 h-6" />, text: "Menyediakan informasi lengkap dan mudah diakses" },
        { icon: <FaWhatsapp className="w-6 h-6" />, text: "Memberi kemudahan booking via WhatsApp" },
        { icon: <Star className="w-6 h-6" />, text: "Meningkatkan visibilitas di Google" }
    ];

    const features = [
        "Desain responsif dan profesional",
        "Halaman khusus untuk kamar, fasilitas, dan kontak",
        "Tombol booking langsung ke WhatsApp",
        "Domain .my.id gratis selama 1 tahun",
        "Hosting cepat dan aman"
    ];

    const additionalFeatures = [
        "Chatbot AI untuk layanan tamu 24 jam",
        "Kalender ketersediaan kamar",
        "Galeri foto & ulasan tamu",
        "Optimasi SEO dasar dan Google Maps"
    ];

    return (
        <>
            <SEO
                title="Jasa Pembuatan Web Hotel Termurah – Mulai Rp 499 Ribu"
                description="Dapatkan jasa pembuatan website hotel profesional dan terjangkau mulai dari Rp 499 ribu. Tingkatkan visibilitas online penginapan Anda dengan desain modern, fitur lengkap, dan AI Customer Service."
                canonical="https://citradigitalhotel.com/jasa-website-hotel-termurah"
                type="article"
            />

            <article className="max-w-4xl mx-auto px-6 py-12">
                {/* Breadcrumb */}
                <nav className="mb-8" aria-label="Breadcrumb">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-500 transition-colors">Beranda</Link>
                        <span>/</span>
                        <span className="text-gray-900">Jasa Website Hotel</span>
                    </div>
                </nav>

                {/* Hero Section */}
                <header className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                        Jasa Pembuatan Web Hotel Termurah – Mulai Rp 499 Ribu
                    </h1>
                    <div className="relative mb-8">
                        <img
                            src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="Modern Hotel Lobby"
                            className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-2xl"
                            loading="eager"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
                        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                            <p className="text-sm font-medium text-gray-800">
                                Wujudkan brand digital untuk hotel Anda dengan website profesional
                            </p>
                        </div>
                    </div>
                </header>

                {/* Introduction */}
                <section className="mb-12">
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
                        <p className="text-lg leading-relaxed text-gray-800">
                            Di era digital, memiliki website untuk hotel bukan lagi sekadar pelengkap—ini adalah <strong>kebutuhan utama</strong>. Calon tamu Anda mencari penginapan lewat Google, membandingkan harga, melihat foto kamar, dan ingin langsung melakukan pemesanan. Jika penginapan Anda belum memiliki website, Anda berisiko kehilangan peluang besar. Website hotel yang profesional tidak harus mahal. Kini, tersedia jasa pembuatan web hotel termurah yang memberikan solusi lengkap mulai dari desain elegan, optimasi SEO, hingga integrasi dengan AI customer service (CS). Dengan web hotel murah dan fitur lengkap, penginapan kecil sekalipun bisa tampil layaknya hotel bintang lima di dunia digital. Kami menawarkan paket website hotel harga terjangkau, lengkap dengan halaman kamar, galeri foto, tombol booking ke WhatsApp, dan dukungan teknis profesional—semua tanpa harus repot urusan teknis.
                        </p>
                    </div>
                </section>

                {/* Benefits */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900">Pentingnya Website untuk Penginapan</h2>
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div>
                            <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white p-6 rounded-xl shadow">
                                <div className="text-4xl font-bold mb-2">70%+</div>
                                <p className="text-white text-base font-medium">Calon tamu mencari informasi penginapan secara online</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-gray-700 leading-relaxed">
                                Mereka ingin melihat foto kamar, fasilitas, harga, dan ulasan secara cepat dan mudah. Tanpa website, penginapan Anda akan kalah saing dari kompetitor yang sudah lebih dulu tampil profesional.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-6">
                        <h3 className="text-xl font-semibold mb-4 text-gray-900">Website hotel yang baik dapat membantu Anda:</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {benefits.map((b, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                    <div className="text-blue-500">{b.icon}</div>
                                    <span className="text-gray-700">{b.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="text-center bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-2xl p-12">
                    <h2 className="text-3xl font-bold mb-4">Tampilkan Bisnismu di Google Sekarang</h2>
                    <p className="text-xl mb-8 text-blue-100">
                        Website sederhana bisa membuat penginapanmu terlihat jauh lebih profesional.
                    </p>
                    <a
                        href="https://wa.me/6285198526632?text=Halo%2C%20saya%20tertarik%20dengan%20jasa%20pembuatan%20website%20hotel%20Anda.%20Boleh%20dibantu%20info%20lebih%20lanjut%3F"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                        <FaWhatsapp className="text-xl" />
                        📲 Klik di sini untuk mulai
                    </a>
                    <div className="mt-6 text-sm text-blue-100">
                        ✅ Konsultasi Gratis • ✅ Preview Website Gratis • ✅ Garansi Kepuasan
                    </div>
                </section>
            </article>
        </>
    );
};

export default HotelWebsiteService;
