import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void; // Assuming src is a URL, you'll handle navigation via onClick
}

const CustomButton: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "#1E201E", // Button background color
        color: "#F1C376", // Button text color
        height: "50px", // Button height
        width: "160px", // Button width
        borderRadius: "8px", // Optional: Add some border-radius for smooth edges
        boxShadow: "0px 4px 24px rgba(0, 0, 0, 0.20)", // Box shadow with specified values
        fontFamily: "Poppins, sans-serif", // Optional: Ensuring font consistency
        fontSize: "16px", // Optional: Font size for button text
        cursor: "pointer", // Pointer on hover
        border: "none", // Remove default border
        transition: "background-color 0.3s ease, color 0.3s ease", // Smooth transition for color change
      }}
      onMouseEnter={(e) => {
        // Invert colors on hover
        e.currentTarget.style.backgroundColor = "#F1C376"; // New background color on hover
        e.currentTarget.style.color = "#1E201E"; // New text color on hover
      }}
      onMouseLeave={(e) => {
        // Revert to original colors
        e.currentTarget.style.backgroundColor = "#1E201E"; // Original background color
        e.currentTarget.style.color = "#F1C376"; // Original text color
      }}
    >
      {text}
    </button>
  );
};

export default CustomButton;
