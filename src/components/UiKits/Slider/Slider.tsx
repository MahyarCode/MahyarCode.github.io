import React from "react";
import Slide from "./Slide";
import { SlideDataStructure } from "types";

const Slider: React.FC<{ slides: SlideDataStructure[] }> = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = React.useState<number>(0);

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    };

    return (
        <div className="relative">
            <div className="overflow-hidden">
                <div className="flex">
                    {slides.map((slide, index) => (
                        <Slide key={index} slide={slide} isActive={index === currentSlide} />
                    ))}
                </div>
            </div>
            <button onClick={handlePrevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-gray-700 px-2 py-1 rounded-lg focus:outline-none">
                Prev
            </button>
            <button onClick={handleNextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-gray-700 px-2 py-1 rounded-lg focus:outline-none">
                Next
            </button>
        </div>
    );
};

export default Slider;
