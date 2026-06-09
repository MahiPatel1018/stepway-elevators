import { useNavigate } from "react-router-dom";

function AdminSidebar() {
  const navigate = useNavigate();

  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-8">
        StepWay Admin
      </h1>

      <div className="space-y-3">
        <button
          onClick={() => navigate("/admin")}
          className="w-full text-left p-3 rounded hover:bg-slate-800"
        >
          🏠 Dashboard
        </button>

        <button
          onClick={() => navigate("/product-admin")}
          className="w-full text-left p-3 rounded hover:bg-slate-800"
        >
          📦 Products
        </button>

        <button
          onClick={() => navigate("/inquiry-admin")}
          className="w-full text-left p-3 rounded hover:bg-slate-800"
        >
          📩 Inquiries
        </button>

        <button
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/admin-login");
          }}
          className="w-full text-left p-3 rounded hover:bg-red-600"
        >
          🚪 Logout
        </button>
      </div>
    </aside>
  );
}

export default AdminSidebar;