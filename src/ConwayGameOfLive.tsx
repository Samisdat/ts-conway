import MainControl from "./components/Control/MainControl";
import Dump from "./components/dev/Dump";
import ConwayGameOfLiveStyled from "./ConwayGameOfLive.styled";
import { GlobalStyles } from "./styles/GlobalStyles";
import {MapProvider} from "./context/ConwayContext";

function ConwayGameOfLive() {
  return (
      <MapProvider>
    <ConwayGameOfLiveStyled>
      <MainControl />
      <Dump />
      <GlobalStyles />
    </ConwayGameOfLiveStyled>
      </MapProvider>
  );
}

export default ConwayGameOfLive;
