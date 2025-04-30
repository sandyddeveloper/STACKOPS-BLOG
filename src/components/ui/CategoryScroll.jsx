import React, { useEffect, useState } from "react";
import apiInstance from "../../utils/axios";

const CategoryTicker = () => {
  const [category, setCategory] = useState([]);

  const fetchPosts = async () => {
    try {
      const response_category = await apiInstance.get("post/category/list/");
      setCategory(response_category.data);
    } catch (error) {
      console.log(error);
    }
  };
    useEffect(() => {
      fetchPosts();
    }, []);
  
  return (
    <div className="flex overflow-hidden bg-black w-full">
      <ul className="flex infinite-scroll whitespace-nowrap text-white py-1 text-sm font-medium tracking-wide">
      {category.map((cat, index) => (
          <li key={index} className="flex items-center ml-3">
            <span>{cat.title}</span>
            <span className="mx-3">-</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryTicker;
