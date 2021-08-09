import React from "react";

const ColorControls = ({ colors, handleSetColors }) => {
  return (
    <div className="flex">
      <fieldset>
        <legend>Color Controls</legend>
        <div className="flex" style={{ justifyContent: "flex-start" }}>
          <div className="flexY">
            <label htmlFor="color1">Color1</label>
            <input
              id="color1"
              type="color"
              value={colors.color1}
              onChange={(e) =>
                handleSetColors({ ...colors, color1: e.target.value })
              }
            />
          </div>
          <div className="flexY">
            <label htmlFor="color2">Color2</label>
            <input
              id="color2"
              type="color"
              value={colors.color2}
              onChange={(e) =>
                handleSetColors({ ...colors, color2: e.target.value })
              }
            />
          </div>
          <div className="flexY">
            <label htmlFor="color3">Color3</label>
            <input
              id="color3"
              type="color"
              value={colors.color3}
              onChange={(e) =>
                handleSetColors({ ...colors, color3: e.target.value })
              }
            />
          </div>
          <div className="flexY">
            <label htmlFor="color4">Color4</label>
            <input
              id="color4"
              type="color"
              value={colors.color4}
              onChange={(e) =>
                handleSetColors({ ...colors, color4: e.target.value })
              }
            />
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default ColorControls;
