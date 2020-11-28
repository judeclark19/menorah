//Components
import styled from "styled-components";

//images
import MenorahFull from "./images/Menorah-full.svg";

function App() {
  return (
    <AppDiv>
      <MenorahImg>
        <img src={MenorahFull}></img>
      </MenorahImg>
    </AppDiv>
  );
}

const AppDiv = styled.div`
  /* border: 3px dashed orange; */
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(180deg, #252a26, #1c211d);
`;

const MenorahImg = styled.div`
  height: 80%;
  /* max-width: 100vw; */
  /* border: 2px solid red; */
  img {
    height: 100%;
    object-fit: cover;
  }
`;

export default App;
