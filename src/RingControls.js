import React from "react";

const RingControls = ({
  radius,
  weight,
  size,
  handleSetRadius,
  handleSetRingStyle,
  handleSetWeight,
  handleSetSize,
}) => {
  return (
    <fieldset>
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
          max={40}
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
        <div>
          <input
            type="radio"
            id="dashed"
            name="style"
            value="dashed"
            onInput={(e) => handleSetRingStyle(e.target.value)}
          />
          <label htmlFor="dashed"> Dashed</label>
          <input
            type="radio"
            id="dotted"
            name="style"
            value="dotted"
            onInput={(e) => handleSetRingStyle(e.target.value)}
          />
          <label htmlFor="dotted"> Dotted</label>
        </div>
        <div>
          <input
            type="radio"
            id="double"
            name="style"
            value="double"
            onInput={(e) => handleSetRingStyle(e.target.value)}
          />
          <label htmlFor="double"> Double</label>
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
