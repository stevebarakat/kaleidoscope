import styled, { keyframes } from "styled-components";
import "./App.css";

function Kaleidoscope({ colors, position, radius, ringStyle }) {
  return (
    <Things
      colors={colors}
      position={position}
      radius={radius}
      ringStyle={ringStyle}
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
  100% {transform: rotate(5turn)}
`;

const Things = styled.div`
  position: relative;
  width: 250px;
  div {
    border-color: ${(p) => p.colors.color1} ${(p) => p.colors.color2}
      ${(p) => p.colors.color3} ${(p) => p.colors.color4};
    border-style: ${(p) => p.ringStyle};
    position: ${(p) => p.position};
    border-radius: ${(p) => p.radius + "%"};
  }
`;

const Thing = styled.div`
  top: 1rem;
  display: flex;
  width: 100%;
  /* height: 50px; */
  aspect-ratio: 1/1;
  /* justify-content: center; */
  align-items: center;
  margin: 5px;
  border: 10px dashed transparent;
  animation: ${kaledescopeAnimation} 45s cubic-bezier(0.35, -0.14, 0.79, 1.22)
    infinite;
`;

export default Kaleidoscope;
