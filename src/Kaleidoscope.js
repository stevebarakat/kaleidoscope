import styled, { keyframes } from "styled-components";
import "./App.css";

function Kaleidoscope({ colors, position }) {
  return (
    <Things colors={colors} position={position}>
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
  100% {transform: rotate(1turn)}
`;

const Things = styled.div`
  position: relative;
  width: 250px;
  div {
    border-color: ${(p) => p.colors.color1} ${(p) => p.colors.color2}
      ${(p) => p.colors.color3} ${(p) => p.colors.color4};
    position: ${(p) => p.position};
  }
`;

const Thing = styled.div`
  top: 1rem;
  display: flex;
  width: 100%;
  /* height: 50px; */
  aspect-ratio: 1/1;
  justify-content: center;
  align-items: center;
  margin: 5px;
  border: 10px solid transparent;
  border-radius: 50%;
  animation: ${kaledescopeAnimation} 5s cubic-bezier(0.35, -0.14, 0.79, 1.22)
    infinite;
`;

export default Kaleidoscope;
