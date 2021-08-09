import React from "react";

const RingControls = ({
  radius,
  weight,
  size,
  speed,
  handleSetSpeed,
  handleSetRadius,
  handleSetRingStyle,
  handleSetWeight,
  handleSetSize,
}) => {
  return (
    <fieldset style={{ width: "300px" }}>
      <legend>Ring Controls</legend>
      {/* RING SHAPE */}
      <label htmlFor="radius">Shape: </label>
      <div className="flex">
        <input
          style={{ width: "100%" }}
          min={0}
          max={50}
          step="0"
          type="range"
          id="radius"
          name="radius"
          value={radius}
          defaultChecked
          onInput={(e) => handleSetRadius(e.target.value)}
        />
      </div>
      {/* END RING SHAPE */}
      {/* RING WEIGHT */}
      <label htmlFor="weight">Weight: </label>
      <div className="flex">
        <input
          style={{ width: "100%" }}
          min={1}
          max={50}
          step="0"
          type="range"
          id="weight"
          name="weight"
          value={weight}
          defaultChecked
          onInput={(e) => handleSetWeight(e.target.value)}
        />
      </div>
      {/* END RING WEIGHT */}
      {/* RING SIZE */}
      <label htmlFor="size">Size: </label>
      <div className="flex">
        <input
          style={{ width: "100%" }}
          min={1}
          max={100}
          step="0"
          type="range"
          id="size"
          name="size"
          value={size}
          defaultChecked
          onInput={(e) => handleSetSize(e.target.value)}
        />
      </div>
      {/* END RING SIZE */}
      {/* SPEED */}
      <label htmlFor="speed">Speed: </label>
      <div className="flex">
        <input
          style={{ width: "100%" }}
          min={10}
          max={50}
          step="0.1"
          type="range"
          id="speed"
          name="speed"
          value={speed}
          defaultChecked
          onInput={(e) => handleSetSpeed(e.target.value)}
        />
      </div>
      {/* END SPEED */}
      {/* RING STYLE */}
      <label>Style:</label>
      <div className="flex">
        <div className="flex">
          <input
            type="radio"
            id="solid"
            name="style"
            value="solid"
            defaultChecked
            onInput={(e) => handleSetRingStyle(e.target.value)}
          />
          <label htmlFor="solid"> Solid</label>
        </div>
        <div className="flex">
          <input
            type="radio"
            id="dashed"
            name="style"
            value="dashed"
            onInput={(e) => handleSetRingStyle(e.target.value)}
          />
          <label htmlFor="dashed"> Dashed</label>
        </div>
        <div className="flex">
          <input
            type="radio"
            id="dotted"
            name="style"
            value="dotted"
            onInput={(e) => handleSetRingStyle(e.target.value)}
          />
          <label htmlFor="dotted"> Dotted</label>
        </div>
        <div className="flex">
          <input
            type="radio"
            id="double"
            name="style"
            value="double"
            onInput={(e) => handleSetRingStyle(e.target.value)}
          />
          <label htmlFor="double"> Double</label>
        </div>
        <div className="flex">
          <input
            type="radio"
            id="groove"
            name="style"
            value="groove"
            onInput={(e) => handleSetRingStyle(e.target.value)}
          />
          <label htmlFor="groove"> Groovy</label>
        </div>
      </div>
      {/* END RING STYLE */}
    </fieldset>
  );
};

export default RingControls;
