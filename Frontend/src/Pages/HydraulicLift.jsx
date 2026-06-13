import { Helmet } from "react-helmet-async";
import Contact from "../components/Contact";

export default function HydraulicLift() {
  return (
    <>
      <Helmet>
        <title>Hydraulic Lift in Ahmedabad | StepWay Elevators</title>

        <meta
          name="description"
          content="Hydraulic lift installation, maintenance and modernization services in Ahmedabad for residential, commercial and industrial applications."
        />

        <meta
          name="keywords"
          content="hydraulic lift Ahmedabad, hydraulic elevator Ahmedabad, industrial lift Ahmedabad, commercial lift Ahmedabad"
        />
      </Helmet>

      <div className="bg-slate-900 text-white py-24 text-center">
        <h1 className="text-5xl font-bold">
          Hydraulic Lift in Ahmedabad
        </h1>

        <p className="mt-4 text-slate-300">
          Reliable & Efficient Hydraulic Elevator Solutions
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-6">
          Hydraulic Lift Solutions
        </h2>

        <p className="text-lg text-gray-700 mb-6">
          StepWay Electricals & Elevators manufactures and installs
          high-performance hydraulic lifts known for smooth movement,
          reliability and cost-effective operation. Our hydraulic elevators
          are ideal for residential, commercial and industrial applications
          across Ahmedabad.
        </p>

        <h3 className="text-2xl font-semibold mb-4">
          Advantages
        </h3>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Smooth & Quiet Performance</li>
          <li>Strong Load Capacity</li>
          <li>Energy Efficient Operation</li>
          <li>Long Service Life</li>
          <li>Low Maintenance Cost</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-8 mb-4">
          Applications
        </h3>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Residential Buildings</li>
          <li>Commercial Complexes</li>
          <li>Industrial Facilities</li>
          <li>Warehouses</li>
          <li>Shopping Centers</li>
        </ul>
      </div>

      <Contact />
    </>
  );
}