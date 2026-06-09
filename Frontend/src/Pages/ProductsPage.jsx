import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/products"
      );

      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Helmet>
        <title>
          Products | StepWay Elevators Ahmedabad
        </title>

        <meta
          name="description"
          content="Explore StepWay Elevators products including passenger lifts, hospital lifts, freight lifts, capsule lifts, home elevators and custom lift solutions."
        />

        <meta
          name="keywords"
          content="passenger lift, hospital lift, freight lift, capsule lift, home elevator, lift solutions Ahmedabad, StepWay Elevators"
        />
      </Helmet>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">
            Lift Solutions We Offer
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-bold">
                    {product.name}
                  </h3>

                  <p className="text-slate-600 mt-3">
                    {product.description}
                  </p>

                  <Link
                    to={`/products/${product.slug}`}
                    className="inline-block mt-5 text-blue-600 font-semibold"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}