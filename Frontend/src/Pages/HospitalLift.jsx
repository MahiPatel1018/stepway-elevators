import { Helmet } from "react-helmet-async";
import Contact from "../components/Contact";

export default function HospitalLift() {
  return (
    <>
      <Helmet>
        <title>Hospital Lift in Ahmedabad | StepWay Elevators</title>

        <meta
          name="description"
          content="Hospital lift installation, maintenance and modernization services in Ahmedabad. Safe and reliable lifts for hospitals, clinics and healthcare centers."
        />

        <meta
          name="keywords"
          content="hospital lift Ahmedabad, stretcher lift Ahmedabad, medical elevator Ahmedabad, hospital elevator installation"
        />
      </Helmet>

      <div className="bg-slate-900 text-white py-24 text-center">
        <h1 className="text-5xl font-bold">
          Hospital Lift in Ahmedabad
        </h1>

        <p className="mt-4 text-slate-300">
          Safe & Reliable Hospital Elevator Solutions
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-6">
          Professional Hospital Lift Solutions
        </h2>

        <p className="text-lg text-gray-700 mb-6">
          StepWay Electricals & Elevators supplies hospital lifts designed
          for patient transport, stretchers and medical equipment. Our
          elevators provide smooth, safe and reliable performance for
          healthcare facilities across Ahmedabad.
        </p>

        <h3 className="text-2xl font-semibold mb-4">
          Applications
        </h3>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Hospitals</li>
          <li>Clinics</li>
          <li>Healthcare Centers</li>
          <li>Nursing Homes</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-8 mb-4">
          Features
        </h3>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Stretcher Compatible Design</li>
          <li>Smooth & Silent Operation</li>
          <li>Advanced Safety Systems</li>
          <li>Low Maintenance Cost</li>
          <li>Reliable Performance</li>
        </ul>
      </div>

      <Contact />
    </>
  );
}