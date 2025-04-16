import React from "react";

const categories = [
  "Health", "Entertainment", "Science", "Finance", "Music",
  "Art", "Environment", "Education", "Politics", "Culture",
  "Gaming", "Wellness", "Automotive", "Travel"
];

const CategoryTicker = () => {
  return (
    <div className="flex overflow-hidden bg-black w-full">
      <ul className="flex infinite-scroll whitespace-nowrap text-white py-1 text-sm font-medium tracking-wide">
        {[...categories, ...categories].map((category, index) => (
          <li key={index} className="flex items-center ml-3">
            <span>{category}</span>
            <span className="mx-3">-</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryTicker;
