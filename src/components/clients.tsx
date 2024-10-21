import React from "react";
import Image from "next/image";
import Heading from "./common/heading";
import client_1 from "../assets/clients/client_1.jpg";
import client_2 from "../assets/clients/client_2.jpg";
import client_3 from "../assets/clients/client_3.jpg";
// Step 1: Testimonial data
const testimonialsData = [
  {
    userIcon: client_1, // Placeholder for user icon
    userName: "Indian express",
    testimonial:
      "We hired them for our corporate cocktail event, and it was a massive success! Their attention to detail, creative cocktail menu, and professional service were top-notch. Our guests were blown away. We couldn’t have asked for a better experience!",
  },
  {
    userIcon: client_2, // Placeholder for user icon
    userName: "Harkaran Uppal",
    testimonial:
      "Our wedding wouldn’t have been the same without their incredible bar setup. The signature cocktails were a huge hit, and the team was so friendly and professional. They made sure everything ran smoothly. Highly recommend for any event!",
  },
  {
    userIcon: client_3, // Placeholder for user icon
    userName: "Monika Alcobev",
    testimonial:
      "Their consultancy helped us completely transform our bar’s cocktail program. The mixologists were knowledgeable, and the custom drink menu they developed was exactly what we needed to elevate our offerings. Our regulars love it!",
  },
];

// Step 2: Create a Testimonial component
const Testimonial = ({ userIcon, userName, testimonial }: any) => {
  return (
    <div
      className="border"
      style={{
        borderColor: "#F2C477",
        borderWidth: "1px",
        width: "400px",
        height: "400px",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        padding: "16px",
        justifyContent: "flex-start",
      }}
    >
      <div className="flex items-center mb-10">
        <Image
          src={userIcon}
          alt={`${userName}'s icon`}
          width={50} // Ensure both width and height are the same for a circle
          height={50}
          className="rounded-full mr-4 object-cover" // Add object-cover to ensure the image covers the area
        />

        <h3
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "16px",
            color: "#FFF",
          }}
        >
          {userName}
        </h3>
      </div>
      <p
        style={{
          fontFamily: "Poppins, sans-serif",
          fontSize: "16px",
          color: "#FFFFFF",
          fontStyle: "italic",
        }}
      >
        {testimonial}
      </p>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <div className="bg-[#1E201E] flex flex-col items-center py-20 ">
      <Heading color="#fff" text="Clients" />
      <div
        className=" py-16 flex justify-center"
        style={{ flexWrap: "wrap", gap: "100px" }}
      >
        {testimonialsData.map((testimonial, index) => (
          <Testimonial
            key={index}
            userIcon={testimonial.userIcon}
            userName={testimonial.userName}
            testimonial={testimonial.testimonial}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
