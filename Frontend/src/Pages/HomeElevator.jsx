import { Helmet } from "react-helmet-async";
import Contact from "../components/Contact";

export default function HomeElevator() {
  return (
    <>
      <Helmet>
        <title>Home Elevator in Ahmedabad | StepWay Elevators</title>
        <meta
          name="description"
          content="Home elevator installation, AMC and maintenance services in Ahmedabad."
        />
      </Helmet>

      <div className="bg-slate-900 text-white py-24 text-center">
        <h1 className="text-5xl font-bold">
          Home Elevator in Ahmedabad
        </h1>

        <p className="mt-4 text-slate-300">
          Premium Home Lift Installation & Maintenance Services
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-4">
          Home Elevator Solutions
        </h2>

        <p>
          StepWay Electricals & Elevators provides home elevator installation,
          maintenance, modernization and AMC services in Ahmedabad.
        </p>
      </div>

      <Contact />
    </>
  );
}