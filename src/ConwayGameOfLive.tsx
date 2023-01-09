import MainControl from "./components/Control/MainControl";
import Dump from "./components/dev/Dump";
import ConwayGameOfLiveStyled from "./ConwayGameOfLive.styled";
import { GlobalStyles } from "./styles/GlobalStyles";
import {AppProvider} from "./context/ConwayContext";

function ConwayGameOfLive() {
  return (
      <AppProvider>
    <ConwayGameOfLiveStyled>
      <MainControl />
      <Dump />
      <GlobalStyles />
    </ConwayGameOfLiveStyled>
      </AppProvider>
  );
}

export default ConwayGameOfLive;
