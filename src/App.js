import React, { useState } from "react";
import Kaleidoscope from "./Kaleidoscope";

const App = () => {
  const [colors, setColors] = useState({
    color1: "#FF00FF",
    color2: "#FFFF00",
    color3: "#00FF00",
    color4: "#FF0000",
  });
  return (
    <div>
      {/* COLORS */}
      <fieldset>
        <label htmlFor="color1">Color1</label>
        <input
          id="color1"
          type="color"
          value={colors.color1}
          onChange={(e) => setColors({ ...colors, color1: e.target.value })}
        />
        <label htmlFor="color2">Color2</label>
        <input
          id="color2"
          type="color"
          value={colors.color2}
          onChange={(e) => setColors({ ...colors, color2: e.target.value })}
        />
        <label htmlFor="color3">Color3</label>
        <input
          id="color3"
          type="color"
          value={colors.color3}
          onChange={(e) => setColors({ ...colors, color3: e.target.value })}
        />
        <label htmlFor="color4">Color4</label>
        <input
          id="color4"
          type="color"
          value={colors.color4}
          onChange={(e) => setColors({ ...colors, color4: e.target.value })}
        />
      </fieldset>
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
