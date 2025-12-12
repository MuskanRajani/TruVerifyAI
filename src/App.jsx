import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Solutions from './pages/Solutions'
import Pricing from './pages/Pricing'
import Resources from './pages/Resources'
import Company from './pages/Company'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'

import Industries from "./pages/Industries";
import ProductIndex from './pages/products/ProductIndex'
import IdentityProduct from './pages/products/IdentityProduct'
import CriminalProduct from './pages/products/CriminalProduct'
import EmploymentProduct from './pages/products/EmploymentProduct'
import EducationProduct from './pages/products/EducationProduct'
import WatchlistsProduct from './pages/products/WatchlistsProduct'
import FraudAIProduct from './pages/products/FraudAIProduct'

import FinancialServicesIndustry from './pages/industries/FinancialServicesIndustry'
import GigIndustry from './pages/industries/GigIndustry'
import HealthcareIndustry from './pages/industries/HealthcareIndustry'
import RetailIndustry from './pages/industries/RetailIndustry'
import StaffingIndustry from './pages/industries/StaffingIndustry'
import TechnologyIndustry from './pages/industries/TechnologyIndustry'


export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 via-slate-50 to-brand-primarySoft">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/products" element={<ProductIndex />} />
          <Route path="/products/identity" element={<IdentityProduct />} />
          <Route path="/products/criminal" element={<CriminalProduct />} />
          <Route path="/products/employment" element={<EmploymentProduct />} />
          <Route path="/products/education" element={<EducationProduct />} />
          <Route path="/products/watchlists" element={<WatchlistsProduct />} />
          <Route path="/products/fraud-ai" element={<FraudAIProduct />} />

          {/* Industry detail pages */}
          <Route path="/industries/financial-services" element={<FinancialServicesIndustry />} />
          <Route path="/industries/gig" element={<GigIndustry />} />
          <Route path="/industries/healthcare" element={<HealthcareIndustry />} />
          <Route path="/industries/retail" element={<RetailIndustry />} />
          <Route path="/industries/staffing" element={<StaffingIndustry />} />
          <Route path="/industries/technology" element={<TechnologyIndustry />} />

          <Route path="/solutions" element={<Solutions />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
