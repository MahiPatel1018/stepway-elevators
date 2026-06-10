import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import {
  Phone,
  Mail,
  MapPin,
  Send,
} from "lucide-react";


function Contact() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (formData.name.trim().length < 3) {
  toast.error("Please enter a valid name");
  return;
}

if (!/\S+@\S+\.\S+/.test(formData.email)) {
  toast.error("Please enter a valid email");
  return;
}

if (!/^[0-9]{10}$/.test(formData.phone)) {
  toast.error("Please enter a valid 10-digit phone number");
  return;
}

if (formData.message.trim().length < 10) {
  toast.error("Message should be at least 10 characters");
  return;
}
  try {
    setLoading(true);

    const res = await axios.post(
      "https://stepway-backend.vercel.app/api/contact",
      formData
    );

    toast.success(res.data.message);

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

  } catch (error) {
    toast.error("Failed to send inquiry");
    console.log(error);
  } finally {
    setLoading(false);
  }
};
  return (
    <section
      id="contact"
      className="py-16 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Side */}
          <div className="space-y-6">

            <div className="bg-white p-6 rounded-3xl shadow-lg flex gap-4">
              <Phone className="text-blue-600" size={32} />
              <div>
                <h3 className="font-bold text-xl">Call Us</h3>
                <p className="text-slate-600">+91 87340 48673</p>
                <p className="text-slate-600">+91 95588 48673</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg flex gap-4">
              <Mail className="text-blue-600" size={32} />
              <div>
                <h3 className="font-bold text-xl">Email</h3>
                <p className="text-slate-600">
                  stepwayelevators@gmail.com
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg flex gap-4">
              <MapPin className="text-blue-600" size={32} />
              <div>
                <h3 className="font-bold text-xl">
                  Office Address
                </h3>

                <p className="text-slate-600">
                  10-302, Ishwar Estate,
                </p>

                <p className="text-slate-600">
                  Opp. Pushpraj Residency,
                </p>

                <p className="text-slate-600">
                  B/H Ishwar Saw Mill,
                </p>

                <p className="text-slate-600">
                  Under Vishwakarma Railway Bridge,
                </p>

                <p className="text-slate-600">
                  Gota, Ahmedabad - 382481
                </p>
              </div>
            </div>

          </div>

          {/* Right Side Form */}
          <div className="bg-white p-8 rounded-3xl shadow-xl">

            <h3 className="text-2xl font-bold mb-6">
              Send Inquiry
            </h3>

            <form
              className="space-y-5"
              onSubmit={handleSubmit}
            >

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full border border-slate-200 p-4 rounded-xl focus:outline-none focus:border-blue-600"
                required
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full border border-slate-200 p-4 rounded-xl focus:outline-none focus:border-blue-600"
                required
              />

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full border border-slate-200 p-4 rounded-xl focus:outline-none focus:border-blue-600"
              />

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full border border-slate-200 p-4 rounded-xl focus:outline-none focus:border-blue-600"
              />

              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full border border-slate-200 p-4 rounded-xl focus:outline-none focus:border-blue-600"
                required
              ></textarea>

             <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold flex justify-center items-center gap-2 transition disabled:opacity-70"
              >
                {loading ? "Sending..." : "Send Inquiry"}
                <Send size={18} />
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;