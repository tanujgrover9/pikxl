
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import CreatorDashboard from "./pages/CreatorDashboard";
import UploadPage from "./pages/UploadPage";
import ProductPage from "./pages/ProductPage";
import ProfilePage from "./pages/ProfilePage";
import Community from "./pages/Community";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Generate from "./pages/Generate";


const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 text-white">
      {/* Header */}
      <Header />

      {/* Animated Page Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/creator" element={<CreatorDashboard />} />
              <Route path="/upload" element={<UploadPage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/profile/:id" element={<ProfilePage />} />
              <Route path="/community" element={<Community />} />
              <Route path="/generate" element={<Generate />} />
              
              <Route
                path="*"
                element={
                  <h1 className="text-center text-red-400">
                    404 - Page Not Found
                  </h1>
                }
              />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
