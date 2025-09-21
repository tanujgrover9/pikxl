import React from "react";
import { Quote } from "lucide-react";

// Example image import
import testimonialImg from "../assets/ai5.jpg";

const Testimonial: React.FC = () => {
  return (
    <section className="container mx-auto px-6 py-16 -my-16">
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
        What Creators Say
      </h2>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Image */}
        <div className="overflow-hidden rounded-2xl">
          <img
            src={testimonialImg}
            alt="Testimonial Illustration"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/* Right Side - Testimonial Card */}
        <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 shadow-xl">
          <Quote className="absolute top-6 left-6 w-10 h-10 text-white/30" />

          <p className="text-gray-200 leading-relaxed mb-6 pl-12">
            I like to describe it as <span className="font-semibold">"photoshop on steroids."</span>  
            pikxl's advanced capabilities enable us to seamlessly blend and enhance images.  
            These stills are then seamlessly integrated back into the workflow using pikxl,  
            resulting in highly detailed and expressive visual assets.
          </p>

          <hr className="border-white/10 my-4" />

          <div>
            <h4 className="text-white font-semibold text-lg">Christophe Mes</h4>
            <p className="text-gray-400 text-sm">Chief of Staff, Springbok Group</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
