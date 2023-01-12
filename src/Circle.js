import React from "react";

const Circle = ({ colorValue, hexValue, isDarkText }) => {
  return (
    <section
      className="circle"
      style={{
        backgroundColor: colorValue,
        color: isDarkText ? "#000" : "#FFF",
      }}
    >
      <p>{colorValue ? colorValue : "Empty Value"}</p>
      <p>{hexValue ? hexValue : null}</p>
    </section>
  );
};

Circle.defaultProps = {
  colorValue: "white",
};
export default Circle;
