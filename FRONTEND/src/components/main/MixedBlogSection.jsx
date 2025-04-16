import React from "react";

const categories = [
  {
    title: "Cultural Delights: A Journey Through History",
    image: "https://cdn.clippingpath.in/wp-content/uploads/2018/11/adult-blur-camera-368893.jpg", 
    tag: "Travel",
  },
  {
    title: "Wild Wonders: Exploring Nature’s Tapestry",
    image: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8=",
    tag: "Nature",
  },
  {
    title: "Pop Culture Parade: Trends and Fandoms",
    image: "https://www.arabianbusiness.com/cloud/2024/07/20/ai-in-entertainment.jpg",
    tag: "Entertainment",
  },
  {
    title: "Entrepreneurial Insights: Building Success Stories",
    image: "https://cdn.corporatefinanceinstitute.com/assets/marketing.jpeg",
    tag: "Business",
  },
];

const MixedSection = () => {
  return (
    <div className="px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-6xl font-thin tracking-tight">MIXED</h2>
          <p className="text-lg text-gray-700">
            exploring a tapestry of topics and ideas
          </p>
        </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-md overflow-hidden shadow-sm group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
        
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <span className="absolute top-3 right-3 bg-black text-white px-3 py-1 text-sm rounded-md z-10">
                {item.tag}
              </span>
              <div className="absolute bottom-3 left-3 text-white text-sm font-medium z-10">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MixedSection;
