import Aos from "aos";
import "aos/dist/aos.css";
import { FC, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingComponent from "../components/loading/LoadingComponent";
import LoadingHome from "../components/loading/LoadingHome";
import { LanguageProvider } from "../hooks/LanguageContext";
import { ToastContainer } from "react-toastify";
import PortfolioDetail from "../pages/portfolio/PortfolioDetail";

// import MusicPlayer from "../components/musicPlayer/MusicPlayer";

// Import lazy-loaded components

const Sidebar = lazy(() => import("../components/sidebar/Sidebar"));
const Home = lazy(() => import("../pages/home/Home"));
const About = lazy(() => import("../pages/about/About"));
const Contact = lazy(() => import("../pages/contact/Contact"));
const Portfolio = lazy(() => import("../pages/portfolio/Portfolio"));
const Services = lazy(() => import("../pages/services/Services"));

const RouteList: FC = () => {
  // console.clear();

  Aos.init({
    duration: 1800,
    offset: 0,
  });
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense
                fallback={
                  <div>
                    <LoadingComponent />
                  </div>
                }
              >
                <Sidebar />
              </Suspense>
            }
          >
            <Route
              index
              element={
                <Suspense
                  fallback={
                    <div
                      style={{
                        width: "100%",
                        height: "90vh",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <LoadingHome />
                    </div>
                  }
                >
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/about"
              element={
                <Suspense
                  fallback={
                    <div
                      style={{
                        width: "100%",
                        height: "90vh",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <LoadingComponent />
                    </div>
                  }
                >
                  <About />
                </Suspense>
              }
            />
            <Route
              path="/contact"
              element={
                <Suspense
                  fallback={
                    <div
                      style={{
                        width: "100%",
                        height: "90vh",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <LoadingComponent />
                    </div>
                  }
                >
                  <Contact />
                </Suspense>
              }
            />
            <Route
              path="/portfolio"
              element={
                <Suspense
                  fallback={
                    <div
                      style={{
                        width: "100%",
                        height: "90vh",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <LoadingComponent />
                    </div>
                  }
                >
                  <Portfolio />
                </Suspense>
              }
            />
            <Route
              path="/services"
              element={
                <Suspense
                  fallback={
                    <div
                      style={{
                        width: "100%",
                        height: "90vh",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <LoadingComponent />
                    </div>
                  }
                >
                  <Services />
                </Suspense>
              }
            />
            <Route
              path="/portfolio/:id"
              element={
                <Suspense
                  fallback={
                    <div
                      style={{
                        width: "100%",
                        height: "90vh",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <LoadingComponent />
                    </div>
                  }
                >
                  <PortfolioDetail />
                </Suspense>
              }
            />
          </Route>
        </Routes>
        <ToastContainer />
      </LanguageProvider>
      {/* <MusicPlayer /> */}
    </BrowserRouter>
  );
};

export default RouteList;
