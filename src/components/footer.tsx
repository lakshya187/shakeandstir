import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#1E201E",
        height: "345px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
      }}
    >
      {/* Top Line */}
      <div
        style={{
          width: "940px",
          height: "1px",
          backgroundColor: "#FFFFFF", // White color for the line
          marginBottom: "20px", // Space below the line
        }}
      />

      <div className="flex justify-center w-full max-w-5xl space-x-10">
        {/* Left Side: Contact Number and Email */}
        <div className="text-right">
          <p
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "16px",
              color: "#fff",
              margin: "0",
            }}
          >
            Contact Number: +91 91111 43460
          </p>
          <p
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "16px",
              color: "#fff",
              margin: "0",
            }}
          >
            Email: info@shakesandstir.com
          </p>
        </div>

        {/* Right Side: Address */}
        <div className="text-left">
          <p
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "16px",
              color: "#fff",
              margin: "0",
            }}
          >
            4th Floor,
            <br /> 514, Vasant Enclave Block B <br /> New Delhi, India. 110070
          </p>
        </div>
      </div>

      {/* Copyright Text */}
      <div className="text-center" style={{ marginTop: "20px" }}>
        <p
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "14px",
            color: "#fff",
            margin: "0",
          }}
        >
          © 2024 by Shakes & Stir
        </p>
      </div>
    </footer>
  );
};

export default Footer;
