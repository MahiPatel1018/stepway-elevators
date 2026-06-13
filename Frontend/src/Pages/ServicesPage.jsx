import { Helmet } from "react-helmet-async";
import Services from "../components/Services";
import { Link } from "react-router-dom";

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>
          Elevator Services | StepWay Electricals & Elevators Ahmedabad
        </title>

        <meta
          name="description"
          content="StepWay Electricals & Elevators provides elevator installation, maintenance, modernization, repair services, AMC support and complete lift solutions in Ahmedabad."
        />

        <meta
          name="keywords"
          content="elevator services, lift maintenance, elevator installation, AMC services, lift repair, elevator modernization, Ahmedabad"
        />
      </Helmet>

      <div className="bg-slate-900 text-white py-24 text-center">
        <h1 className="text-5xl font-bold">
          Our Services
        </h1>

        <p className="mt-4 text-slate-300">
          Professional Elevator Solutions
        </p>
      </div>

      <Services />

      {/* SEO Service Pages */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Lift Solutions in Ahmedabad
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            to="/home-elevator-ahmedabad"
            className="p-4 border rounded-lg hover:bg-gray-100"
          >
            Home Elevator
          </Link>

          <Link
            to="/passenger-lift-ahmedabad"
            className="p-4 border rounded-lg hover:bg-gray-100"
          >
            Passenger Lift
          </Link>

          <Link
            to="/hospital-lift-ahmedabad"
            className="p-4 border rounded-lg hover:bg-gray-100"
          >
            Hospital Lift
          </Link>

          <Link
            to="/freight-lift-ahmedabad"
            className="p-4 border rounded-lg hover:bg-gray-100"
          >
            Freight Lift
          </Link>

          <Link
            to="/capsule-lift-ahmedabad"
            className="p-4 border rounded-lg hover:bg-gray-100"
          >
            Capsule Lift
          </Link>

          <Link
            to="/car-lift-ahmedabad"
            className="p-4 border rounded-lg hover:bg-gray-100"
          >
            Car Lift
          </Link>

          <Link
            to="/hydraulic-lift-ahmedabad"
            className="p-4 border rounded-lg hover:bg-gray-100"
          >
            Hydraulic Lift
          </Link>

          <Link
            to="/mrl-lift-ahmedabad"
            className="p-4 border rounded-lg hover:bg-gray-100"
          >
            MRL Lift
          </Link>
        </div>
      </div>
    </>
  );
}