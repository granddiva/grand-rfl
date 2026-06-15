import "./App.css";
import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AppDataProvider } from "./context/AppDataContext";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/auth/ProtectedRoute";

// Komponen CRM
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SummaryCard from "./components/SummaryCard";
import CustomerTable from "./components/CustomerTable";
import CustomerCard from "./components/CustomerCard";
import LeadBadge from "./components/LeadBadge";
import ActionButton from "./components/ActionButton";
import FormInput from "./components/FormInput";
import Modal from "./components/Modal";
import Pipeline from "./components/Pipeline";
import Timeline from "./components/Timeline";
import Notification from "./components/Notification";
import Analytics from "./components/Analytics";
import ProfileDropdown from "./components/ProfileDropdown";
import Search from "./components/Search";
import DashboardPage from "./pages/DashboardPage";

// Lazy pages
const AdminLayout = lazy(() => import("./layouts/AdminLayout"));
const CustomersPage = lazy(() => import("./pages/CustomersPage"));
const CouriersPage = lazy(() => import("./pages/CouriersPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const OrdersPage = lazy(() => import("./pages/OrdersPage"));
const ReportsPage = lazy(() => import("./pages/ReportsPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const SettingsPage = lazy(() => import("./pages/SettingsPage"));
const MemberPage = lazy(() => import("./pages/MemberPage"));

// // Dashboard custom
// function DashboardPage() {
//   return (
//     <div>
//       <Header />
//       <Sidebar />
//       <SummaryCard title="Customers" value="120" />
//       <Search />
//       <CustomerTable />
//       <CustomerCard />
//       <LeadBadge status="Active" />
//       <ActionButton text="Save" />
//       <FormInput placeholder="Masukkan nama" />
//       <Modal />
//       <Pipeline />
//       <Timeline />
//       <Notification />
//       <Analytics />
//       <ProfileDropdown />
//     </div>
//   );
// }

function App() {
  return (
    <AuthProvider>
      <AppDataProvider>
        <Suspense
          fallback={<div className="halaman-memuat">Memuat halaman...</div>}
        >
          <Routes>
            <Route path="/login" element={<LoginPage />} />

            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <AdminLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="/dasbor" replace />} />
              <Route path="dasbor" element={<DashboardPage />} />
              <Route path="pesanan" element={<OrdersPage />} />
              <Route path="pelanggan" element={<CustomersPage />} />
              <Route path="kurir" element={<CouriersPage />} />
              <Route path="layanan" element={<ServicesPage />} />
              <Route path="laporan" element={<ReportsPage />} />
              <Route path="pengaturan" element={<SettingsPage />} />
            </Route>

            <Route
              path="/member"
              element={
                <ProtectedRoute>
                  <MemberPage />  
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<Navigate to="/dasbor" replace />} />
          </Routes>
        </Suspense>
      </AppDataProvider>
    </AuthProvider>
  );
}

export default App;
