import React, { useState } from "react";
import image_1 from "../assets/gallary/1.png";
import image_2 from "../assets/gallary/2.png";
import image_3 from "../assets/gallary/3.png";
import Image from "next/image";
import Heading from "./common/heading";

// Step 1: Image data
const galleryImages = [image_1, image_2, image_3];

// Step 2: Create Gallery component
const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesToShow = 3;

  // Step 3: Navigation functions
  const goNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + imagesToShow < galleryImages.length
        ? prevIndex + imagesToShow
        : prevIndex
    );
  };

  const goBack = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - imagesToShow >= 0 ? prevIndex - imagesToShow : prevIndex
    );
  };

  return (
    <div className="bg-white py-20 flex flex-col items-center">
      {/* Center align the heading */}
      <Heading color="#000" text="Gallery" />
      <div className="flex items-center mt-20">
        {/* Navigation Buttons */}
        <div className="flex flex-col justify-center mr-4">
          <button
            onClick={goBack}
            disabled={currentIndex === 0} // Disable button if at the start
            className="mb-4 px-4 py-2 bg-gray-800 text-white rounded-md disabled:opacity-50"
          >
            Back
          </button>
        </div>

        {/* Display Images */}
        <div className="flex space-x-20">
          {galleryImages
            .slice(currentIndex, currentIndex + imagesToShow)
            .map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg"
                style={{ width: "370px", height: "370px" }}
              >
                <Image
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
        </div>

        <div className="flex flex-col justify-center ml-4">
          <button
            onClick={goNext}
            disabled={currentIndex + imagesToShow >= galleryImages.length} // Disable button if at the end
            className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
