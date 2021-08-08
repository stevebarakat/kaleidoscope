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
    </Things>
  );
}

// const kaledescopeAnimation = keyframes`
//   0% {transform: rotate(-10deg)}
//   50% {transform: rotate(10deg)}
//   100% {transform: rotate(-10deg)}
// `;

const kaledescopeAnimation = keyframes` 
  100% {transform: rotate(1turn)}
`;

const Things = styled.div`
  position: relative;
  width: 250px;
  div {
    border-color: ${(p) => p.colors.color1} ${(p) => p.colors.color2}
      ${(p) => p.colors.color3} ${(p) => p.colors.color4};
  }
`;

const Thing = styled.div`
  position: absolute;
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
