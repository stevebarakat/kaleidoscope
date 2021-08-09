import styled, { keyframes } from "styled-components";
import "./App.css";

function Kaleidoscope({
  colors,
  position,
  radius,
  ringStyle,
  weight,
  size,
  speed,
  params,
}) {
  return (
    <Things
      colors={colors}
      params={params}
      position={position}
      radius={radius}
      ringStyle={ringStyle}
      weight={weight}
      size={size}
      speed={speed}
    >
      <Thing>
        <Thing>
          <Thing>
            <Thing>
              <Thing>
                <Thing>
                  <Thing>
                    <Thing>
                      <Thing>
                        <Thing>
                          <Thing>
                            <Thing>
                              <Thing>
                                <Thing>
                                  <Thing />
                                </Thing>
                              </Thing>
                            </Thing>
                          </Thing>
                        </Thing>
                      </Thing>
                    </Thing>
                  </Thing>
                </Thing>
              </Thing>
            </Thing>
          </Thing>
        </Thing>
      </Thing>
    </Things>
  );
}

const kaledescopeAnimation = keyframes` 
  100% {transform: rotate(3turn)}
`;

const Things = styled.div`
  position: relative;
  /* margin-top: -550px; */
  div {
    border-color: ${(p) => p.colors.color1} ${(p) => p.colors.color2}
      ${(p) => p.colors.color3} ${(p) => p.colors.color4};
    align-self: ${(p) => (p.position === "align" ? "center" : "revert")};
    border-style: ${(p) => p.ringStyle};
    position: ${(p) => p.position};
    border-radius: ${(p) => p.radius + "%"};
    border-width: ${(p) => p.weight + "px"};
    height: ${(p) => p.size + "em"};
    animation: ${kaledescopeAnimation};
    animation-timing-function: cubic-bezier(0.35, -0.14, 0.79, 1.22);
    animation-duration: ${({ speed }) => parseFloat(speed) + "s"};
    animation-iteration-count: infinite;
  }
`;

const Thing = styled.div`
  transition: all 1.5s ease-in;
  display: flex;
  width: 100%;
  max-height: 50vh;
  justify-content: center;
  aspect-ratio: 1/1;
  margin: 0.25rem;
`;

export default Kaleidoscope;
