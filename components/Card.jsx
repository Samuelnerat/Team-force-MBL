import React from "react";

const Card = ({ title, description, imageContent, extraContent, className = "" }) => {
  return (
    <div
      className={`rounded-[30px] shadow-sm space-y-4 p-8 min-h-[300px] flex flex-col justify-between w-full lg:p-16 lg:min-h-[400px] relative overflow-hidden ${className}`}
    >
      <div>
        <h3 className="text-xl lg:text-3xl font-medium text-gray-800 mb-1 lg:mb-4">
          {title}
        </h3>
        <p className="text-gray-500 text-xs lg:text-base font-medium max-w-[380px]">
          {description}
        </p>
      </div>
      <div>{extraContent}</div>
      {imageContent}
    </div>
  );
};

export default Card;

