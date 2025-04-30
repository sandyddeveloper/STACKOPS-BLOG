import React, { useEffect, useRef, useState, forwardRef } from "react";
import { Link } from "react-router-dom";
import apiInstance from "../../utils/axios";

const CategorySection = forwardRef((props, ref) => {
  const [category, setCategory] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  const fetchPosts = async () => {
    try {
      const response_category = await apiInstance.get(`post/category/list/`);
      setCategory(response_category.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    if (ref?.current) {
      ref.current.style.animationPlayState = isHovered ? "paused" : "running";
    }
  }, [isHovered, ref]);

  return (
    <div className="py-8 overflow-hidden">
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold text-[#1e1e2f]">Categories</h2>
        <p className="text-sm text-gray-500 mt-1">
          Explore different content genres
        </p>
      </div>
      <div className="relative w-full overflow-hidden">
        <div
          ref={ref}
          className="loop-scroll-container flex"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
        >
          {category.map((cat, index) => (
            <Link
              key={index}
              to={`/blog/category/${cat.slug || cat.id}`} 
              className="min-w-[180px] h-[180px] aspect-square snap-start relative group rounded-2xl overflow-hidden border-5 border-white shadow-md hover:shadow-xl transition duration-300 cursor-pointer mx-2"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover z-20 transition-transform duration-300 ease-in-out group-hover:scale-110"
                onError={(e) => (e.target.style.backgroundColor = "#000")}
              />
              <div className="absolute inset-0 bg-opacity-40 group-hover:bg-opacity-50 transition duration-300 z-30" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-40">
                <img src="/arrow.webp" className="w-12 h-12" alt="arrow" />
              </div>
              <div className="absolute bottom-2 left-2 right-2 flex justify-center text-white font-semibold text-sm z-50">
                <span className="bg-black/50 px-2 py-1 rounded">
                  {cat.title?.toUpperCase()}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
});

export default CategorySection;
