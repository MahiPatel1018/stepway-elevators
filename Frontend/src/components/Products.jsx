import { Link } from "react-router-dom";

const lifts = [
  {
    name: "Passenger Lift",
    slug: "passenger-lift",
    image: "/passengerlift.png",
    desc: "Safe and efficient passenger transportation for residential and commercial buildings.",
  },
  {
    name: "Stretcher Lift",
    slug: "stretcher-lift",
    image: "/Stretcherlift.png",
    desc: "Designed for hospitals and healthcare facilities with spacious cabins.",
  },
  {
    name: "Home Lift",
    slug: "home-lift",
    image: "/homelift.png",
    desc: "Luxury and convenience for villas and private residences.",
  },
  {
    name: "Freight Lift",
    slug: "freight-lift",
    image: "/freightlift.png",
    desc: "Heavy-duty lift solutions for industries and warehouses.",
  },
  {
    name: "Capsule Lift",
    slug: "capsule-lift",
    image: "/capsulelift.png",
    desc: "Elegant glass lifts enhancing architectural beauty.",
  },
  {
    name: "Car Lift",
    slug: "car-lift",
    image: "/carlift.png",
    desc: "Advanced vehicle transportation systems for parking structures.",
  },
  {
    name: "MRL Lift",
    slug: "mrl-lift",
    image: "/mrllift.png",
    desc: "Machine Room Less elevators with energy-efficient technology.",
  },
  {
    name: "Hydraulic Lift",
    slug: "hydraulic-lift",
    image: "/hydrauliclift.png",
    desc: "Reliable lifting systems for low-rise buildings and industries.",
  },
];

export default function Products() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold uppercase tracking-[3px]">
            Our Products
          </span>

          <h2 className="text-5xl font-bold text-slate-900 mt-4">
            Lift Solutions We Offer
          </h2>

          <p className="text-slate-600 mt-5 max-w-3xl mx-auto text-lg">
            Premium elevator systems designed for safety, performance and
            long-term reliability.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {lifts.map((lift) => (
            <div
              key={lift.slug}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="overflow-hidden">
                <img
                  src={lift.image}
                  alt={lift.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900">
                  {lift.name}
                </h3>

                <p className="text-slate-600 mt-3 text-sm leading-6">
                  {lift.desc}
                </p>

                <Link
                  to={`/products/${lift.slug}`}
                  className="inline-block mt-5 text-blue-600 font-semibold hover:text-blue-800"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}