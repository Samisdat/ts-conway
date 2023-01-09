import MainControl from "./components/Control/MainControl";
import Dump from "./components/dev/Dump";
import ConwayGameOfLiveStyled from "./ConwayGameOfLive.styled";
import { GlobalStyles } from "./styles/GlobalStyles";
import { MapProvider } from "./context/ConwayContext";
import CanvasWrapper from "./components/Canvas/Wrapper";

function ConwayGameOfLive() {
  return (
    <MapProvider>
      <ConwayGameOfLiveStyled>
        <CanvasWrapper />
        <MainControl />
        <Dump />
        <GlobalStyles />
      </ConwayGameOfLiveStyled>
    </MapProvider>
  );
}

export default ConwayGameOfLive;
