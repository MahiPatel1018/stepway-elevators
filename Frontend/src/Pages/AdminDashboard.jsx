import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  LayoutDashboard,
  Package,
  Mail,
  LogOut,
  Calendar,
} from "lucide-react";

function AdminDashboard() {
  const [contacts, setContacts] = useState([]);
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchContacts();
    fetchProducts();
  }, []);

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
        "http://localhost:5000/api/products"
      );

      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/admin-login");
  };

  const todayInquiries = contacts.filter(
    (item) =>
      new Date(item.created_at).toDateString() ===
      new Date().toDateString()
  ).length;

  const totalCategories = [
  ...new Set(products.map((p) => p.category))
].length; 

 const chartData = [
  {
    name: "Products",
    count: products.length,
  },
  {
    name: "Inquiries",
    count: contacts.length,
  },
  {
    name: "Categories",
    count: totalCategories,
  },
  {
    name: "Today",
    count: todayInquiries,
  },
];

  return (
    <div className="min-h-screen bg-slate-100 flex">
        <AdminSidebar />

      {/* Main */}
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-slate-800">
            Dashboard Overview
          </h2>

          <p className="text-gray-500 mt-2">
            Welcome back, Admin 👋
          </p>
        </div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">

  {/* Products */}
  <div className="bg-white rounded-3xl shadow-lg p-6">
    <Package
      className="text-green-600 mb-3"
      size={32}
    />
    <h3 className="text-gray-500">
      Total Products
    </h3>
    <p className="text-4xl font-bold mt-2">
      {products.length}
    </p>
  </div>

  {/* Inquiries */}
  <div className="bg-white rounded-3xl shadow-lg p-6">
    <Mail
      className="text-blue-600 mb-3"
      size={32}
    />
    <h3 className="text-gray-500">
      Total Inquiries
    </h3>
    <p className="text-4xl font-bold mt-2">
      {contacts.length}
    </p>
  </div>

  {/* Today */}
  <div className="bg-white rounded-3xl shadow-lg p-6">
    <Calendar
      className="text-purple-600 mb-3"
      size={32}
    />
    <h3 className="text-gray-500">
      Today's Inquiries
    </h3>
    <p className="text-4xl font-bold mt-2">
      {todayInquiries}
    </p>
  </div>

  {/* Categories */}
  <div className="bg-white rounded-3xl shadow-lg p-6">
    <Package
      className="text-pink-600 mb-3"
      size={32}
    />
    <h3 className="text-gray-500">
      Categories
    </h3>
    <p className="text-4xl font-bold mt-2">
      {totalCategories}
    </p>
  </div>

  {/* Status */}
  <div className="bg-white rounded-3xl shadow-lg p-6">
    <LayoutDashboard
      className="text-orange-600 mb-3"
      size={32}
    />
    <h3 className="text-gray-500">
      System Status
    </h3>
    <p className="text-2xl font-bold text-green-600 mt-2">
      Active
    </p>
  </div>

</div>

<h3 className="text-2xl font-bold mb-6">
  Analytics Overview
</h3>

<div className="bg-white rounded-3xl shadow-lg p-6 mt-6">
  <h3 className="text-2xl font-bold mb-6">
    Recent Products
  </h3>

  <table className="w-full">
    <thead>
      <tr className="border-b">
        <th className="text-left p-3">Name</th>
        <th className="text-left p-3">Category</th>
      </tr>
    </thead>

    <tbody>
      {products.slice(0, 5).map((item) => (
        <tr key={item.id} className="border-b">
          <td className="p-3">{item.name}</td>
          <td className="p-3">{item.category}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

      <div className="mt-6">
     <ResponsiveContainer width="100%" height={200}>
    <BarChart data={chartData}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="count" fill="#2563eb" />
    </BarChart>
  </ResponsiveContainer>

</div>

        {/* Recent Inquiries */}
        <div className="bg-white rounded-3xl shadow-lg p-6 mt-6">
          <h3 className="text-2xl font-bold mb-6">
            Recent Inquiries
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3">
                    Name
                  </th>
                  <th className="text-left p-3">
                    Email
                  </th>
                  <th className="text-left p-3">
                    Subject
                  </th>
                </tr>
              </thead>

              <tbody>
                {contacts
                  .slice(0, 5)
                  .map((item) => (
                    <tr
                      key={item.id}
                      className="border-b"
                    >
                      <td className="p-3">
                        {item.name}
                      </td>
                      <td className="p-3">
                        {item.email}
                      </td>
                      <td className="p-3">
                        {item.subject}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;