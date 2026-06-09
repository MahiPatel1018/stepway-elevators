import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <div className="inline-flex items-center px-5 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm">
              🚀 Trusted by Builders & Developers
            </div>

            <h1 className="mt-6 text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
              Elevating
              <span className="block text-blue-600">
                Modern Living
              </span>
              With Smart Lift Solutions
            </h1>

            <p className="mt-6 text-slate-600 text-lg leading-8 max-w-xl">
              Premium passenger lifts, hospital lifts, freight lifts and
              home elevators engineered for safety, comfort and reliability.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition-all duration-300"
              >
                Get Free Quote
              </Link>

              <Link
                to="/products"
                className="bg-white border border-slate-300 hover:border-blue-600 hover:text-blue-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
              >
                Explore Products
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              <div className="bg-white rounded-2xl shadow-lg p-5 text-center">
                <h3 className="text-3xl font-bold text-blue-600">500+</h3>
                <p className="text-slate-600 text-sm mt-2">
                  Projects
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-5 text-center">
                <h3 className="text-3xl font-bold text-blue-600">20+</h3>
                <p className="text-slate-600 text-sm mt-2">
                  Years Experience
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-5 text-center">
                <h3 className="text-3xl font-bold text-blue-600">24/7</h3>
                <p className="text-slate-600 text-sm mt-2">
                  Support
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-52 h-52 bg-blue-200 rounded-full blur-3xl opacity-40"></div>
            <div className="absolute -bottom-10 -right-10 w-52 h-52 bg-blue-300 rounded-full blur-3xl opacity-30"></div>

            <img
              src="/Hero.png"
              alt="StepWay Elevator"
              className="w-full rounded-3xl shadow-2xl object-cover hover:scale-105 transition duration-500"
            />
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            ></motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}