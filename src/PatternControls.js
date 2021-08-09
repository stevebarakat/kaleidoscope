import React from "react";

const PatternControls = ({ params, handleSetParams }) => {
  return (
    <fieldset>
      <legend>Paramater Controls</legend>

      <label htmlFor="x1">x1</label>
      <input
        id="x1"
        type="range"
        min={-2}
        max={2}
        step={0.01}
        value={params.x1}
        onChange={(e) => handleSetParams({ ...params, x1: e.target.value })}
      />
      <label htmlFor="y1">y1</label>
      <input
        id="y1"
        type="range"
        min={-2}
        max={2}
        step={0.01}
        value={params.y1}
        onChange={(e) => handleSetParams({ ...params, y1: e.target.value })}
      />
      <label htmlFor="x2">x2</label>
      <input
        id="x2"
        type="range"
        min={-2}
        max={2}
        step={0.01}
        value={params.x2}
        onChange={(e) => handleSetParams({ ...params, x2: e.target.value })}
      />
      <label htmlFor="y2">y2</label>
      <input
        id="y2"
        type="range"
        min={-2}
        max={2}
        step={0.01}
        value={params.y2}
        onChange={(e) => handleSetParams({ ...params, y2: e.target.value })}
      />
    </fieldset>
  );
};

export default PatternControls;
