import React, { useState } from "react";
import Kaleidoscope from "./Kaleidoscope";
import Colors from "./Colors";
import Radius from "./Radius";
import Position from "./Position";

const App = () => {
  const [colors, setColors] = useState({
    color1: "#FF00FF",
    color2: "#FFFF00",
    color3: "#00FF00",
    color4: "#FF0000",
  });
  const handleSetColors = (colors) => setColors(colors);
  const [radius, setRadius] = useState(15);
  const handleSetRadius = (radius) => setRadius(radius);
  const [position, setPosition] = useState("relative");
  const handleSetPosition = (position) => setPosition(position);
  const [ringStyle, setRingStyle] = useState("solid");
  const handleSetRingStyle = (style) => setRingStyle(style);

  return (
    <div>
      <Colors colors={colors} handleSetColors={handleSetColors} />
      <Radius
        radius={radius}
        handleSetRadius={handleSetRadius}
        handleSetRingStyle={handleSetRingStyle}
      />
      <Position handleSetPosition={handleSetPosition} />
      <Kaleidoscope
        colors={colors}
        position={position}
        radius={radius}
        ringStyle={ringStyle}
      />
    </div>
  );
};

export default App;
