import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | StepWay Elevators</title>
      </Helmet>

      <div className="min-h-[70vh] flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-8xl font-bold text-blue-600">
            404
          </h1>

          <h2 className="text-3xl font-bold mt-4">
            Page Not Found
          </h2>

          <p className="text-slate-600 mt-4">
            The page you are looking for doesn't exist.
          </p>

          <Link
            to="/"
            className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold"
          >
            Go Home
          </Link>
        </div>
      </div>
    </>
  );
}