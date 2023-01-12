import { useState } from "react";
import React from "react";
import Square from "./Square";
import Circle from "./Circle";
import Input from "./Input";
function App() {
  const [colorValue, setColorValue] = useState("");
  const [hexValue, setHexValue] = useState("");

  const [isDarkText, setIsDarkText] = useState(true);
  return (
    <div className="App">
      <Square
        colorValue={colorValue}
        hexValue={hexValue}
        isDarkText={isDarkText}
      ></Square>

      <Circle
        isDarkText={isDarkText}
        colorValue={colorValue}
        hexValue={hexValue}
      ></Circle>
      <Input
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      ></Input>
    </div>
  );
}

export default App;
