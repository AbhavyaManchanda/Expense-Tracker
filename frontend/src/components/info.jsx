import React from 'react'

const Info=({ title, subTitle }) => {
    return (
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between py-6">
            <div className="mb-6">
                <h1 className="text-4xl font-semibold text-black dark:text-gray-200">{title}
                </h1>
                <span className="text-sm text-gray-500 dark:text-gray-400">{subTitle}</span>
            </div>
      
        </div>
    );
   
};

export default Info;
