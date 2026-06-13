import { Helmet } from "react-helmet-async";
import Contact from "../components/Contact";

export default function PassengerLift() {
  return (
    <>
      <Helmet>
        <title>Passenger Lift in Ahmedabad | StepWay Elevators</title>

        <meta
          name="description"
          content="Passenger lift installation, maintenance and modernization services in Ahmedabad for apartments, offices, malls and commercial buildings."
        />

        <meta
          name="keywords"
          content="passenger lift Ahmedabad, elevator installation Ahmedabad, commercial lift Ahmedabad, residential lift Ahmedabad"
        />
      </Helmet>

      <div className="bg-slate-900 text-white py-24 text-center">
        <h1 className="text-5xl font-bold">
          Passenger Lift in Ahmedabad
        </h1>

        <p className="mt-4 text-slate-300">
          Safe, Efficient & Modern Passenger Elevators
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-6">
          Passenger Lift Solutions
        </h2>

        <p className="text-lg text-gray-700 mb-6">
          StepWay Electricals & Elevators provides passenger lift installation,
          maintenance and modernization services for residential apartments,
          commercial complexes, offices and shopping malls across Ahmedabad.
        </p>

        <h3 className="text-2xl font-semibold mb-4">
          Features
        </h3>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Smooth Operation</li>
          <li>Energy Efficient Technology</li>
          <li>Advanced Safety Systems</li>
          <li>Modern Cabin Design</li>
          <li>Low Maintenance Cost</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-8 mb-4">
          Applications
        </h3>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Residential Apartments</li>
          <li>Office Buildings</li>
          <li>Shopping Malls</li>
          <li>Commercial Complexes</li>
          <li>Hotels</li>
        </ul>
      </div>

      <Contact />
    </>
  );
}