import styled from "styled-components";
import { mapHeight, mapWidth } from "./configure";

const ConwayGameOfLiveStyled = styled.div`
  position: relative;
  top: 0px;
  left: 0px;
  width: ${mapWidth};
  height: ${mapHeight};
  background: #dce2c8;
  background: yellow;
  margin: 0px;
  float: left;
`;

export default ConwayGameOfLiveStyled;
