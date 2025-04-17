import Link from 'next/link';
import { FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
              BSY
            </h2>
            <p className="text-gray-300 mb-4">
             Showcasing a new wave of quiet disruptors emerging from the roots of India.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaTwitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaInstagram size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaYoutube size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-100 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/documentary" className="text-gray-400 hover:text-white">
                  Documentary
                </Link>
              </li>
              <li>
                <Link href="/screenings" className="text-gray-400 hover:text-white">
                  Screenings
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-gray-400 hover:text-white">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/sponsors" className="text-gray-400 hover:text-white">
                  Sponsors
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-100 mb-4">For Stakeholders</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/screenings" className="text-gray-400 hover:text-white">
                  Student Registration
                </Link>
              </li>
              <li>
                <Link href="/screenings" className="text-gray-400 hover:text-white">
                  Supporter Tiers
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-gray-400 hover:text-white">
                  Host a Screening
                </Link>
              </li>
              <li>
                <Link href="/sponsors" className="text-gray-400 hover:text-white">
                  Become a Sponsor
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-100 mb-4">Contact Us</h3>
            <p className="text-gray-400 mb-2">Email: info@bhaaratsaasyaatra.org</p>
            <p className="text-gray-400 mb-4">Phone: +91 123 456 7890</p>
            <button className="w-full px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-md hover:from-indigo-700 hover:to-purple-700">
              Join Our Newsletter
            </button>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Bhaarat SaaS Yaatra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 