import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';
import ServiceProviders from './pages/ServiceProviders';
import ProductServices from './pages/ProductServices';
import ErrorPage from './pages/ErrorPage';
import Financial from './components/Financial';
import BackToTop from './components/BackToTop';
import RegModal from './components/RegModal';
import Insurance from './pages/Insurance';
import Insure from './components/Insure';
import Ride from './components/Ride';
import Ecommerce from './components/Ecommerce';
import Erp from './components/Erp';
import Flyer from './components/Flyer';
import Otp from './components/Otp';
import SignIn from './components/SignIn';
import HomePreview from './pages/HomePreview';
import MainDashboard from './dashboard/MainDashboard';
import RiskDetails from './components/RiskDetails';
import FinancialDetails from './components/FinancialDetails';
import InsuranceDetails from './components/InsuranceDetails';
import FinanceSideModal from './components/FinanceSideModal';
import VideoParent from './components/VideoParent';
//the terms component is the modal
import Terms from './components/Terms';
import TrackPageVisit from './components/TrackPageVisit';
import Privacy from './components/Privacy';

const Layout = () => {
  const location = useLocation();  // Get the current route location
  // if a link set state.background, use that to render the “page” behind the modal
  const background = location.state && location.state.background;

  const isDashboard = location.pathname === '/dashboard';  // Check if the route is '/dashboard'

  return (
    <>
      {/* Conditionally render Header and Footer */}
      {!isDashboard && <Header />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/errorpage' element={<ErrorPage />} />
        <Route path='/popup' element={<VideoParent />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/serviceproviders' element={<ServiceProviders />} />
        <Route path='/productservices' element={<ProductServices />} />
        <Route path='/financial' element={<Financial />} />
        <Route path='/insure' element={<Insure />} />
        <Route path="/terms" element={<Terms onClose={() => window.history.back()} />} />
        <Route path="/privacy" element={<Privacy onClose={() => window.history.back()} />} />
        <Route path='/financemodal' element={<FinanceSideModal />} />
        <Route path='/insuredetails' element={<InsuranceDetails />} />
        <Route path='/financedetails' element={<FinancialDetails />} />
        <Route path='/riskdetails' element={<RiskDetails />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/otp' element={<Otp />} />
        <Route path='/flyer' element={<Flyer />} />
        <Route path='/ride' element={<Ride />} />
        <Route path='/ecommerce' element={<Ecommerce />} />
        <Route path='/erp' element={<Erp />} />
        <Route path='/regmodal' element={<RegModal />} />
        <Route path='/insurance' element={<Insurance />} />
        <Route path='/home_preview' element={<HomePreview />} />
        <Route path='/dashboard' element={<MainDashboard />} />
        <Route path='/video' element={<VideoParent />} />
        <Route path='*' element={<Navigate to='/errorpage' />} />
      </Routes>

      {/* modal route */}
      {background && (
        <Routes>
          <Route
            path="/terms"
            element={
              <Terms onClose={() => window.history.back()} />
            }
          />
        </Routes>
      )}

      {background && (
        <Routes>
          <Route
            path="/privacy"
            element={
              <Privacy onClose={() => window.history.back()} />
            }
          />
        </Routes>
      )}
      {/* Conditionally render Footer */}
      {!isDashboard && <Footer />}

      {/* BackToTop should still render even on the dashboard */}
      <BackToTop />
      <TrackPageVisit pageUrl={window.location.href} />

    </>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  );
};

export default App;
