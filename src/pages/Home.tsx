
import { motion } from "framer-motion";
import { Mail, FolderOpen, Rocket} from "lucide-react";
import heroPreview from "../assets/image-generator-header.png";
import FreepikTutorials from "../sections/FreepikTutorials";
import Gallery from "../components/Imagegrid";
import ToolsSection from "../components/Feature";
import Testimonial from "../components/Testimonials";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="space-y-40">
      {/* ---------------- Hero Section ---------------- */}
      <section className="relative h-[95vh] flex items-center justify-center overflow-hidden rounded-[30px]">
        {/* Background */}
        <motion.img
          src={heroPreview}
          alt="AI Background"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-blue-900/60"></div>

        {/* Floating glow */}
        <motion.div
          className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full -top-40 -left-40"
          animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] bg-cyan-500/20 blur-3xl rounded-full bottom-0 -right-40"
          animate={{ y: [0, -40, 0], x: [0, -20, 0] }}
          transition={{ duration: 14, repeat: Infinity }}
        />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent"
          >
            Showcase. Sell. Grow. <br /> Your AI Creations.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-gray-300 text-lg md:text-xl max-w-2xl mx-auto"
          >
            A clean and modern marketplace where creators transform imagination
            into income. Upload, sell, and grow your AI-powered art, music,
            videos, and more.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex flex-wrap justify-center gap-5"
          >
          <Link
  to="/upload"
  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl font-semibold text-white shadow-lg transition-transform transform hover:scale-105"
>
  Upload Your Work
</Link>

<Link
  to="/marketplace"
  className="px-8 py-3 border border-white/20 rounded-xl text-gray-200 hover:bg-white/10 transition"
>
  Explore Marketplace
</Link>
          </motion.div>
        </div>
      </section>

      <Gallery/>

      {/* ---------------- Featured Section ---------------- */}
      {/* <section className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
        >
        </motion.h2>
        <FeaturedCarousel />
      </section> */}

      {/* ---------------- Trending Categories ---------------- */}
      {/* <section className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
          Trending Categories
        </h2>
        <div className="grid md:grid-cols-5 gap-6">
          {["AI Art", "Music", "3D Models", "Code Snippets", "Avatars"].map(
            (cat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 shadow-lg backdrop-blur-lg cursor-pointer"
              >
                <h3 className="text-lg font-semibold text-white">{cat}</h3>
              </motion.div>
            )
          )}
        </div>
      </section> */}

      {/* ---------------- Stats ---------------- */}
      {/* <section className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Platform Highlights
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[{ number: "10k+", label: "Creators", icon: "👩‍🎨" },
            { number: "50k+", label: "AI Creations", icon: "🎨" },
            { number: "$2M+", label: "Sales Made", icon: "💰" }]
            .map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-12 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 shadow-2xl"
              >
                <div className="text-5xl">{stat.icon}</div>
                <div className="text-4xl font-extrabold text-white mt-4">
                  {stat.number}
                </div>
                <div className="text-gray-400 mt-2 text-lg">{stat.label}</div>
              </motion.div>
          ))}
        </div>
      </section> */}

      {/* ---------------- How It Works ---------------- */}
      <section className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16  bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-white text-transparent">
          How It Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[{
              icon: <Rocket className="w-6 h-6" />,
              title: "Upload & Sell",
              content: "Upload your creations, set prices, and start selling."
            },
            {
              icon: <FolderOpen className="w-6 h-6" />,
              title: "Explore Categories",
              content: "Discover endless AI-powered creativity."
            },
            {
              icon: <Mail className="w-6 h-6" />,
              title: "Stay Updated",
              content: "Get tips & updates via our newsletter."
            }]
            .map((card, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-10 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg shadow-xl text-center"
              >
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white mb-5">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-300 text-sm">{card.content}</p>
              </motion.div>
          ))}
        </div>
      </section>
      <ToolsSection/>


      {/* ---------------- Testimonials ---------------- */}
      <Testimonial/>
      {/* <section className="container mx-auto px-6 ">
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent text-white">
          What Creators Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[{
              name: "Aria", role: "AI Artist",
              text: "This platform gave me a stage for my artworks."
            },
            {
              name: "Leo", role: "3D Creator",
              text: "Selling my 3D AI renders has never been smoother."
            },
            {
              name: "Maya", role: "Video Designer",
              text: "Easy to upload and share my AI videos."
            }]
            .map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg shadow-xl"
              >
                <Star className="w-6 h-6 text-blue-400 mx-auto mb-4" />
                <p className="text-gray-300 text-sm mb-6 italic">“{t.text}”</p>
                <h4 className="text-white font-medium text-lg">{t.name}</h4>
                <p className="text-gray-400 text-xs">{t.role}</p>
              </motion.div>
          ))}
        </div>
      </section> */}
      <FreepikTutorials/>

      {/* ---------------- FAQ ---------------- */}
      <section className="container mx-auto px-6 my-10">
        <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          {[{
              q: "How do I upload my AI creations?",
              a: "Click 'Upload Work', set your price, and publish your content."
            },
            {
              q: "What file formats are supported?",
              a: "Images (PNG, JPG), Videos (MP4), Audio (MP3, WAV), and 3D files (GLB, OBJ)."
            },
            {
              q: "How do payments work?",
              a: "Buyers pay securely, and you can withdraw earnings anytime."
            }]
            .map((faq, i) => (
              <motion.details
                key={i}
                className="p-6 rounded-xl bg-white/5 border border-white/10 text-gray-300 cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                <summary className="font-semibold text-white cursor-pointer">
                  {faq.q}
                </summary>
                <p className="mt-3 text-sm">{faq.a}</p>
              </motion.details>
          ))}
        </div>
      </section>

      {/* ---------------- Call to Action ---------------- */}
      <section className="relative overflow-hidden rounded-[24px] bg-gradient-to-r from-blue-900/70 via-black to-indigo-900/70">
  {/* Background Overlay */}
  <div className="absolute inset-0">
    <img
      src={heroPreview}
      alt="AI Showcase Background"
      className="w-full h-full object-cover opacity-20"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>
  </div>

  <div className="relative z-10 container mx-auto px-6 py-20">
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
      {/* Left Side → Text + Button */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="space-y-8 text-center md:text-left"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 leading-tight">
          Ready to Share Your AI Creations?
        </h2>
        <p className="text-lg text-gray-300 max-w-lg">
          Join thousands of creators already earning from their AI projects.
          Upload your art, models, and designs today.
        </p>
        <motion.a
          href="/upload"
          whileHover={{ scale: 1.05 }}
          className="inline-block px-10 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg"
        >
          Get Started
        </motion.a>
      </motion.div>

      {/* Right Side → Image Showcase */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex justify-center md:justify-end"
      >
        <img
          src={heroPreview}
          alt="AI Showcase"
          className="w-full max-w-md rounded-2xl shadow-2xl border border-white/10"
        />
      </motion.div>
    </div>
  </div>
</section>

    </div>
  );
}
