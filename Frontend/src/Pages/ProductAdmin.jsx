import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import AdminSidebar from "../components/AdminSidebar";

function ProductAdmin() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const [search, setSearch] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    category: "",
    image: "",
    description: "",
    tagline: "",
    capabilities: "",
    applications: "",
    specifications: "",
    gallery: "",
  });

  const handleEdit = (product) => {
    setEditingId(selectedProduct.id);
    setShowForm(true);

    setFormData({
      name: product.name || "",
      slug: product.slug || "",
      category: product.category || "",
      image: product.image || "",
      description: product.description || "",
      tagline: product.tagline || "",
      capabilities: product.capabilities || "",
      applications: product.applications || "",
      specifications: product.specifications || "",
      gallery: product.gallery || "",
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        "https://stepway-backend.vercel.app/api/products"
      );

      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
  let res;

  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  if (editingId) {
    res = await axios.put(
      `https://stepway-backend.vercel.app/api/products/${editingId}`,
      formData,
      config
    );
  } else {
    res = await axios.post(
      "https://stepway-backend.vercel.app/api/products",
      formData,
      config
    );
  }

  toast.success(res.data.message);

  setEditingId(null);

  setFormData({
    name: "",
    slug: "",
    category: "",
    image: "",
    description: "",
    tagline: "",
    capabilities: "",
    applications: "",
    specifications: "",
    gallery: "",
  });

} catch (error) {
  console.log(error);
  toast.error("Operation failed");
}

};
 const deleteProduct = async (id) => {
  if (!window.confirm("Delete product?")) return;

  try {
    await axios.delete(
      `https://stepway-backend.vercel.app/api/products/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    toast.success("Product deleted successfully");
    fetchProducts();
  } catch (error) {
    console.log(error);
    toast.error("Delete failed");
  }
}; // <-- THIS IS REQUIRED

 return (
  <div className="flex min-h-screen bg-slate-100">

    <AdminSidebar />

    <div className="flex-1 p-6">

     
      <h1 className="text-4xl font-bold mb-8">
        Product Admin
      </h1>

<div className="grid md:grid-cols-3 gap-6 mb-8">
  <div className="bg-white rounded-2xl shadow-lg p-6">
    <h3 className="text-gray-500">Total Products</h3>
    <p className="text-4xl font-bold text-blue-600">
      {products.length}
    </p>
  </div>

  <div className="bg-white rounded-2xl shadow-lg p-6">
    <h3 className="text-gray-500">Categories</h3>
    <p className="text-4xl font-bold text-green-600">
      {[...new Set(products.map(p => p.category))].length}
    </p>
  </div>

  <div className="bg-white rounded-2xl shadow-lg p-6">
    <h3 className="text-gray-500">Status</h3>
    <p className="text-2xl font-bold text-green-600">
      Active
    </p>
  </div>
</div>

<input
  type="text"
  placeholder="Search Product..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="w-full border p-3 rounded mb-6"
/>

<h2 className="text-2xl font-bold mb-4">
    Select Product
  </h2>

 <select
  className="w-full border p-3 rounded-lg mb-6"
  onChange={(e) => {
    const product = products.find(
      (p) => p.id === Number(e.target.value)
    );

    setSelectedProduct(product);
  }}
>
  <option value="">
    Select Lift
  </option>

  {products
    .filter((item) =>
      item.name
        .toLowerCase()
        .includes(search.toLowerCase())
    )
    .map((item) => (
      <option
        key={item.id}
        value={item.id}
      >
        {item.name}
      </option>
    ))}
</select>
<div className="bg-white rounded-2xl shadow-lg p-6">


 {selectedProduct && (
  <div className="grid md:grid-cols-2 gap-8 border rounded-2xl p-6">

    {/* Left Side */}
    <div>
      <img
        src={selectedProduct.image}
        alt={selectedProduct.name}
        className="w-full h-80 object-cover rounded-xl"
      />
    </div>

    {/* Right Side */}
    <div>
      <h2 className="text-3xl font-bold mb-2">
        {selectedProduct.name}
      </h2>

      <p className="text-blue-600 font-semibold mb-2">
        {selectedProduct.category}
      </p>

      <p className="text-gray-600 mb-4">
  {selectedProduct.description}
</p>

    <div className="mt-4">
      <h3 className="font-bold text-lg">Capabilities</h3>
      <p>{selectedProduct?.capabilities}</p>
    </div>

    <div className="mt-4">
      <h3 className="font-bold text-lg">Applications</h3>
      <p>{selectedProduct?.applications}</p>
    </div>

    <div className="mt-4">
      <h3 className="font-bold text-lg">Specifications</h3>
      <p>{selectedProduct?.specifications}</p>
    </div>
    
      <div className="flex gap-3 mt-6">
        <button
          onClick={() => handleEdit(selectedProduct)}
          className="bg-yellow-500 text-white px-5 py-2 rounded-lg"
        >
          Edit
        </button>

        <button
  onClick={() => deleteProduct(selectedProduct.id)}
  className="bg-red-500 text-white px-3 py-2 rounded"
>
  Delete
</button>
      </div>
    </div>

  </div>
)}
</div>

  <button
  onClick={() => setShowForm(!showForm)}
  className="bg-blue-600 text-white px-5 py-3 rounded-lg mb-6"
>
  {showForm ? "Close Form" : "Add New Product"}
</button>
    
    {showForm && (
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg p-6 rounded-xl mb-10 space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />

        <input
          type="text"
          name="slug"
          placeholder="Product Slug"
          value={formData.slug}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        {formData.image && (
  <img
    src={formData.image}
    alt="Preview"
    className="w-40 h-40 object-cover rounded border"
  />
)}

        <input
          type="text"
          name="tagline"
          placeholder="Tagline"
          value={formData.tagline}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          rows="4"
          className="w-full border p-3 rounded"
        />

        <textarea
          name="capabilities"
          placeholder="Capabilities (comma separated)"
          value={formData.capabilities}
          onChange={handleChange}
          rows="3"
          className="w-full border p-3 rounded"
        />

        <textarea
          name="applications"
          placeholder="Applications (comma separated)"
          value={formData.applications}
          onChange={handleChange}
          rows="3"
          className="w-full border p-3 rounded"
        />

        <textarea
          name="specifications"
          placeholder="Specifications"
          value={formData.specifications}
          onChange={handleChange}
          rows="3"
          className="w-full border p-3 rounded"
        />

        <textarea
          name="gallery"
          placeholder="Gallery URLs (comma separated)"
          value={formData.gallery}
          onChange={handleChange}
          rows="3"
          className="w-full border p-3 rounded"
        />


        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded"
        >
         {editingId ? "Update Product" : "Add Product"}
        </button>
      </form>
      )}

  </div>
        </div>
 );
}


export default ProductAdmin;