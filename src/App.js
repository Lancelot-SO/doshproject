import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import TrackPageVisit from './components/TrackPageVisit';
import BackToTop from './components/BackToTop';
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const Contact = lazy(() => import('./pages/Contact'));
const ServiceProviders = lazy(() => import('./pages/ServiceProviders'));
const ProductServices = lazy(() => import('./pages/ProductServices'));
const ErrorPage = lazy(() => import('./pages/ErrorPage'));
const Financial = lazy(() => import('./components/Financial'));
const RegModal = lazy(() => import('./components/RegModal'));
const Insurance = lazy(() => import('./pages/Insurance'));
const Insure = lazy(() => import('./components/Insure'));
const Ride = lazy(() => import('./components/Ride'));
const Ecommerce = lazy(() => import('./components/Ecommerce'));
const Erp = lazy(() => import('./components/Erp'));
const Flyer = lazy(() => import('./components/Flyer'));
const Otp = lazy(() => import('./components/Otp'));
const SignIn = lazy(() => import('./components/SignIn'));
const HomePreview = lazy(() => import('./pages/HomePreview'));
const MainDashboard = lazy(() => import('./dashboard/MainDashboard'));
const RiskDetails = lazy(() => import('./components/RiskDetails'));
const FinancialDetails = lazy(() => import('./components/FinancialDetails'));
const InsuranceDetails = lazy(() => import('./components/InsuranceDetails'));
const FinanceSideModal = lazy(() => import('./components/FinanceSideModal'));
const VideoParent = lazy(() => import('./components/VideoParent'));
//the terms component is the modal
const Terms = lazy(() => import('./components/Terms'));
const Privacy = lazy(() => import('./components/Privacy'));

const FlowGuard = ({ children }) => {
  const location = useLocation();
  // Allow access only if coming from an internal flow (state.fromFlow must be true)
  if (!location.state?.fromFlow) {
    return <Navigate to="/" replace />;
  }
  return children;
};

const Layout = () => {
  const location = useLocation();  // Get the current route location
  // if a link set state.background, use that to render the “page” behind the modal
  const background = location.state && location.state.background;

  const isDashboard = location.pathname === '/dashboard';  // Check if the route is '/dashboard'

  return (
    <>
      {/* Conditionally render Header and Footer */}
      {!isDashboard && <Header />}

      <Suspense fallback={<div style={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/errorpage' element={<ErrorPage />} />
          <Route path='/popup' element={<VideoParent />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<FlowGuard><Register /></FlowGuard>} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/serviceproviders' element={<ServiceProviders />} />
          <Route path='/productservices' element={<ProductServices />} />
          <Route path='/financial' element={<FlowGuard><Financial /></FlowGuard>} />
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
          <Route path='/insurance' element={<FlowGuard><Insurance /></FlowGuard>} />
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
      </Suspense>
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
