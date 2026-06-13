import { lazy, Suspense } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import NotFound from "./Pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ProtectedRoute from "./components/ProtectedRoute";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./Pages/Home";
import AboutPage from "./Pages/AboutPage";
import ProductsPage from "./Pages/ProductsPage";
import ProductDetail from "./Pages/ProductDetail";
import ContactPage from "./Pages/ContactPage";
import ServicesPage from "./Pages/ServicesPage";
import AdminLogin from "./Pages/AdminLogin";
import HomeElevator from "./Pages/HomeElevator";
import PassengerLift from "./Pages/PassengerLift";
import HospitalLift from "./Pages/HospitalLift";
import FreightLift from "./Pages/FreightLift";
import CapsuleLift from "./Pages/CapsuleLift";
import CarLift from "./Pages/CarLift";
import HydraulicLift from "./Pages/HydraulicLift";
import MRLLift from "./Pages/MRLLift";
// Lazy-loaded admin pages
const AdminDashboard = lazy(() => import("./Pages/AdminDashboard"));
const ProductAdmin = lazy(() => import("./Pages/ProductAdmin"));
const InquiryAdmin = lazy(() => import("./Pages/InquiryAdmin"));

function AppContent() {
  const location = useLocation();

  const isAdminPage =
    location.pathname.startsWith("/admin") ||
    location.pathname.startsWith("/product-admin") ||
    location.pathname.startsWith("/inquiry-admin");

  return (
    <>
      <ScrollToTop />

      {!isAdminPage && <Navbar />}

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/home-elevator-ahmedabad" element={<HomeElevator />} />
            <Route path="/passenger-lift-ahmedabad" element={<PassengerLift />} />
            <Route path="/hospital-lift-ahmedabad" element={<HospitalLift />} />
            <Route path="/freight-lift-ahmedabad" element={<FreightLift />} />
            <Route path="/capsule-lift-ahmedabad" element={<CapsuleLift />} />
            <Route path="/car-lift-ahmedabad" element={<CarLift />} />
            <Route path="/hydraulic-lift-ahmedabad" element={<HydraulicLift />} />
            <Route path="/mrl-lift-ahmedabad" element={<MRLLift />} />
          {/* Admin Login */}
          <Route path="/admin-login" element={<AdminLogin />} />

          {/* Admin Dashboard */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          {/* Product Admin */}
          <Route
            path="/product-admin"
            element={
              <ProtectedRoute>
                <ProductAdmin />
              </ProtectedRoute>
            }
          />

          {/* Inquiry Admin */}
          <Route
            path="/inquiry-admin"
            element={
              <ProtectedRoute>
                <InquiryAdmin />
              </ProtectedRoute>
            }
          />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      {!isAdminPage && <Footer />}
      {!isAdminPage && <WhatsAppButton />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
