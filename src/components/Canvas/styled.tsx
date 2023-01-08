import styled from "styled-components";
import { mapHeight, mapWidth } from "../../configure";

export const CanvasStyled = styled.canvas`
  border: 1px solid red;
  display: block;
  width: ${mapWidth};
  height: ${mapHeight};
`;
