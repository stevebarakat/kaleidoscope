import React from "react";

const Radius = ({ radius, handleSetRadius, handleSetRingStyle }) => {
  return (
    <fieldset>
      <legend>Ring Controls</legend>
      {/* RING SHAPE */}
      <div className="flex">
        <label htmlFor="radius">Ring&nbsp;Shape: </label>
        <input
          style={{ width: "100%" }}
          min={0}
          max={50}
          type="range"
          id="radius"
          name="radius"
          value={radius}
          defaultChecked
          onInput={(e) => handleSetRadius(e.target.value)}
        />
      </div>
      {/* END RING SHAPE */}
      {/* RING STYLE */}
      <div>
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
          defaultChecked
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
          defaultChecked
          onInput={(e) => handleSetRingStyle(e.target.value)}
        />
        <label htmlFor="groove"> Groovy</label>
      </div>
      {/* END RING STYLE */}
    </fieldset>
  );
};

export default Radius;
