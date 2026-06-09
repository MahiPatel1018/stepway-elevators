import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import AdminSidebar from "../components/AdminSidebar";

function InquiryAdmin() {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedMessage, setSelectedMessage] = useState("");
  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/contact"
      );

      setContacts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

 const deleteInquiry = async (id) => {
  if (!window.confirm("Delete inquiry?")) return;

  try {
    await axios.delete(
      `http://localhost:5000/api/contact/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    toast.success("Inquiry deleted");
    fetchContacts();
  } catch (error) {
    console.log(error);
    toast.error("Delete failed");
  }
};

  return (
    <div className="flex min-h-screen bg-slate-100">
      <AdminSidebar />

      <div className="flex-1 p-6">
        <h1 className="text-4xl font-bold mb-6">
          Inquiry Management
        </h1>

        <p className="text-lg font-semibold mb-4">
          Total Inquiries: {contacts.length}
        </p>

  <input
  type="text"
  placeholder="Search inquiries..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="w-full border p-3 rounded mb-6"
/>

        <div className="bg-white rounded-xl shadow-lg overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-3">No.</th>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Phone</th>
                <th className="p-3">Subject</th>
                <th className="p-3">Message</th>
                <th className="p-3">Action</th>
                <th className="p-3">Date</th>
              </tr>
            </thead>

          <tbody>
  {contacts
    .filter((item) =>
        item.name?.toLowerCase().includes(search.toLowerCase()) ||
        item.email?.toLowerCase().includes(search.toLowerCase()) ||
        item.phone?.toLowerCase().includes(search.toLowerCase()) ||
        item.subject?.toLowerCase().includes(search.toLowerCase())
      )
    .map((item, index) => (
      <tr
        key={item.id}
        className="border-b hover:bg-gray-50"
      >
        <td className="p-3">{index + 1}</td>
        <td className="p-3">{item.name}</td>
        <td className="p-3">{item.email}</td>
        <td className="p-3">{item.phone}</td>
       <td className="p-3">{item.subject}</td>

<td className="p-3 max-w-[200px] truncate">
  {item.message}
</td>

       <td className="p-3">
  <div className="flex justify-center gap-2">
    <button
  onClick={() => setSelectedMessage(item.message)}
  className="bg-blue-500 text-white px-4 py-2 rounded"
>
  View
</button>
    <button
  onClick={() => deleteInquiry(item.id)}
  className="bg-red-500 text-white px-4 py-2 rounded"
>
  Delete
</button>
  </div>
</td>

<td className="p-3 text-center">
  {new Date(item.created_at).toLocaleDateString()}
</td>
      </tr>
    ))}
</tbody>
</table>

          {selectedMessage && (
  <div className="mt-6 bg-white p-6 rounded-xl shadow">
    <h3 className="text-xl font-bold mb-3">
      Inquiry Message
    </h3>

    <p>{selectedMessage}</p>
  </div>
)}
        </div>
      </div>
    </div>
  );
}

export default InquiryAdmin;