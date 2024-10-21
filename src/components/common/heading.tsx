const Heading = ({ color, text }: { color: string; text: string }) => {
  return (
    <strong>
      <h1
        className="text-4xl"
        style={{
          fontFamily: "Playfair, serif",
          fontSize: "48px",
          color: color,
        }}
      >
        {text}
      </h1>
    </strong>
  );
};

export default Heading;
