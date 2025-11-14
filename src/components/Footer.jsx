import React from "react";
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            MechaParts Industries
          </h2>
          <p className="leading-relaxed text-gray-400">
            We specialize in precision engineering and custom part manufacturing
            for global industries — combining innovation, reliability, and
            performance.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition">
                About 
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-white transition">
                Projects
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <MapPin size={20} className="text-blue-500 mt-1" />
              <span>
                42 Industrial Estate,
                <br /> Pune, Maharashtra, India
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={20} className="text-blue-500" />
              <a href="tel:+918888888888" className="hover:text-white">
                +91 88888 88888
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex gap-4 mb-6">
            <a href="#" className="hover:text-blue-500">
              <Facebook size={22} />
            </a>
            <a href="#" className="hover:text-blue-400">
              <Twitter size={22} />
            </a>
            <a href="#" className="hover:text-blue-600">
              <Linkedin size={22} />
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            Stay updated on our latest products and innovations.
          </p>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} MechaParts Industries. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
