export default function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Patel",
      role: "Residential Project",
      text: "Excellent service and timely installation. The lift quality is outstanding and the team was highly professional.",
    },
    {
      name: "Amit Shah",
      role: "Commercial Building",
      text: "StepWay delivered exactly what was promised. Smooth installation, great support, and premium quality elevators.",
    },
    {
      name: "Dr. Mehta",
      role: "Hospital Project",
      text: "Their stretcher lift solution was reliable and perfectly suited for our hospital requirements.",
    },
  ];

  return (
    <section className="py-24 bg-sky-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-blue-600 uppercase tracking-[4px] font-semibold text-sm">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
            What Our Clients Say
          </h2>
          <p className="text-slate-600 mt-5 max-w-3xl mx-auto text-lg">
            Trusted by residential, commercial, and healthcare clients for reliable elevator solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-md border border-slate-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-blue-600 text-xl mb-5">★★★★★</div>

              <p className="text-slate-600 leading-8 text-lg">
                “{item.text}”
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-slate-900">
                  {item.name}
                </h3>
                <p className="text-slate-500 mt-1">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}