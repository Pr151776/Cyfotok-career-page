// Footer.jsx
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#06050D] text-gray-300 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

        {/* Brand + Description */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/logo.png" 
              alt="Cyfotok Infosec"
              className="w-12 h-12"
            />
            <div>
              <h3 className="text-xl font-semibold text-white">
                Cyfotok Infosec
              </h3>
              <p className="text-sm text-gray-400">Cybersecurity Company</p>
            </div>
          </div>

          <p className="text-gray-400 leading-relaxed">
            Protecting Digital Assets with Advanced Security Solutions.  
            Securing organizations through innovative cybersecurity solutions
            and strategic security consulting.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">Services</h3>
          <ul className="space-y-3 text-gray-400">
            <li>Penetration Testing</li>
            <li>Incident Response</li>
            <li>Threat Intelligence</li>
            <li>Security Consulting</li>
            <li>Vulnerability Assessment</li>
            <li>Security Training</li>
            <li>Security Audit</li>
            <li>Compliance Services</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">Contact</h3>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-purple-400" />
              +91 9176121201
            </li>

            <li className="flex items-center gap-3">
              <FaEnvelope className="text-purple-400" />
              mail@cyfotok.com
            </li>

            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-purple-400 mt-1" />
              Rathinam Tech Zone Campus,  
              Eachanari, Coimbatore
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-16 pt-6" />

      {/* Bottom Row */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between text-sm text-gray-500 px-4">
        <p>© 2024 Cyfotok Infosec. All rights reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-300 transition">Privacy Policy</a>
          <a href="#" className="hover:text-gray-300 transition">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
