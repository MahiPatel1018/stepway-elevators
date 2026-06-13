import { Helmet } from "react-helmet-async";
import Contact from "../components/Contact";

export default function CarLift() {
  return (
    <>
      <Helmet>
        <title>Car Lift in Ahmedabad | StepWay Elevators</title>

        <meta
          name="description"
          content="Car lift installation, maintenance and modernization services in Ahmedabad for residential buildings, commercial complexes and parking facilities."
        />

        <meta
          name="keywords"
          content="car lift Ahmedabad, vehicle lift Ahmedabad, parking lift Ahmedabad, car elevator Ahmedabad"
        />
      </Helmet>

      <div className="bg-slate-900 text-white py-24 text-center">
        <h1 className="text-5xl font-bold">
          Car Lift in Ahmedabad
        </h1>

        <p className="mt-4 text-slate-300">
          Advanced Vehicle Lift Solutions
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-6">
          Professional Car Lift Solutions
        </h2>

        <p className="text-lg text-gray-700 mb-6">
          StepWay Electricals & Elevators provides advanced car lift systems
          for residential buildings, commercial complexes and multi-level
          parking facilities. Our lifts are designed to maximize parking
          efficiency while ensuring safety and reliability.
        </p>

        <h3 className="text-2xl font-semibold mb-4">
          Features
        </h3>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Space Saving Design</li>
          <li>Heavy Vehicle Support</li>
          <li>Safe & Smooth Operation</li>
          <li>Low Maintenance Cost</li>
          <li>High Durability</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-8 mb-4">
          Applications
        </h3>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Residential Buildings</li>
          <li>Commercial Complexes</li>
          <li>Parking Facilities</li>
          <li>Car Showrooms</li>
          <li>Corporate Buildings</li>
        </ul>
      </div>

      <Contact />
    </>
  );
}