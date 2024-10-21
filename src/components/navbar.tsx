import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "../assets/logo.svg";

const NavBar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to section function
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      className={`flex justify-between items-center py-6 px-4 transition-shadow duration-300 ${
        scrolling ? "shadow-lg" : ""
      }`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "#FDF5F3",
        zIndex: 100,
        height: 126,
        padding: "0px 100px",
      }}
    >
      {/* Logo Section */}
      <div>
        <Image src={Logo} onClick={() => scrollToSection("hero")} alt="logo" />
      </div>

      {/* Links Section */}
      <div className="flex space-x-20">
        {["services", "gallery", "clients"].map((item) => (
          <p
            key={item}
            className="transition-transform duration-300 transform hover:scale-105 hover:text-gray-700 cursor-pointer"
            style={{ color: "#1E201E", fontFamily: "Poppins, sans-serif" }}
            onClick={() => scrollToSection(item)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </p>
        ))}
      </div>

      {/* Button Section */}
      <div>
        <button
          className="transition-transform duration-300 transform hover:scale-105 hover:font-bold py-2 px-4 rounded border-2"
          style={{
            background: "linear-gradient(to right, #FFF4F4, #F1C376)",
            color: "#1E201E",
            borderColor: "transparent",
            backgroundClip: "border-box",
            WebkitBackgroundClip: "text",
            backgroundOrigin: "border-box",
            backgroundSize: "200%",
            backgroundRepeat: "no-repeat",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "normal",
            padding: "16px 16px",
            borderImage: "linear-gradient(to right, #FFF4F4, #F1C376) 1",
            backgroundColor: "transparent",
            borderRadius: "40px",
            width: "182px",
            height: "67px",
            transition: "all 0.3s ease", // Added transition for smoother effect
          }}
        >
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default NavBar;
