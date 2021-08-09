import React from "react";

const Position = ({ handleSetPosition }) => {
  return (
    <fieldset>
      <legend>Area Controls</legend>
      <div>
        <input
          type="radio"
          id="relative"
          name="position"
          value="relative"
          defaultChecked
          onInput={(e) => handleSetPosition(e.target.value)}
        />
        <label htmlFor="relative">relative</label>
      </div>
      <div>
        <input
          type="radio"
          id="absolute"
          name="position"
          value="absolute"
          onInput={(e) => handleSetPosition(e.target.value)}
        />
        <label htmlFor="absolute">absolute</label>
      </div>
    </fieldset>
  );
};

export default Position;
