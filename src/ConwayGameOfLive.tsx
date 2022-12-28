import MainControl from "./components/Control/MainControl";
import ConwayGameOfLiveStyled from "./ConwayGameOfLive.styled";
import { GlobalStyles } from "./styles/GlobalStyles";

function ConwayGameOfLive() {
  return (
    <ConwayGameOfLiveStyled>
      <MainControl />
      <GlobalStyles />
    </ConwayGameOfLiveStyled>
  );
}

export default ConwayGameOfLive;
