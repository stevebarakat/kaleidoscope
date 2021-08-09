import React from "react";

const AreaControls = ({ handleSetPosition }) => {
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
        <label htmlFor="relative">Variant 1</label>
      </div>
      <div>
        <input
          type="radio"
          id="absolute"
          name="position"
          value="absolute"
          onInput={(e) => handleSetPosition(e.target.value)}
        />
        <label htmlFor="align">Variant 2</label>
      </div>
      <div>
        <input
          type="radio"
          id="align"
          name="position"
          value="align"
          onInput={(e) => handleSetPosition(e.target.value)}
        />
        <label htmlFor="align">Variant 3</label>
      </div>
    </fieldset>
  );
};

export default AreaControls;
