import { Helmet } from "react-helmet-async";
import Contact from "../components/Contact";

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>
          Contact Us | StepWay Elevators Ahmedabad
        </title>

        <meta
          name="description"
          content="Contact StepWay Elevators for passenger lifts, hospital lifts, freight lifts, installation, maintenance and elevator solutions in Ahmedabad."
        />

        <meta
          name="keywords"
          content="contact StepWay Elevators, elevator company Ahmedabad, lift installation, lift maintenance, passenger lifts, freight lifts"
        />
      </Helmet>

      <div className="bg-slate-900 text-white py-24 text-center">
        <h1 className="text-5xl font-bold">
          Contact Us
        </h1>

        <p className="mt-4 text-slate-300">
          Get in touch with our elevator experts
        </p>
      </div>

      <Contact />
    </>
  );
}