import { Routes,Route } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import OverviewPage from "./pages/OverviewPage"
import ProductsPage from "./pages/ProductsPage"
import UsersPage from "./pages/UsersPage"
import SalesPage from "./pages/SalesPage"
import OrdersPage from "./pages/OrdersPage"
import AnalyticsPage from "./pages/AnalyticsPage"
import SettingsPage from "./pages/SettingsPage"

function App() {
  return (
    <div>
      {/* Header */}
      <div className="fixed top-0 left-0 w-full text-4xl font-bold text-white px-6 py-4 z-30 bg-gray-800 shadow-md">
        Sales Dashboard
      </div>
      <div className="flex h-screen pt-18 bg-gray-900 text-gray-100 overflow-hidden">
      {/* BG */}
      <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-80" />
          <div className="absolute inset-0 backdrop-blur-sm " />
      </div>

      <Sidebar />

      <Routes>
        <Route path='/' element={<OverviewPage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/users' element={<UsersPage />} />
        <Route path='/sales' element={<SalesPage />} />
        <Route path='/orders' element={<OrdersPage />} />
        <Route path='/analytics' element={<AnalyticsPage />} />
        <Route path='/settings' element={<SettingsPage />} />
      </Routes>

    </div>
    </div>
  )
}

export default App
