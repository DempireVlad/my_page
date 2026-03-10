import { NavLink } from "react-router";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTelegramPlane,
  FaWhatsapp,
  FaLaptopCode,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaGithub size={20} />,
      href: "https://github.com/DempireVlad",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin size={20} />,
      href: "https://www.linkedin.com/in/vladyslav-menchynskyi-b36995263/",
      label: "LinkedIn",
    },
    {
      icon: <FaTelegramPlane size={20} />,
      href: "https://t.me/vladmenchynskyi",
      label: "Telegram",
    },
    {
      icon: <FaInstagram size={20} />,
      href: "https://instagram.com/dempir",
      label: "Instagram",
    },
    {
      icon: <FaWhatsapp size={20} />,
      href: "https://wa.me/+48452707236",
      label: "WhatsApp",
    },
  ];

  const navLinks = [
    { to: "/", label: "Main" },
    { to: "/projects", label: "Projects" },
    { to: "/blog", label: "Blog" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <footer className="bg-gray-800 border-t border-gray-700 text-gray-300 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <NavLink
              to="/"
              className="flex items-center gap-2 text-xl font-bold text-gray-200"
            >
              <FaLaptopCode size={24} className="text-blue-400" />
              <span>
                VLadyslav<span className="text-blue-400">Menchynskyi</span>
              </span>
            </NavLink>
            <p className="text-sm text-gray-500 mt-2">
              © {currentYear} All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="hover:text-blue-400 transition-colors"
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-700/50 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700/50 text-center text-xs text-gray-600">
          Built with React & Tailwind CSS
        </div>
      </div>
    </footer>
  );
};

export default Footer;
