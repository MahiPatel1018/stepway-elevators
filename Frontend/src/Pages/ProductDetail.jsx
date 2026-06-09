import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function ProductDetail() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products/${slug}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [slug]);

  if (!product) {
    return <div className="text-center py-20">Loading...</div>;
  }

  return (
  <>
    <Helmet>
      <title>
        {product.name} | StepWay Elevators
      </title>

      <meta
        name="description"
        content={
          product.description ||
          `${product.name} by StepWay Elevators`
        }
      />

      <meta
        name="keywords"
        content={`${product.name}, elevators, lifts, StepWay Elevators`}
      />
    </Helmet>

      {/* Main Product Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="grid lg:grid-cols-[1.05fr_1fr] gap-16 items-start">

            {/* Image */}
            <div>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
              />
            </div>

            {/* Details */}
            <div>
              <p className="text-blue-600 font-semibold uppercase tracking-[4px] text-sm">
                {product.category}
              </p>
              <h1 className="text-5xl font-bold text-blue-700 mt-3">
                {product.name}
              </h1>

              <p className="text-xl text-slate-600 mt-4">
                {product.tagline}
              </p>

              <p className="text-slate-600 leading-8 mt-6">
                {product.description}
              </p>

             <div className="grid grid-cols-3 gap-4 mt-10">
  <div className="bg-blue-50 p-5 rounded-2xl text-center">
    <h3 className="text-2xl font-bold text-blue-600">ISO</h3>
    <p className="text-sm text-slate-600">Certified</p>
  </div>

  <div className="bg-green-50 p-5 rounded-2xl text-center">
    <h3 className="text-2xl font-bold text-green-600">24/7</h3>
    <p className="text-sm text-slate-600">Support</p>
  </div>

  <div className="bg-orange-50 p-5 rounded-2xl text-center">
    <h3 className="text-2xl font-bold text-orange-600">Fast</h3>
    <p className="text-sm text-slate-600">Installation</p>
  </div>
</div>            </div>

          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-blue-50">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-blue-700 mb-10">
            Capabilities
          </h2>

          <ul className="space-y-5 text-lg text-slate-700 leading-8">
            {product.capabilities?.split(",").map((item, index) => (
              <li
                key={index}
                className="bg-white p-5 rounded-2xl shadow-sm"
              >
                ✓ {item.trim()}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Applications */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-blue-700 mb-10">
            Applications
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            {product.applications?.split(",").map((item, index) => (
              <div
                key={index}
                className="bg-slate-50 p-5 rounded-2xl shadow-sm"
              >
                • {item.trim()}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="bg-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-blue-700 mb-10">
            Specifications
          </h2>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
            <table className="w-full text-left">
              <tbody>
                {product.specifications?.split(",").map((item, index) => {
                  const parts = item.split(":");

                  return (
                    <tr
                      key={index}
                      className="border-b border-slate-100"
                    >
                      <td className="px-6 py-5 font-semibold text-slate-900 text-lg w-1/3">
                        {parts[0]}
                      </td>

                      <td className="px-6 py-5 text-slate-700 text-lg">
                        {parts[1]}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Gallery */}
<section className="bg-blue-50">
  <div className="max-w-7xl mx-auto px-6 py-20">

    <div className="text-center mb-12">
      <span className="text-blue-600 uppercase tracking-[4px] font-semibold">
        Gallery
      </span>

      <h2 className="text-4xl font-bold text-slate-900 mt-3">
        Product Gallery
      </h2>

      <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
        Explore different views and design perspectives of our
        {` ${product.name}`} elevator solution.
      </p>
    </div>

    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
      {product.gallery?.split(",").map((img, index) => (
        <div
          key={index}
          className="bg-white p-2 rounded-3xl shadow-md hover:shadow-xl transition duration-300"
        >
          <img
            src={img.trim()}
            alt={`${product.name} ${index + 1}`}
            className="w-full h-56 object-cover rounded-2xl hover:scale-105 transition duration-300"
          />
        </div>
      ))}
    </div>

  </div>
</section>

{/* Action Buttons */}
{/* Action Buttons */}
<div className="max-w-7xl mx-auto px-6 pt-16 pb-20">
  <div className="flex flex-wrap justify-center gap-5">

    <Link
      to="/contact"
      className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-semibold shadow-lg transition duration-300"
    >
      Get Quote
    </Link>

    <Link
      to="/products"
      className="bg-white border-2 border-slate-300 hover:bg-slate-100 text-slate-800 px-10 py-4 rounded-xl font-semibold shadow-sm transition duration-300"
    >
      Back to Products
    </Link>

  </div>
</div>
      {/* Inquiry Form */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-10">
            <h2 className="text-3xl font-bold text-slate-900 text-center">
              For Inquiry
            </h2>

            <form className="mt-8 grid md:grid-cols-2 gap-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-slate-300 px-4 py-3"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-xl border border-slate-300 px-4 py-3"
              />

              <input
                type="text"
                placeholder="Your Phone"
                className="w-full rounded-xl border border-slate-300 px-4 py-3"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-xl border border-slate-300 px-4 py-3"
              />

              <div className="md:col-span-2">
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3"
                ></textarea>
              </div>

              <div className="md:col-span-2 text-center">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-semibold shadow-lg transition"
                >
                  Submit Inquiry
                </button>
              </div>

            </form>
          </div>
        </div>
      </section>
    </>
  );
}