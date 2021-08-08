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
  const [position, setPosition] = useState("relative");
  const handleSetColors = (colors) => setColors(colors);
  return (
    <div>
      <div>
        <input
          type="radio"
          id="relative"
          name="position"
          value="relative"
          defaultChecked
          onInput={(e) => setPosition(e.target.value)}
        />
        <label htmlFor="relative">relative</label>
      </div>
      {console.log(position)}
      <div>
        <input
          type="radio"
          id="absolute"
          name="position"
          value="absolute"
          onInput={(e) => setPosition(e.target.value)}
        />
        <label htmlFor="absolute">absolute</label>
      </div>
      <Colors colors={colors} handleSetColors={handleSetColors} />
      <Kaleidoscope colors={colors} position={position} />
    </div>
  );
};

export default App;
