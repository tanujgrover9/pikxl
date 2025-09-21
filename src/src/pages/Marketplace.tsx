import React from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiHeart, FiShare2 } from "react-icons/fi";

const featured = [
  {
    id: 1,
    title: "Surreal Dreamscape",
    desc: "AI-generated fantasy art blending imagination & reality",
    image: "https://picsum.photos/seed/featured1/1200/500",
  },
  {
    id: 2,
    title: "Cyberpunk Skyline",
    desc: "Futuristic city glowing in neon blue tones",
    image: "https://picsum.photos/seed/featured2/1200/500",
  },
  {
    id: 3,
    title: "Ocean of Thoughts",
    desc: "AI art capturing waves of creativity in deep blues",
    image: "https://picsum.photos/seed/featured3/1200/500",
  },
];

const cards = new Array(6).fill(0).map((_, i) => ({
  id: i + 1,
  title: `AI Work #${i + 1}`,
  creator: `Creator ${i + 1}`,
  creatorId: `#${1000 + i}`,
  price: ((i % 4) + 1) * 15,
  image: `https://picsum.photos/seed/card${i}/500/350`,
  avatar: `https://i.pravatar.cc/150?img=${i + 12}`,
}));

export default function FeaturedCarousel() {
  const [index, setIndex] = React.useState(0);

  const prev = () => setIndex((i) => (i - 1 + featured.length) % featured.length);
  const next = () => setIndex((i) => (i + 1) % featured.length);

  return (
    <section className="space-y-12">
      {/* 🎠 Slider */}
      <div className="relative w-full overflow-hidden rounded-2xl shadow-lg border border-white/10">
        <motion.div
          key={featured[index].id}
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -80 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <img
            src={featured[index].image}
            alt={featured[index].title}
            className="w-full h-[420px] object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Text */}
          <div className="absolute bottom-10 left-10 max-w-xl">
            <h2 className="text-3xl font-extrabold text-white drop-shadow-lg">
              {featured[index].title}
            </h2>
            <p className="text-gray-200 mt-2">{featured[index].desc}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-500 text-white font-medium shadow-md hover:shadow-xl transition"
            >
              Explore
            </motion.button>
          </div>
        </motion.div>

        {/* Controls */}
        <button
          onClick={prev}
          className="absolute top-1/2 left-5 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 transition text-white"
        >
          <FiChevronLeft size={22} />
        </button>
        <button
          onClick={next}
          className="absolute top-1/2 right-5 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 transition text-white"
        >
          <FiChevronRight size={22} />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
          {featured.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition ${
                i === index
                  ? "bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-500 shadow"
                  : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* 🖼️ Cards Section */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {cards.map((card, idx) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ scale: 1.03, y: -6 }}
            className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-lg shadow-lg"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Price */}
              <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-500 text-white text-xs font-semibold shadow-md">
                ${card.price}
              </div>

              {/* Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-500 opacity-0 group-hover:opacity-30 blur-2xl transition duration-500" />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col justify-between h-40">
              {/* Title + Creator */}
              <div>
                <h3 className="text-white font-semibold text-lg">
                  {card.title}
                </h3>
                <div className="flex items-center gap-2 mt-2">
                  <img
                    src={card.avatar}
                    alt={card.creator}
                    className="w-8 h-8 rounded-full border border-white/10"
                  />
                  <div className="text-sm">
                    <div className="text-gray-200">{card.creator}</div>
                    <div className="text-gray-400 text-xs">{card.creatorId}</div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex justify-between items-center mt-4">
                <div className="flex gap-3 text-gray-300">
                  <button className="hover:text-cyan-400 transition">
                    <FiHeart className="w-5 h-5" />
                  </button>
                  <button className="hover:text-sky-400 transition">
                    <FiShare2 className="w-5 h-5" />
                  </button>
                </div>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="px-4 py-2 text-sm rounded-lg bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-500 text-white font-medium shadow hover:opacity-90 transition"
                >
                  Buy
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
