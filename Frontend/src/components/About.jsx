import { Link } from "react-router-dom";
import { ShieldCheck, Wrench, Award, RefreshCcw } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <ShieldCheck size={28} />,
      title: "Safety First",
      desc: "Safe and reliable elevator solutions for every project.",
    },
    {
      icon: <Wrench size={28} />,
      title: "Expert Installation",
      desc: "Professional installation with attention to detail.",
    },
    {
      icon: <Award size={28} />,
      title: "Premium Quality",
      desc: "Built with dependable components for long-term use.",
    },
    {
      icon: <RefreshCcw size={28} />,
      title: "Modernization",
      desc: "Upgrade existing lift systems with modern technology.",
    },
  ];

  return (
    <section id="about" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-14 items-center">

          {/* Left Image */}
          <div>
            <img
              src="/Aboutimage.png"
              alt="StepWay Building"
              className="w-full h-[550px] rounded-3xl shadow-2xl object-cover"
            />
          </div>

          {/* Right Content */}
          <div>

            <p className="text-blue-600 font-semibold uppercase tracking-[4px] text-sm">
              About StepWay
            </p>

            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              Trusted Elevator Solutions
            </h2>

            <p className="mt-6 text-slate-600 text-lg leading-8">
              StepWay Electricals & Elevator provides installation,
              modernization and maintenance services for a wide range
              of lift systems with a focus on quality, safety and
              customer satisfaction.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-5 mt-10">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition"
                >
                  <div className="text-blue-600 mb-4">
                    {item.icon}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-sm mt-2 leading-6">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">

              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition"
              >
                Contact Us
              </Link>

              <Link
                to="/products"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition"
              >
                View Products
              </Link>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}