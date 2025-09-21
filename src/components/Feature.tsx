import React from "react";

// Example images (replace with your imports)
import img1 from "../assets/ai1.jpg";
import img2 from "../assets/ai2.jpg";
import img3 from "../assets/ai3.jpg";
import img4 from "../assets/ai4.jpg";

type Tool = {
  title: string;
  desc: string;
  img: string;
};

const tools: Tool[] = [
  { title: "AI Assistant", desc: "Create and edit images with AI", img: img1 },
  { title: "AI video generator", desc: "Create stunning videos from text or images", img: img2 },
  { title: "Video Editor", desc: "Create video projects instantly", img: img3 },
  { title: "Reimagine", desc: "Variations with AI", img: img4 },
];

const ToolsSection: React.FC = () => {
  return (
    <div className=" text-white px-6 py-16">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto mb-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Tools to skyrocket your creative freedom
        </h2>
        <p className="text-white mt-2">
          More tools and features coming soon! Want to test them before anyone?{" "}
          <a href="#" className="text-blue-400 underline">
            Become our AI partner.
          </a>
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {tools.map((tool, i) => (
          <div
            key={i}
            className="relative rounded-xl overflow-hidden group h-96 flex flex-col justify-between"
          >
            {/* Background image */}
            <img
              src={tool.img}
              alt={tool.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Text content */}
            <div className="relative p-6 flex flex-col h-full justify-between">
              <h3 className="text-lg font-semibold text-white">{tool.title}</h3>
              <div>
                <p className="text-sm mb-4 text-white">{tool.desc}</p>
                <span className="inline-flex items-center text-xl">→</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsSection;
