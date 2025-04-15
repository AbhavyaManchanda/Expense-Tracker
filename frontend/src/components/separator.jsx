import React from "react";

const Separator = () => (
  <div className="relative my-4">
    <div className="absolute inset-0 flex items-center">
      <div className="w-full border-t border-gray-300 dark:border-gray-800"></div>
    </div>
    <div className="relative flex justify-center text-sm">
      <span className="px-2 text-gray-500 bg-white dark:bg-black/10 rounded">
        Or
      </span>
    </div>
  </div>
);

export default Separator;
