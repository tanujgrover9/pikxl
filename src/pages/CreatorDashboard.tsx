
import { motion } from "framer-motion";
import { Upload, DollarSign, Users, ShoppingBag, Eye } from "lucide-react";

export default function CreatorDashboard() {
  return (
    <div className="space-y-12">
      {/* 🌊 Profile Overview */}
      <div className="relative rounded-2xl overflow-hidden shadow-xl border border-white/10">
        {/* Banner */}
        <div
          className="h-40 bg-cover bg-center relative"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80')",
          }}
        >
          <div className="absolute inset-0 " />
        </div>

        {/* Profile */}
        <div className="p-6 flex items-center gap-6 -mt-14 relative z-10">
          <div className="relative">
            <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden shadow-lg ring-4 ring-blue-500/40">
              <img
                src="https://i.pravatar.cc/150?img=32"
                alt="Creator Avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Creator Name</h2>
            <p className="text-gray-300">AI Artist | Transforming imagination</p>
            <div className="mt-2 flex gap-3 text-sm">
              <span className="text-gray-400">Joined Jan 2024</span>
              <span className="px-2 py-0.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                Premium Creator
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 📊 Stats Dashboard */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {[
          {
            icon: DollarSign,
            label: "Total Earnings",
            value: "$4,230",
            gradient: "from-emerald-400 to-green-600",
          },
          {
            icon: ShoppingBag,
            label: "Purchases",
            value: "123",
            gradient: "from-blue-400 to-indigo-600",
          },
          {
            icon: Users,
            label: "Followers",
            value: "1.2k",
            gradient: "from-purple-400 to-pink-500",
          },
          {
            icon: Eye,
            label: "Profile Views",
            value: "8.4k",
            gradient: "from-pink-400 to-rose-600",
          },
        ].map((stat, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-xl bg-white/5 border border-white/10 shadow-lg backdrop-blur-lg"
          >
            <div
              className={`p-3 rounded-lg bg-gradient-to-r ${stat.gradient} text-white shadow`}
            >
              <stat.icon className="w-6 h-6" />
            </div>
            <p className="text-sm text-gray-400 mt-3">{stat.label}</p>
            <h3 className="text-2xl font-semibold text-white">{stat.value}</h3>
          </motion.div>
        ))}
      </div>

      {/* 💸 Recent Sales */}
      <div className="rounded-xl bg-white/5 backdrop-blur-lg p-6 border border-white/10 shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-white">Recent Sales</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-gray-400 border-b border-white/10">
              <tr>
                <th className="py-3">Item</th>
                <th className="py-3">Buyer</th>
                <th className="py-3">License</th>
                <th className="py-3">Date</th>
                <th className="py-3 text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  item: "AI Landscape Pack",
                  buyer: "JohnDoe",
                  license: "Extended",
                  date: "Sept 15, 2025",
                  amount: "$120",
                },
                {
                  item: "Portrait Style Pack",
                  buyer: "JaneSmith",
                  license: "Standard",
                  date: "Sept 12, 2025",
                  amount: "$45",
                },
                {
                  item: "3D AI Models",
                  buyer: "AlphaUser",
                  license: "Extended",
                  date: "Sept 10, 2025",
                  amount: "$200",
                },
              ].map((sale, i) => (
                <tr
                  key={i}
                  className="border-b border-white/5 hover:bg-white/10 transition"
                >
                  <td className="py-3 text-white">{sale.item}</td>
                  <td className="text-gray-300">{sale.buyer}</td>
                  <td>
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        sale.license === "Extended"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-blue-500/20 text-blue-400"
                      }`}
                    >
                      {sale.license}
                    </span>
                  </td>
                  <td className="text-gray-400">{sale.date}</td>
                  <td className="text-right font-semibold text-white">
                    {sale.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ⚡ Quick Actions */}
      <div className="flex flex-wrap gap-4">
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow hover:opacity-90 transition"
        >
          <Upload className="w-5 h-5" /> Upload New Item
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 text-white font-medium hover:bg-white/20 transition shadow"
        >
          <DollarSign className="w-5 h-5" /> Withdraw Funds
        </motion.button>
      </div>
    </div>
  );
}
