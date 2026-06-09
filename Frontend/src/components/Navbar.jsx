import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-white/40 shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-24">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-4">
            <div className="p-2 rounded-2xl bg-blue-50">
              <img
                src="/logo.png"
                alt="StepWay Logo"
                className="h-16 w-auto"
              />
            </div>

            <div className="hidden md:block">
              <h1 className="text-2xl font-extrabold text-slate-900 tracking-wide">
                StepWay
              </h1>
              <p className="text-sm text-slate-500">
                Electricals & Elevators
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-12 text-lg font-semibold text-slate-700">
            <li>
              <Link to="/" className="hover:text-blue-600 transition">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-blue-600 transition">
                About
              </Link>
            </li>

            <li>
              <Link to="/products" className="hover:text-blue-600 transition">
                Products
              </Link>
            </li>

            <li>
              <Link to="/services" className="hover:text-blue-600 transition">
                Services
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-blue-600 transition">
                Contact
              </Link>
            </li>
          </ul>

          {/* Desktop Call Button */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="text-right">
              <p className="text-xs text-slate-500">Call Us</p>
              <p className="font-bold text-slate-800">
                +91 87340 48673
              </p>
                <p className="font-bold text-slate-800">
                  +91 95588 48673
                </p>
            </div>

            <a
              href="tel:+918734048673"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition duration-300"
            >
              📞 Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-slate-900"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t shadow-xl">
          <ul className="flex flex-col gap-5 p-6 text-lg font-semibold text-slate-700">
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>

            <li>
              <Link to="/products" onClick={() => setIsOpen(false)}>
                Products
              </Link>
            </li>

            <li>
              <Link to="/services" onClick={() => setIsOpen(false)}>
                Services
              </Link>
            </li>

            <li>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>

            <a
              href="tel:+918734048673"
              onClick={() => setIsOpen(false)}
              className="bg-green-600 hover:bg-green-700 text-white text-center py-3 rounded-xl"
            >
              📞 Call Now
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
}