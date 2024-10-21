import React from "react";
import Service1 from "../assets/services/consultancy.webp";
import Service2 from "../assets/services/catering.webp";
import Service3 from "../assets/services/brand.webp";
import Image from "next/image";
import Heading from "./common/heading";

// Step 1: Service data stored in an array
const servicesData = [
  {
    imageSrc: Service1, // Placeholder image
    title: "Bar Consultancy",
    description: "We transform your bar into a crowd magnet!",
  },
  {
    imageSrc: Service2, // Placeholder image
    title: "Beverage Catering",
    description: "Elevate your event with our curated beverage services. ",
  },
  {
    imageSrc: Service3, // Placeholder image
    title: "Brand Advocacy",
    description:
      "We bring your brand to life through powerful partnerships and immersive experiences.",
  },
];

// Step 2: Create a Service component
const Service = ({ imageSrc, title, description }: any) => {
  return (
    <div className="w-80 mx-auto mb-8 text-center">
      <Image
        src={imageSrc}
        alt={title}
        style={{
          width: "350px", // Image width
          height: "500px", // Image height
          objectFit: "cover",
          borderRadius: 25,
        }}
      />
      <h2
        className="mt-4"
        style={{
          fontFamily: "Poppins, sans-serif",
          fontSize: "24px",
          fontWeight: "bold",
          color: "#F1C376",
        }}
      >
        {title}
      </h2>
      <p
        className="mt-2"
        style={{
          fontFamily: "Poppins, sans-serif",
          fontSize: "16px",
          color: "#FFFFFF",
        }}
      >
        {description}
      </p>
    </div>
  );
};

// Step 3: Create the ServicesSection component
const ServicesSection = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#1E201E", // Section background color
        }}
        className="py-20"
      >
        {/* Centered Heading */}
        <div className="flex justify-center mb-12">
          <Heading color="#FDF5F3" text="Services" />
        </div>

        <div
          className="py-16"
          style={{
            backgroundColor: "#1E201E", // Section background color
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          {servicesData.map((service, index) => (
            <Service
              key={index}
              imageSrc={service.imageSrc}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesSection;
