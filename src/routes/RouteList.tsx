import Aos from "aos";
import "aos/dist/aos.css";
import { FC, lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "../hooks/LanguageContext";
import { ToastContainer } from "react-toastify";
import LoadingComponent from "../components/loading/LoadingComponent";
import LoadingHome from "../components/loading/LoadingHome";

// Lazy-loaded components
const Sidebar = lazy(() => import("../components/sidebar/Sidebar"));
const Home = lazy(() => import("../pages/home/Home"));
const About = lazy(() => import("../pages/about/About"));
const Contact = lazy(() => import("../pages/contact/Contact"));
const Portfolio = lazy(() => import("../pages/portfolio/Portfolio"));
const Services = lazy(() => import("../pages/services/Services"));

const ServiceCardDetail = lazy(
  () => import("../components/service/ServiceCardDetail")
);

const RouteList: FC = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 0,
    });
  }, []);

  return (
    <BrowserRouter>
      <LanguageProvider>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<LoadingComponent />}>
                <Sidebar />
              </Suspense>
            }
          >
            <Route index element={<HomeFallback />} />
            <Route path="/about" element={<AboutFallback />} />
            <Route path="/contact" element={<ContactFallback />} />
            <Route path="/portfolio" element={<PortfolioFallback />} />
            <Route path="/services" element={<ServicesFallback />} />

            <Route
              path="/services/:serviceId"
              element={<ServiceCardDetailFallback />}
            />
          </Route>
        </Routes>
        <ToastContainer />
      </LanguageProvider>
    </BrowserRouter>
  );
};

const HomeFallback = () => (
  <Suspense fallback={<LoadingHome />}>
    <Home />
  </Suspense>
);

const AboutFallback = () => (
  <Suspense fallback={<LoadingComponent />}>
    <About />
  </Suspense>
);

const ContactFallback = () => (
  <Suspense fallback={<LoadingComponent />}>
    <Contact />
  </Suspense>
);

const PortfolioFallback = () => (
  <Suspense fallback={<LoadingComponent />}>
    <Portfolio />
  </Suspense>
);

const ServicesFallback = () => (
  <Suspense fallback={<LoadingComponent />}>
    <Services />
  </Suspense>
);

const ServiceCardDetailFallback = () => (
  <Suspense fallback={<LoadingComponent />}>
    <ServiceCardDetail />
  </Suspense>
);

export default RouteList;
