import { Helmet } from "react-helmet-async";
import Contact from "../components/Contact";

export default function MRLLift() {
  return (
    <>
      <Helmet>
        <title>MRL Lift in Ahmedabad | StepWay Elevators</title>

        <meta
          name="description"
          content="Machine Room Less (MRL) lift installation, maintenance and modernization services in Ahmedabad. Space-saving, energy-efficient elevator solutions."
        />

        <meta
          name="keywords"
          content="MRL lift Ahmedabad, machine room less lift Ahmedabad, modern elevator Ahmedabad, energy efficient lift Ahmedabad"
        />
      </Helmet>

      <div className="bg-slate-900 text-white py-24 text-center">
        <h1 className="text-5xl font-bold">
          MRL Lift in Ahmedabad
        </h1>

        <p className="mt-4 text-slate-300">
          Modern Machine Room Less Elevator Solutions
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-6">
          MRL Lift Solutions
        </h2>

        <p className="text-lg text-gray-700 mb-6">
          StepWay Electricals & Elevators provides advanced Machine Room Less
          (MRL) lifts designed to save space while delivering excellent
          performance, comfort and energy efficiency. These elevators are ideal
          for residential and commercial buildings where space optimization is
          important.
        </p>

        <h3 className="text-2xl font-semibold mb-4">
          Benefits
        </h3>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Space Saving Design</li>
          <li>Energy Efficient Operation</li>
          <li>Modern Technology</li>
          <li>Low Maintenance Cost</li>
          <li>Smooth & Silent Performance</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-8 mb-4">
          Applications
        </h3>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Residential Apartments</li>
          <li>Commercial Buildings</li>
          <li>Hotels</li>
          <li>Office Complexes</li>
          <li>Shopping Centers</li>
        </ul>
      </div>

      <Contact />
    </>
  );
}