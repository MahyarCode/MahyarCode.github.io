import React from "react";
import { SlideDataStructure } from "types";

const Slide: React.FC<{ slide: SlideDataStructure; isActive: boolean }> = ({ slide, isActive }) => {
    return (
        <div className={`w-full h-full transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0 hidden"}`}>
            <div className="flex">
                <img src={slide.image} alt={slide.title} className="w-1/2 object-cover" />
                <div className="w-1/2 bg-white p-4">
                    <h2 className="text-confident text-2xl font-bold mb-2">{slide.title}</h2>
                    <p className="text-gray-600">{slide.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Slide;
