import React from "react";

// ✅ Import images
import ai1 from "../assets/ai1.jpg";
import ai2 from "../assets/ai2.jpg";
import ai3 from "../assets/ai3.jpg";
import ai5 from "../assets/ai5.jpg";
import ai6 from "../assets/ai6.jpg";
import ai7 from "../assets/ai7.jpg";

type GalleryImage = {
  src: string;
  alt: string;
  className?: string;
};

const images: GalleryImage[] = [
  { src: ai1, alt: "Character in neon jacket", className: "row-span-2" },
  { src: ai7, alt: "Cyberpunk woman" },
  { src: ai5, alt: "City skyline" },
  { src: ai6, alt: "Crystal flower", className: "row-span-2" },
  { src: ai3, alt: "Futuristic bike" },
  { src: ai2, alt: "Samurai sketch" },
];

const Gallery: React.FC = () => {
  return (
    <div className=" min-h-screen flex flex-col  px-6 py-12">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-10">
        <span className="text-white">Platform</span>{" "}
        <span className="text-white">Gallery </span>
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl w-full">
        {images.map((img, i) => (
          <div
            key={i}
            className={`overflow-hidden rounded-xl bg-gray-900 ${img.className ?? ""}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
