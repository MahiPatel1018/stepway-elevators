import { Helmet } from "react-helmet-async";
import Contact from "../components/Contact";

export default function FreightLift() {
  return (
    <>
      <Helmet>
        <title>Goods & Freight Lift in Ahmedabad | StepWay Elevators</title>

        <meta
          name="description"
          content="Heavy-duty goods and freight lift installation, maintenance and modernization services in Ahmedabad for factories, warehouses and industries."
        />

        <meta
          name="keywords"
          content="freight lift Ahmedabad, goods lift Ahmedabad, industrial lift Ahmedabad, warehouse lift Ahmedabad"
        />
      </Helmet>

      <div className="bg-slate-900 text-white py-24 text-center">
        <h1 className="text-5xl font-bold">
          Goods & Freight Lift in Ahmedabad
        </h1>

        <p className="mt-4 text-slate-300">
          Heavy-Duty Industrial Lift Solutions
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-6">
          Freight Lift Solutions
        </h2>

        <p className="text-lg text-gray-700 mb-6">
          StepWay Electricals & Elevators provides high-quality freight and
          goods lifts for factories, warehouses, industrial units and
          commercial establishments. Our lifts are engineered for durability,
          safety and efficient material handling.
        </p>

        <h3 className="text-2xl font-semibold mb-4">
          Benefits
        </h3>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>High Load Capacity</li>
          <li>Durable Construction</li>
          <li>Reliable Performance</li>
          <li>Low Maintenance Cost</li>
          <li>Advanced Safety Features</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-8 mb-4">
          Applications
        </h3>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Factories</li>
          <li>Warehouses</li>
          <li>Industrial Plants</li>
          <li>Manufacturing Units</li>
          <li>Commercial Buildings</li>
        </ul>
      </div>

      <Contact />
    </>
  );
}