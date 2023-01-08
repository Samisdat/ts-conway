import MainControl from "./components/Control/MainControl";
import Dump from "./components/dev/Dump";
import ConwayGameOfLiveStyled from "./ConwayGameOfLive.styled";
import { GlobalStyles } from "./styles/GlobalStyles";
import { MapProvider } from "./context/ConwayContext";
import Canvas from "./components/Canvas/Canvas";

function ConwayGameOfLive() {
  return (
    <MapProvider>
      <ConwayGameOfLiveStyled>
        <Canvas />
        <MainControl />
        <Dump />
        <GlobalStyles />
      </ConwayGameOfLiveStyled>
    </MapProvider>
  );
}

export default ConwayGameOfLive;
