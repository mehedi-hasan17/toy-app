import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className=" from-pink-100 via-purple-100 to-blue-100 text-gray-700 mt-10">
      <div className="container mx-auto px-6 py-10 grid md:grid-cols-3 gap-6">
        
        {/* 🧸 Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-pink-600 mb-2">ToyTopia</h2>
          <p className="text-sm">
            A fun marketplace for kids’ toys — discover, buy, and support local toy sellers.
          </p>
        </div>

        {/* 📚 Links Section */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/terms" className="hover:text-pink-500 transition">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-pink-500 transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-pink-500 transition">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* 🌍 Social Media Section */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-2xl">
            <a href="https://facebook.com" target="_blank" className="hover:text-blue-600">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" className="hover:text-sky-500">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" className="hover:text-pink-600">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-300 mt-6 text-center py-4 text-sm text-gray-600">
        © {new Date().getFullYear()} ToyTopia — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
