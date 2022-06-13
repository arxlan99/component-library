import React from "react";

const SimpleWhiteButton = () => {
  return (
    <button
      type="button"
      className="text-black shadow bg-white border-[1px] border-gray-300 focus:ring hover:shadow-md focus:ring-blue-300 font-medium rounded-md text-sm px-2.5 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 transition-shadow"
    >
      Default
    </button>
  );
};

export default SimpleWhiteButton;
