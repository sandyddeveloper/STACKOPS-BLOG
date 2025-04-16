import React from "react";


const ContentCard = ({ image, title, date }) => {
    return (
      <div className="flex items-center bg-white rounded-3xl p-3 sm:p-4 w-full space-x-3 sm:space-x-4 mb-4 sm:mb-0">
        <img
          src={image}
          alt={title}
          className="w-16 h-16 sm:w-24 sm:h-24 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold text-sm sm:text-base text-black cursor-pointer hover:underline">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-500">{date}</p>
        </div>
      </div>
    );
  };
  
  export default ContentCard;


  