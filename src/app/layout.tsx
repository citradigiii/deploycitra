'use client'; // Tetap di sini karena kita menggunakan HelmetProvider (Client Component)

import { Inter } from 'next/font/google'
// import type { Metadata } from 'next' // Tidak diperlukan jika metadata dideklarasikan di sini dan layout adalah client component
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { HelmetProvider } from 'react-helmet-async'; // Impor HelmetProvider
import '@/app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        {/* Bungkus seluruh konten utama dengan HelmetProvider */}
        <HelmetProvider>
          <div className="min-h-screen flex flex-col bg-white">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </HelmetProvider>
      </body>
    </html>
  )
}
