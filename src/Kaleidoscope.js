import styled, { keyframes } from "styled-components";
import "./App.css";

function Kaleidoscope({ colors, position, radius, ringStyle, weight, size }) {
  return (
    <Things
      colors={colors}
      position={position}
      radius={radius}
      ringStyle={ringStyle}
      weight={weight}
      size={size}
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
  transform: ${(p) =>
    p.position === `static` ? `translateY(0)` : `translateY(50%)`};
  position: relative;
  div {
    border-color: ${(p) => p.colors.color1} ${(p) => p.colors.color2}
      ${(p) => p.colors.color3} ${(p) => p.colors.color4};
    border-style: ${(p) => p.ringStyle};
    position: ${(p) => p.position};
    border-radius: ${(p) => p.radius + "%"};
    border-width: ${(p) => p.weight + "px"};
    height: ${(p) => p.size + "em"};
  }
`;

const Thing = styled.div`
  top: 1rem;
  display: flex;
  width: 100%;
  max-height: 50vh;
  justify-content: center;
  align-self: center;
  aspect-ratio: 1/1;
  margin: 5px;
  animation: ${kaledescopeAnimation} 45s cubic-bezier(0.35, -0.14, 0.79, 1.22)
    infinite;
  animation: ${kaledescopeAnimation} 45s cubic-bezier(0.75, -0.04, -0.89, 1.82)
    infinite;
`;

export default Kaleidoscope;
