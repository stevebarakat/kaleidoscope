import React, { useState } from "react";
import Kaleidoscope from "./Kaleidoscope";
import Colors from "./Colors";

const App = () => {
  const [colors, setColors] = useState({
    color1: "#FF00FF",
    color2: "#FFFF00",
    color3: "#00FF00",
    color4: "#FF0000",
  });
  const handleSetColors = (colors) => setColors(colors);
  return (
    <div>
      {/* COLORS */}
      <Colors colors={colors} handleSetColors={handleSetColors} />
      <div
        style={{
          position: "absolute",
          // left: "0px",
          // transform: "rotate(90deg)",
        }}
      >
        <Kaleidoscope colors={colors} />
      </div>
      <div
        style={{
          position: "absolute",
          // left: "150px",
          transform: "rotate(90deg)",
        }}
      >
        {/* <Kaleidoscope colors={colors} /> */}
      </div>
      <div
        style={{
          position: "absolute",
          // left: "300px",
          transform: "rotate(180deg)",
        }}
      >
        {/* <Kaleidoscope colors={colors} /> */}
      </div>
      <div
        style={{
          position: "absolute",
          // left: "450px",
          transform: "rotate(270deg)",
        }}
      >
        {/* <Kaleidoscope colors={colors} /> */}
      </div>
    </div>
  );
};

export default App;
