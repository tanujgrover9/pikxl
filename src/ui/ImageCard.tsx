import React from "react";
import { motion } from "framer-motion";
import { FiHeart, FiShare2, FiShoppingCart } from "react-icons/fi";

interface ImageCardProps {
  item: {
    id: number;
    title: string;
    price: number;
    image: string;
  };
}

export default function ImageCard({ item }: ImageCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all"
    >
      {/* Thumbnail */}
      <div className="relative group">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Top-right action buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="p-2 bg-white/90 rounded-full shadow hover:bg-white">
            <FiHeart className="text-gray-600 text-lg" />
          </button>
          <button className="p-2 bg-white/90 rounded-full shadow hover:bg-white">
            <FiShare2 className="text-gray-600 text-lg" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col">
        <h3 className="font-semibold text-gray-900 truncate">{item.title}</h3>
        <p className="text-sm text-gray-500">by Creator</p>

        <div className="mt-3 flex items-center justify-between">
          <p className="text-blue-600 font-bold">${item.price}</p>
          <button className="flex items-center gap-1 px-3 py-1.5 text-sm border border-gray-300 rounded-md hover:border-blue-500 text-blue-600 transition">
            <FiShoppingCart /> Buy
          </button>
        </div>
      </div>
    </motion.div>
  );
}
