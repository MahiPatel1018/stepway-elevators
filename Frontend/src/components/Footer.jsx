import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">

          {/* Company */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              StepWay
            </h2>

            <p className="text-slate-300 mt-4 leading-7">
              Professional elevator installation, modernization and
              maintenance solutions for residential, commercial and
              industrial projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-slate-300">
              <Link to="/" className="hover:text-blue-400 transition">
                Home
              </Link>

              <Link to="/about" className="hover:text-blue-400 transition">
                About
              </Link>

              <Link to="/products" className="hover:text-blue-400 transition">
                Products
              </Link>

              <Link to="/services" className="hover:text-blue-400 transition">
                Services
              </Link>

              <Link to="/contact" className="hover:text-blue-400 transition">
                Contact
              </Link>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-bold text-white mb-5">
              Products
            </h3>

            <div className="flex flex-col gap-3 text-slate-300">
              <Link to="/products/passenger-lift" className="hover:text-blue-400 transition">
                Passenger Lift
              </Link>

              <Link to="/products/home-lift" className="hover:text-blue-400 transition">
                Home Lift
              </Link>

              <Link to="/products/stretcher-lift" className="hover:text-blue-400 transition">
                Stretcher Lift
              </Link>

              <Link to="/products/freight-lift" className="hover:text-blue-400 transition">
                Freight Lift
              </Link>

              <Link to="/products/capsule-lift" className="hover:text-blue-400 transition">
                Capsule Lift
              </Link>

              <Link to="/products/car-lift" className="hover:text-blue-400 transition">
                Car Lift
              </Link>

              <Link to="/products/mrl-lift" className="hover:text-blue-400 transition">
                MRL Lift
              </Link>

              <Link to="/products/hydraulic-lift" className="hover:text-blue-400 transition">
                Hydraulic Lift
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-white mb-5">
              Contact
            </h3>

            <div className="space-y-4 text-slate-300">

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-blue-400" />
                <span>+91 87340 48673</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-blue-400" />
                <span>+91 95588 48673</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-blue-400" />
                <span>stepwayelevators@gmail.com</span>
              </div>

              <div className="flex items-start gap-3">
              <MapPin size={18} className="text-blue-400 mt-1" />
              <span>
                10-302, Ishwar Estate, Opp. Pushpraj Residency,
                <br />
                B/H Ishwar Saw Mill,
                <br />
                Under Vishwakarma Railway Bridge,
                <br />
                Gota, Ahmedabad - 382481
              </span>
            </div>

            </div>
          </div>

        </div>

        <div className="border-t border-slate-700 mt-12 pt-6 text-center text-slate-400">
          © 2025 StepWay Electricals & Elevator. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}