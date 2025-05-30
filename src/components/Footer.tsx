import React, { useState } from 'react';
import Link from 'next/link';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import { RiThreadsLine } from 'react-icons/ri';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
              <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-gray-300">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="hover:text-gray-300">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;