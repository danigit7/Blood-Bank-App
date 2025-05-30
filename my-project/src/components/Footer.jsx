import React from "react";
import { Heart, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Heart className="h-5 w-5 mr-2 text-red-500" />
              BloodBank App
            </h3>
            <p className="text-sm text-gray-300">
              Connecting blood donors with those in need since 2025. Every
              donation can save up to three lives.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="/" className="hover:text-red-400">
                  Home
                </a>
              </li>
              <li>
                <a href="/donors" className="hover:text-red-400">
                  Find Donors
                </a>
              </li>
              <li>
                <a href="/donate" className="hover:text-red-400">
                  Become a Donor
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-400">
                  Blood Types Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-400">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-red-400" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-red-400" />
                <span>contact@bloodbankapp.com</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-red-400" />
                <span>123 Health Street, Medical District</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} BloodBank App. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
