import styled from "styled-components";
import GlobalStyle from "./componets/Globalstyles";
import Cabecera from "./componets/Cabecera";
import BarraLateral from "./componets/BarraLateral";

function App() {
  //style componets
  const FondoGradient = styled.div`
    background: linear-gradient(
      175deg,
      #041833 4.16%,
      #04244f 48%,
      #154580 96.76%
    );
    width: 100%;
    height: 100vh;
  `;

  return (
    <>
      <FondoGradient>
        <GlobalStyle />
        <Cabecera />
        <BarraLateral/>
      </FondoGradient>
    </>
  );
}

export default App;
