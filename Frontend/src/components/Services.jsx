function Services() {
  const services = [
    {
      title: "Lift Installation",
      description:
        "Professional elevator installation services for residential, commercial and industrial buildings.",
    },
    {
      title: "Maintenance",
      description:
        "Regular maintenance and preventive support to ensure smooth elevator operation.",
    },
    {
      title: "Modernization",
      description:
        "Upgrade old lifts with modern technology, improved safety and energy efficiency.",
    },
    {
      title: "AMC Service",
      description:
        "Annual maintenance contracts with quick response and 24/7 technical support.",
    },
  ];

  return (
    <>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Services Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100"
              >
                <h3 className="text-xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-3 text-slate-600 leading-7">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Why Choose StepWay */}
          <div className="mt-24 bg-slate-50 rounded-3xl p-10">
            <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
              Why Choose StepWay?
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow">
                <h3 className="font-bold text-xl mb-3">
                  Expert Team
                </h3>

                <p className="text-slate-600">
                  Skilled engineers and technicians with years of industry experience.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow">
                <h3 className="font-bold text-xl mb-3">
                  Quality Service
                </h3>

                <p className="text-slate-600">
                  Reliable installation, maintenance and modernization solutions.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow">
                <h3 className="font-bold text-xl mb-3">
                  24/7 Support
                </h3>

                <p className="text-slate-600">
                  Fast response and dedicated support for emergency requirements.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow">
                <h3 className="font-bold text-xl mb-3">
                  Safety First
                </h3>

                <p className="text-slate-600">
                  Strict adherence to safety standards and quality compliance.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 bg-slate-900 text-white rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Need Elevator Services?
            </h2>

            <p className="text-slate-300 max-w-2xl mx-auto mb-8">
              Contact StepWay today for installation, maintenance,
              modernization and AMC services.
            </p>

            <a
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition"
            >
              Get Free Quote
            </a>
          </div>

        </div>
      </section>
    </>
  );
}

export default Services;