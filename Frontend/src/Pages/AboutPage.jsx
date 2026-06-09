import { Helmet } from "react-helmet-async";

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>
          About Us | StepWay Elevators Ahmedabad
        </title>

        <meta
          name="description"
          content="Learn about StepWay Elevators, a trusted elevator company in Ahmedabad providing passenger lifts, hospital lifts, freight lifts, installation and maintenance services."
        />

        <meta
          name="keywords"
          content="About StepWay Elevators, elevator company Ahmedabad, lift installation, elevator maintenance, passenger lifts, freight lifts"
        />
      </Helmet>

      <div className="py-20">
        <h1 className="text-4xl font-bold text-center">
          About Us
        </h1>
      </div>
    </>
  );
}