

import ai1 from "../assets/ai1.jpg";
import ai2 from "../assets/ai2.jpg";
import ai3 from "../assets/ai3.jpg";

const tutorials = [
  {
    title: "How to create AI product images with Objects",
    description:
      "Learn how to generate consistent AI product images using the Objects feature in the AI Image Generator.",
    img: ai3,
    link: "#",
  },
  {
    title: "How to make AI influencers that look real",
    description:
      "Create your own AI influencer easily, with step-by-step guidance and zero design skills needed.",
    img: ai2,
    link: "#",
  },
  {
    title: "How to make thumbnails for YouTube videos with AI",
    description:
      "Use the pikxl AI Suite to create bold, clickable thumbnails for your YouTube videos.",
    img: ai1,
    link: "#",
  },
];




const FreepikTutorials = () => {
  return (
    <section className=" text-white py-16 px-6 md:px-20">
      <div className=" mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">
          Learn how to create with the pikxl AI Suite
        </h2>
        <p className="text-gray-400">
          Watch tutorials that walk you through different use cases and practical
          how-to guides.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {tutorials.map((tutorial, idx) => (
          <div
            key={idx}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={tutorial.img}
              alt={tutorial.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-white">{tutorial.title}</h3>
              <p className="text-gray-400 mb-4">{tutorial.description}</p>
              <a
                href={tutorial.link}
                className="text-blue-500 font-medium hover:underline"
              >
                View now →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FreepikTutorials;
