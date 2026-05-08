import './App.css'
import { Suspense, lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AppDataProvider } from './context/AppDataContext'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/auth/ProtectedRoute'

const AdminLayout = lazy(() => import('./layouts/AdminLayout'))
const CustomersPage = lazy(() => import('./pages/CustomersPage'))
const CouriersPage = lazy(() => import('./pages/CouriersPage'))
const DashboardPage = lazy(() => import('./pages/DashboardPage'))
const LoginPage = lazy(() => import('./pages/LoginPage'))
const OrdersPage = lazy(() => import('./pages/OrdersPage'))
const ReportsPage = lazy(() => import('./pages/ReportsPage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const SettingsPage = lazy(() => import('./pages/SettingsPage'))

function App() {
  return (
    <AuthProvider>
      <AppDataProvider>
        <Suspense fallback={<div className="halaman-memuat">Memuat halaman...</div>}>
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
            <Route path="*" element={<Navigate to="/dasbor" replace />} />
          </Routes>
        </Suspense>
      </AppDataProvider>
    </AuthProvider>
  )
}

export default App
