import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
       const res = await axios.post(
    "https://stepway-backend.vercel.app/api/admin/login",
  {
    username,
    password,
  }
);
localStorage.setItem(
        "token",
        res.data.token
      );

      toast.success("Login Successful");

      navigate("/admin");
    } catch (error) {
      toast.error("Invalid Credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">
          Admin Login
        </h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full border p-3 rounded mb-4"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default AdminLogin;