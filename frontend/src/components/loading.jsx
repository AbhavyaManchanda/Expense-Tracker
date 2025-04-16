import React from "react";
import { FaSpinner } from "react-icons/fa";

const Loading = () => {
    return (
        <div className="flex items-center justify-center py-2">
            <FaSpinner className="animate-spin text-voilet-600 " size={28} />
        </div>
    );
}
export default Loading;