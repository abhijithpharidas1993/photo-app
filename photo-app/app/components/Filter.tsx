import React from "react";

const Filter = () => {
  return (
    <div className="inline-flex rounded-none shadow-sm" role="group">
      <button
        type="button"
        className="px-4 py-2 text-sm font-medium text-white bg-black border border-gray-900  hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white"
      >
        Profile
      </button>
      <button
        type="button"
        className="px-4 py-2 text-sm font-medium text-black bg-white border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white"
      >
        Settings
      </button>
      <button
        type="button"
        className="px-4 py-2 text-sm font-medium text-black bg-white border border-gray-900  hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white"
      >
        Downloads
      </button>
    </div>
  );
};

export default Filter;
