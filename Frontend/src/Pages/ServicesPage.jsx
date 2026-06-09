import { Helmet } from "react-helmet-async";
import Services from "../components/Services";

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>
          Elevator Services | StepWay Elevators Ahmedabad
        </title>

        <meta
          name="description"
          content="StepWay Elevators provides elevator installation, maintenance, modernization, repair services, AMC support and complete lift solutions in Ahmedabad."
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
    </>
  );
}