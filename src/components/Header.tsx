import  { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiSearch, FiUpload, FiMenu, FiX } from "react-icons/fi";
import { Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

const nav = [
  { label: "Home", to: "/" },
  { label: "Generate", to: "/generate", special: true },
  { label: "Marketplace", to: "/marketplace" },
  { label: "Community", to: "/community" },
  { label: "Creator", to: "/creator" },
];

export default function Header() {
  const loc = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full backdrop-blur-lg bg-black/70 border-b border-white/10 sticky top-0 z-50">
      <div className="container mx-auto px-5 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <motion.img
            src={logo}
            alt="AI Market Logo"
            className="w-30 h-10 rounded-lg shadow-md"
            whileHover={{ rotate: 5, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
          <div className="hidden md:block">
            <div className="text-xs text-gray-400">
              Showcase & Sell Your AI Creations
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          {nav.map((n) => {
            const isActive = loc.pathname === n.to;
            const isSpecial = n.special;

            return (
              <motion.div
                key={n.to}
                whileHover={{ y: -2 }}
                className="relative flex flex-col items-center"
              >
                <Link
                  to={n.to}
                  className={`text-sm font-medium transition-colors duration-200 flex items-center gap-1 ${
                    isSpecial
                      ? "text-white px-3 py-1.5 rounded-lg bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-500 shadow-md hover:shadow-lg"
                      : isActive
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {isSpecial && <Star size={14} className="text-yellow-300" />}
                  {n.label}
                </Link>

                {/* Underline animation */}
                {!isSpecial && isActive && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 w-8 h-[2px] bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-500 rounded-full"
                  />
                )}
              </motion.div>
            );
          })}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* Search - hidden on mobile */}
          <div className="hidden md:flex items-center gap-2 bg-white/10 hover:bg-white/20 transition px-3 py-2 rounded-2xl">
            <FiSearch className="text-gray-300" />
            <input
              className="bg-transparent outline-none text-sm w-44 placeholder-gray-400 text-white rounded-2xl"
              placeholder="Search images, videos..."
            />
          </div>

          {/* Upload */}
          <motion.div whileHover={{ scale: 1.05 }} className="hidden md:block">
            <Link
              to="/upload"
              className="flex items-center gap-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-500 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition font-medium"
            >
              <FiUpload /> Upload
            </Link>
          </motion.div>

          {/* Hamburger for mobile */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90 border-t border-white/10 px-5 py-4 flex flex-col gap-4"
          >
            {nav.map((n) => {
              const isActive = loc.pathname === n.to;
              const isSpecial = n.special;

              return (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className={`text-base font-medium transition-colors duration-200 flex items-center gap-2 ${
                    isSpecial
                      ? "text-white px-3 py-2 rounded-lg bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-500 shadow-md hover:shadow-lg"
                      : isActive
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {isSpecial && <Star size={16} className="text-yellow-300" />}
                  {n.label}
                </Link>
              );
            })}

            {/* Upload button inside mobile menu */}
            <Link
              to="/upload"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-500 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition font-medium mt-2"
            >
              <FiUpload /> Upload
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
