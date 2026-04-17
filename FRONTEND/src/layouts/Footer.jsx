import { Link } from 'react-router-dom';
import { Car, Mail, Phone, MapPin, Globe, Camera, MessageCircle, Video, Send } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Quick Links': [
      { label: 'Home', to: '/' },
      { label: 'Browse Cars', to: '/#cars' },
      { label: 'How It Works', to: '/#how-it-works' },
      { label: 'Pricing', to: '/#cars' },
    ],
    'Support': [
      { label: 'Help Center', to: '#' },
      { label: 'Contact Us', to: '#' },
      { label: 'FAQs', to: '#' },
      { label: 'Roadside Assistance', to: '#' },
    ],
    'Legal': [
      { label: 'Privacy Policy', to: '#' },
      { label: 'Terms of Service', to: '#' },
      { label: 'Cookie Policy', to: '#' },
      { label: 'Rental Agreement', to: '#' },
    ],
  };

  const socialLinks = [
    { icon: Globe, href: '#', label: 'Facebook' },
    { icon: Camera, href: '#', label: 'Instagram' },
    { icon: MessageCircle, href: '#', label: 'Twitter' },
    { icon: Video, href: '#', label: 'YouTube' },
  ];

  return (
    <footer id="main-footer" className="relative mt-auto border-t border-white/5">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 to-navy-900 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 no-underline mb-5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric-500 to-indigo-500 flex items-center justify-center shadow-glow transition-transform duration-300 group-hover:scale-110">
                <Car className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold font-[var(--font-heading)] text-white tracking-tight">
                Drive<span className="text-gradient">Fleet</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              Premium car rental service offering a wide selection of luxury, sport, and economy vehicles. 
              Book online and drive away in minutes.
            </p>

            {/* Contact info */}
            <div className="space-y-3 mb-6">
              <a href="mailto:contact@drivefleet.com" className="flex items-center gap-3 text-sm text-slate-400 hover:text-electric-400 no-underline transition-colors">
                <Mail className="w-4 h-4 text-electric-500" />
                contact@drivefleet.com
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-3 text-sm text-slate-400 hover:text-electric-400 no-underline transition-colors">
                <Phone className="w-4 h-4 text-electric-500" />
                +1 (234) 567-890
              </a>
              <p className="flex items-center gap-3 text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-electric-500" />
                123 Fleet Avenue, Auto City
              </p>
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:text-electric-400 hover:bg-electric-500/10 hover:border-electric-500/20 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">{title}</h4>
              <ul className="list-none p-0 m-0 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-slate-400 hover:text-electric-400 no-underline transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/5 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-white font-semibold text-sm mb-1">Subscribe to our newsletter</h4>
              <p className="text-slate-500 text-sm">Get the latest deals and updates delivered to your inbox.</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="input-field !rounded-r-none !border-r-0 w-full md:w-72"
                id="newsletter-email"
              />
              <button
                className="btn-primary !rounded-l-none !px-5 flex-shrink-0"
                id="newsletter-submit"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs">
            © {currentYear} DriveFleet. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Designed with precision for the modern driver.
          </p>
        </div>
      </div>
    </footer>
  );
}
