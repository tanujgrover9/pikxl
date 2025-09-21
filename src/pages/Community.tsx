
import { motion } from "framer-motion";
import {
  FiHeart,
  FiMessageCircle,
  FiUsers,
  FiShare2,
  FiCheckCircle,
} from "react-icons/fi";

export default function Community() {
  return (
    <div className="space-y-20">
      {/* 🌟 Top Banner */}
      {/* 🌟 Top Banner */}
<div className="relative overflow-hidden rounded-3xl shadow-lg border border-white/10">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1600&q=80')",
    }}
  />
  {/* Overlay for readability */}
  <div className="absolute inset-0 bg-black/50" />

  {/* Banner Content */}
  <div className="relative px-8 md:px-16 py-20 text-center ">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-5xl font-extrabold mb-4 text-white"
    >
      Welcome to the Community 
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="text-lg text-gray-200 max-w-2xl mx-auto mb-8"
    >
      Connect with creators, share your AI-powered artworks, and join vibrant
      groups shaping the future of creativity.
    </motion.p>
    <motion.a
      href="#feed"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-6 py-3 rounded-xl bg-sky-500 text-white font-semibold shadow-lg hover:opacity-90 transition"
    >
      Join the Conversation
    </motion.a>
  </div>
</div>


      {/* 🌐 Feed Section */}
      <div id="feed">
        <h3 className="text-3xl font-extrabold mb-10 flex items-center gap-3 text-white">
          <FiMessageCircle className="text-blue-500" /> Community Feed
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {new Array(6).fill(0).map((_, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="rounded-2xl overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg hover:shadow-2xl transition-all group"
            >
              {/* Banner */}
              <div className="relative h-44 w-full overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/community${i}/600/300`}
                  alt="AI Artwork"
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <span className="absolute top-3 left-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs px-3 py-1 rounded-full font-medium shadow-md">
                  AI Artwork #{i + 1}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* User Info */}
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={`https://i.pravatar.cc/150?img=${i + 10}`}
                    alt="User"
                    className="w-11 h-11 rounded-full object-cover border border-white/10"
                  />
                  <div>
                    <div className="flex items-center gap-1">
                      <p className="font-semibold text-white">User {i + 1}</p>
                      {i % 2 === 0 && (
                        <FiCheckCircle
                          className="text-blue-400"
                          title="Verified"
                        />
                      )}
                    </div>
                    <p className="text-xs text-gray-400">2h ago</p>
                  </div>
                </div>

                {/* Post Text */}
                <p className="text-gray-300 text-sm mb-5 leading-relaxed">
                  Exploring creativity with AI — here’s one of my latest
                  generative designs. Thoughts?
                </p>

                {/* Actions */}
                <div className="flex justify-between items-center text-gray-400 text-sm">
                  <button className="flex items-center gap-1 hover:text-pink-400 transition-colors">
                    <FiHeart /> 24
                  </button>
                  <button className="flex items-center gap-1 hover:text-blue-400 transition-colors">
                    <FiMessageCircle /> 5
                  </button>
                  <button className="flex items-center gap-1 hover:text-green-400 transition-colors">
                    <FiShare2 /> Share
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 👥 Groups Section */}
      <div>
        <h3 className="text-3xl font-extrabold mb-10 flex items-center gap-3 text-white">
          <FiUsers className="text-blue-500" /> Discover Groups
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {["Stable Diffusion", "MidJourney", "Runway", "Video AI"].map(
            (g, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-md hover:shadow-xl transition cursor-pointer"
              >
                <h4 className="font-semibold text-white text-lg mb-2">{g}</h4>
                <p className="text-sm text-gray-300 mb-5">
                  Join the {g} community and share your creative journey.
                </p>
                <button className="px-4 py-2 text-sm rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium hover:opacity-90 transition shadow">
                  Join Group
                </button>
              </motion.div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
