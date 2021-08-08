import styled, { keyframes } from "styled-components";
import "./App.css";

function Kaleidoscope({ colors }) {
  return (
    <Things colors={colors}>
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
                                  <Thing></Thing>
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
      {/* <Thing></Thing>
      <Thing></Thing>
      <Thing></Thing>
      <Thing></Thing>
      <Thing></Thing>
      <Thing></Thing>
      <Thing></Thing>
      <Thing></Thing>
      <Thing></Thing>
      <Thing></Thing>
      <Thing></Thing>
      <Thing></Thing>
      <Thing></Thing>
      <Thing></Thing>
      <Thing></Thing>
      <Thing></Thing>
      <Thing></Thing>
      <Thing></Thing>
      <Thing></Thing>
      <Thing></Thing>
      <Thing></Thing> */}
    </Things>
  );
}

const kaledescopeAnimation = keyframes` 100% {transform: rotateZ(1turn)} `;

const Things = styled.div`
  position: relative;
  div {
    border-color: ${(p) => p.colors.color1} ${(p) => p.colors.color2}
      ${(p) => p.colors.color3} ${(p) => p.colors.color4};
  }
`;

const Thing = styled.div`
  position: absolute;
  top: 1rem;
  display: flex;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin: 5px;
  border: 10px solid transparent;
  border-radius: 25%;
  animation: ${kaledescopeAnimation} 10s cubic-bezier(0.35, -0.14, 0.79, 1.22)
    infinite;
`;

export default Kaleidoscope;
