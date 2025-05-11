import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";



const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const contactInfo = [
  { icon: Mail, text: "support@shoptree.com" },
  { icon: Phone, text: "+880 123 456 789" },
  { icon: MapPin, text: "Khulna, Bangladesh" },
];

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com" },
  { icon: Twitter, href: "https://twitter.com" },
  { icon: Instagram, href: "https://instagram.com" },
];

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10 font-[gosefin-sans]">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          {/* <h2 className="text-xl font-bold text-[#F4EEE0] mb-2">
            Stationery Shop
          </h2> */}
          <img src='https://i.ibb.co.com/tpvfBDXw/logo-footer.png'  />
          <p className="text-sm">Premium quality products at your doorstep.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-[#F4EEE0] mb-2">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.href} className="hover:text-[#F4EEE0]">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-[#F4EEE0] mb-2">
            Contact Us
          </h3>
          <ul className="space-y-2 text-sm">
            {contactInfo.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <item.icon size={16} /> {item.text}
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-[#F4EEE0] mb-2">
            Follow Us
          </h3>
          <div className="flex gap-4">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F4EEE0]">
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Stationery Shop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
