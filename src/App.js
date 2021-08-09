import React, { useState } from "react";
import Kaleidoscope from "./Kaleidoscope";
import Colors from "./Colors";
import RingControls from "./RingControls";
import AreaControls from "./AreaControls";

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
  const [weight, setWeight] = useState(15);
  const handleSetWeight = (weight) => setWeight(weight);
  const [size, setSize] = useState(15);
  const handleSetSize = (size) => setSize(size);

  return (
    <div style={{ width: "100vw" }}>
      <div className="control-panel">
        <Colors colors={colors} handleSetColors={handleSetColors} />
        <RingControls
          radius={radius}
          handleSetRadius={handleSetRadius}
          handleSetRingStyle={handleSetRingStyle}
          handleSetWeight={handleSetWeight}
          handleSetSize={handleSetSize}
          size={size}
          weight={weight}
        />
        <AreaControls handleSetPosition={handleSetPosition} />
      </div>
      <div className="flex">
        <Kaleidoscope
          style={{ justifyContent: "center", margin: "0 auto" }}
          colors={colors}
          position={position}
          radius={radius}
          ringStyle={ringStyle}
          weight={weight}
          size={size}
        />
      </div>
    </div>
  );
};

export default App;
