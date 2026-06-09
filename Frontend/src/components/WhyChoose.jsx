import {
  ShieldCheck,
  Clock3,
  Cog,
  Users,
  BadgeCheck,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

function WhyChoose() {
  const features = [
    {
      icon: <BadgeCheck size={40} />,
      title: "ISO Certified",
      desc: "Industry-standard quality and safety compliance.",
    },
    {
      icon: <Clock3 size={40} />,
      title: "Customized Solutions",
      desc: "Elevator systems tailored to different building requirements.",
    },
    {
      icon: <Cog size={40} />,
      title: "Modern Technology",
      desc: "Advanced elevator systems with smart and efficient features.",
    },
    {
      icon: <Users size={40} />,
      title: "Experienced Team",
      desc: "Skilled engineers with extensive industry expertise.",
    },
    {
      icon: <ShieldCheck size={40} />,
      title: "Safety Standards",
      desc: "Reliable systems designed for maximum passenger safety.",
    },
    {
      icon: <Zap size={40} />,
      title: "Fast Installation",
      desc: "Efficient project execution with timely delivery.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-blue-600 uppercase tracking-[4px] font-semibold">
            Why Choose StepWay
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
            Trusted Elevator Experts
          </h2>

          <p className="text-slate-600 mt-5 max-w-3xl mx-auto text-lg">
            Delivering safe, reliable and innovative elevator solutions
            with quality workmanship and professional service.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-slate-100 p-8 rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-blue-600 mb-5">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                {item.title}
              </h3>

              <p className="text-slate-600 leading-7">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 bg-slate-900 text-white rounded-3xl p-12 text-center">
          <h3 className="text-4xl font-bold mb-4">
            Need Professional Elevator Services?
          </h3>

          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            From installation to maintenance and modernization,
            StepWay provides complete elevator solutions for every project.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition"
          >
            Get Free Quote
          </Link>
        </div>

      </div>
    </section>
  );
}

export default WhyChoose;