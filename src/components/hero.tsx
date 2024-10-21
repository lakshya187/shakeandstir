import HeroImage from "../assets/Mask group.png";
import Image from "next/image";
import CustomButton from "./common/button";
import Heading from "./common/heading";

const HeroSection = () => {
  return (
    <div
      className="flex justify-between items-center py-12 px-8"
      style={{
        display: "flex",
        alignItems: "start",
        padding: "150px 200px",
      }}
    >
      {/* Left Section: Image */}
      <div className="w-1/2">
        <Image
          src={HeroImage}
          alt="Hero Image"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Right Section: Text */}
      <div
        className="w-1/2 px-12"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <strong>
          <h1
            className="text-4xl"
            style={{
              fontFamily: "Playfair, serif",
              fontSize: "48px",
              color: "#1E201E",
            }}
          >
            <Heading color={"#000"} text={"Shake and Stir Hospitality"} />
          </h1>
        </strong>

        {/* Body Text */}
        <p
          className="mt-6"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "16px",
            color: "#000",
            lineHeight: "1.8",
          }}
        >
          We're all about crafting memorable sips!
          <br /> Whether you're looking for expert bar consultancy, top-tier
          beverage catering, or impactful brand advocacy, we’re your go-to
          solution. From concept to cocktails, we design experiences that leave
          lasting impressions, elevating your events and venues to the next
          level. When it comes to unforgettable drinks and seamless service,
          we've got you covered. Let’s shake things up!
        </p>
        <CustomButton onClick={() => {}} text="Get in touch" />
      </div>
    </div>
  );
};

export default HeroSection;
