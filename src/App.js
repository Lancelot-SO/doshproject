import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from "./components/Header"
import Footer from './components/Footer'
import Home from "./pages/Home"
import About from "./pages/About"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Contact from "./pages/Contact"
import ServiceProviders from "./pages/ServiceProviders"
import ProductServices from './pages/ProductServices'
import ErrorPage from './pages/ErrorPage'
import Financial from './components/Financial'
import BackToTop from './components/BackToTop'
import RegModal from './components/RegModal'
import Insurance from './pages/Insurance'
import HomeTest from './pages/HomeTest'
import Insure from './components/Insure'
import Ride from './components/Ride'
import Ecommerce from './components/Ecommerce'
import Erp from './components/Erp'
import Flyer from './components/Flyer'
import Otp from './components/Otp'
import SignIn from './components/SignIn'
import HomePreview from './pages/HomePreview'
import MainDashboard from './dashboard/MainDashboard'




const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/errorpage' element={<ErrorPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/serviceproviders' element={<ServiceProviders />} />
          <Route path='/productservices' element={<ProductServices />} />
          <Route path='/financial' element={<Financial />} />
          <Route path='/insure' element={<Insure />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/otp' element={<Otp />} />
          <Route path='/flyer' element={<Flyer />} />
          <Route path='/ride' element={<Ride />} />
          <Route path='/ecommerce' element={<Ecommerce />} />
          <Route path='/erp' element={<Erp />} />
          <Route path='/regmodal' element={<RegModal />} />
          <Route path='/insurance' element={<Insurance />} />
          <Route path='/home_test' element={<HomeTest />} />
          <Route path='/home_preview' element={<HomePreview />} />
          <Route path='*' element={<Navigate to="/errorpage" />} />
        </Routes>
        <Footer />
        <BackToTop />

      </BrowserRouter>

      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<MainDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
