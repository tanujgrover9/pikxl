import { useState } from "react";
import {
  
  FiChevronDown,
  FiDownload,
  FiShare2,
  FiHeart,
  FiLink2,
  FiX,
} from "react-icons/fi";
import { Listbox } from "@headlessui/react";
import { motion } from "framer-motion";
import { generateImage } from "../stability";

// Replace with your actual logo + showcase images
import logo from "../assets/logo.png";
// import img1 from "../assets/ai1.jpg";
// import img2 from "../assets/ai2.jpg";

const styles = [
  "No style",
  "Realistic",
  "Cartoon",
  "Futuristic",
  "Minimal",
  "Cyberpunk",
  "Watercolor",
];

export default function ImageGenerator() {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState(styles[0]);
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewImg, setPreviewImg] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const img = await generateImage(`${prompt} in style: ${style}`, "core");
      if (!img) throw new Error("No image returned from Stability API.");
      setImages((prev) => [img, ...prev]);
    } catch (err: any) {
      setError(err.message || "Something went wrong with Stability API.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = (url: string, index: number) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = `generated-image-${index + 1}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopy = (url: string) => {
    navigator.clipboard.writeText(url);
    alert("✅ Link copied to clipboard!");
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center font-inter bg-gradient-to-r from-blue-900 via-black to-green-1000 text-white overflow-hidden rounded-2xl">
      {/* Floating images */}
      {/* <motion.img
        src={img1}
        alt="decor"
        className="absolute left-4 sm:left-6 top-32 w-20 sm:w-28 h-20 sm:h-28 rounded-xl shadow-lg object-cover"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      /> */}
      {/* <motion.img
        src={img2}
        alt="decor"
        className="absolute right-4 sm:right-6 top-24 w-20 sm:w-24 h-20 sm:h-24 rounded-xl shadow-lg object-cover"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      /> */}

      {/* Hero Section */}
      <div className="text-center max-w-2xl space-y-6 px-4 mt-24 relative z-10">
        <img src={logo} alt="Logo" className="mx-auto h-10 sm:h-12" />
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white">
          Generate images from text prompt with{" "}
          <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            AI Generator
          </span>
        </h1>
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed px-2">
          Turn your imagination into stunning images. Just describe your vision,
          choose a style, and let AI create it.
        </p>
      </div>

      {/* Input Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-12 w-full max-w-3xl relative z-10 px-4"
      >
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-3 mb-6">
          <Listbox value={style} onChange={setStyle}>
            <div className="relative w-full sm:w-auto">
              <Listbox.Button className="flex items-center justify-between w-full sm:w-32 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-sm font-medium hover:border-pink-500/50">
                {style}
                <FiChevronDown className="ml-2 h-4 w-4 opacity-70" />
              </Listbox.Button>
              <Listbox.Options className="absolute left-0 mt-2 w-40 rounded-xl bg-slate-900/95 border border-white/10 shadow-xl z-50">
                {styles.map((s) => (
                  <Listbox.Option
                    key={s}
                    value={s}
                    className={({ active }) =>
                      `px-4 py-2 text-sm cursor-pointer rounded-lg ${
                        active ? "bg-pink-600 text-white" : "text-gray-300"
                      }`
                    }
                  >
                    {s}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          </Listbox>

          <input
            type="text"
            placeholder="Describe what you want to generate..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="flex-grow w-full px-4 py-3 bg-transparent text-white placeholder-gray-400 focus:outline-none text-base rounded-2xl"
          />

          <button
            onClick={handleGenerate}
            disabled={loading || !prompt}
            className="w-full sm:w-auto flex items-center justify-center px-6 py-3 rounded-2xl font-semibold transition-all duration-200 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:opacity-90 shadow-lg disabled:opacity-50"
          >
            {loading ? (
              <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
            ) : (
              <>Generate</>
            )}
          </button>
        </div>
      </motion.div>

      {/* Error */}
      {error && (
        <div className="mt-6 bg-red-500/10 border border-red-500/30 text-red-300 px-4 py-2 rounded-xl max-w-lg text-center">
          ❌ {error}
        </div>
      )}

      {/* Gallery */}
      {images.length > 0 && (
        <div className="mt-16 max-w-7xl w-full px-4 sm:px-6 mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-white">
            ✨ Generated Artwork
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {images.map((img, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl border border-white/10 group cursor-pointer"
                onClick={() => setPreviewImg(img)}
              >
                <img
                  src={img}
                  alt={`Generated ${idx + 1}`}
                  className="w-full h-56 sm:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 flex justify-between items-center bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition">
                  <div className="flex gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDownload(img, idx);
                      }}
                      className="p-2 bg-white/10 rounded-lg hover:bg-white/20"
                    >
                      <FiDownload size={18} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCopy(img);
                      }}
                      className="p-2 bg-white/10 rounded-lg hover:bg-white/20"
                    >
                      <FiLink2 size={18} />
                    </button>
                    <button
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 bg-white/10 rounded-lg hover:bg-white/20"
                    >
                      <FiShare2 size={18} />
                    </button>
                  </div>
                  <button
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg hover:opacity-80"
                  >
                    <FiHeart size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Preview Modal */}
      {previewImg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-w-6xl w-full"
          >
            <button
              onClick={() => setPreviewImg(null)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 p-2 rounded-full bg-black/70 text-white hover:bg-black/90 transition"
            >
              <FiX size={22} />
            </button>
            <img
              src={previewImg}
              alt="Preview"
              className="w-full max-h-[75vh] sm:max-h-[85vh] object-contain rounded-xl sm:rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      )}
    </div>
  );
}
