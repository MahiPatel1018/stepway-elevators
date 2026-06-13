import { Helmet } from "react-helmet-async";
import Contact from "../components/Contact";

export default function CapsuleLift() {
  return (
    <>
      <Helmet>
        <title>Capsule Lift in Ahmedabad | StepWay Elevators</title>

        <meta
          name="description"
          content="Luxury capsule lift installation, maintenance and modernization services in Ahmedabad for hotels, malls, showrooms and premium commercial buildings."
        />

        <meta
          name="keywords"
          content="capsule lift Ahmedabad, glass elevator Ahmedabad, luxury lift Ahmedabad, panoramic elevator Ahmedabad"
        />
      </Helmet>

      <div className="bg-slate-900 text-white py-24 text-center">
        <h1 className="text-5xl font-bold">
          Capsule Lift in Ahmedabad
        </h1>

        <p className="mt-4 text-slate-300">
          Luxury Glass Elevator Solutions
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-6">
          Premium Capsule Lift Solutions
        </h2>

        <p className="text-lg text-gray-700 mb-6">
          StepWay Electricals & Elevators provides elegant capsule lifts
          designed to enhance the appearance of hotels, shopping malls,
          showrooms and premium commercial buildings. Our glass elevators
          combine luxury, safety and modern technology.
        </p>

        <h3 className="text-2xl font-semibold mb-4">
          Applications
        </h3>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Hotels</li>
          <li>Shopping Malls</li>
          <li>Showrooms</li>
          <li>Commercial Buildings</li>
          <li>Corporate Offices</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-8 mb-4">
          Features
        </h3>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Elegant Glass Design</li>
          <li>Panoramic View</li>
          <li>Advanced Safety Systems</li>
          <li>Smooth & Silent Operation</li>
          <li>Modern Aesthetic Appeal</li>
        </ul>
      </div>

      <Contact />
    </>
  );
}