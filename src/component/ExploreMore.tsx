import React from "react";
import image1 from "../assets/csr-3.jpg";

interface ExploreItem {
  image: string;
  title: string;
  description: string;
}

const exploreItems: ExploreItem[] = [
  {
    image: image1,
    title: "NAVISTARS",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor rerum ut non sint consequatur facilis omnis",
  },
  {
    image: image1,
    title: "B 2 G Project",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor rerum ut non sint consequatur facilis omnis",
  },
  {
    image: image1,
    title: "New Project",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor rerum ut non sint consequatur facilis omnis",
  },
  {
    image: image1,
    title: "Know More Japan & Germany",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor rerum ut non sint consequatur facilis omnis",
  },
];

const ExploreMore: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Explore More</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {exploreItems.map((item, index) => (
          <button
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden w-full text-left transition-transform hover:scale-105 "
            onClick={() => {
              console.log(`Clicked on ${item.title}`);
            }}
          >
            <img src={item.image} alt={item.title} className="w-full h-48 " />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2 uppercase">{item.title}</h3>
              <p className="text-[#9095a0] text-sm">{item.description}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ExploreMore;
