import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";

function Admin() {
  const [contacts, setContacts] = useState([]);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
  fetchContacts();
  fetchProducts();
}, []);

function Layout() {
  const location = useLocation();

  const isAdminPage =
    location.pathname.startsWith("/admin") ||
    location.pathname === "/product-admin" ||
    location.pathname === "/inquiry-admin";

  return (
    <>
      {!isAdminPage && <Navbar />}

      <Routes>
        {/* routes */}
      </Routes>

      {!isAdminPage && <Footer />}
      {!isAdminPage && <WhatsAppButton />}
    </>
  );
}

  const fetchContacts = async () => {
    try {
      const res = await axios.get(
       "https://stepway-backend.vercel.app/api/contact"
      );

      setContacts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

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

  const logout = () => {
    localStorage.removeItem("admin");
    toast.success("Logged out successfully");
    navigate("/admin-login");
  };

  const deleteInquiry = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this inquiry?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `https://stepway-backend.vercel.app/api/contact/${id}`
      );

      toast.success("Inquiry deleted successfully");

      fetchContacts();
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete inquiry");
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">

      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-4xl font-bold">
            Contact Inquiries
          </h1>

          <p className="text-lg font-semibold mt-2">
            Total Inquiries: {contacts.length}
          </p>
        </div>

        <button
          onClick={logout}
          className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded"
        >
          Logout
        </button>
      </div>


<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
  <div className="bg-white shadow-lg rounded-2xl p-6 border-l-4 border-blue-500">
    <h3 className="text-gray-500 text-sm font-medium">
      Total Inquiries
    </h3>

    <p className="text-4xl font-bold text-blue-600 mt-2">
      {contacts.length}
    </p>
  </div>

  <div className="bg-white shadow-lg rounded-2xl p-6 border-l-4 border-green-500">
    <h3 className="text-gray-500 text-sm font-medium">
      Total Products
    </h3>

    <p className="text-4xl font-bold text-green-600 mt-2">
      {products.length}
    </p>
  </div>

  <div className="bg-white shadow-lg rounded-2xl p-6 border-l-4 border-purple-500">
    <h3 className="text-gray-500 text-sm font-medium">
      Admin Status
    </h3>

    <p className="text-2xl font-bold text-purple-600 mt-2">
      Active
    </p>
  </div>
</div>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-3 border">ID</th>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Phone</th>
              <th className="p-3 border">Subject</th>
              <th className="p-3 border">Message</th>
              <th className="p-3 border">Date</th>
              <th className="p-3 border">Action</th>
            </tr>
          </thead>

          <tbody>
            {contacts.length === 0 ? (
              <tr>
                <td
                  colSpan="8"
                  className="text-center p-6 text-gray-500"
                >
                  No inquiries found
                </td>
              </tr>
            ) : (
              contacts.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-50 transition"
                >
                  <td className="p-3 border">{item.id}</td>
                  <td className="p-3 border">{item.name}</td>
                  <td className="p-3 border">{item.email}</td>
                  <td className="p-3 border">{item.phone}</td>
                  <td className="p-3 border">{item.subject}</td>
                  <td className="p-3 border">{item.message}</td>
                  <td className="p-3 border">
                    {new Date(item.created_at).toLocaleString()}
                  </td>
                  <td className="p-3 border">
                    <button
                      onClick={() => deleteInquiry(item.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>

        </table>
      </div>
    </div>
  );
}


export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default Admin;