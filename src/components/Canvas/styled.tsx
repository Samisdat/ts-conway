import styled from "styled-components";
import { mapHeight, mapWidth } from "../../configure";

export const CanvasStyled = styled.canvas`
  display: block;
  width: ${mapWidth};
  height: ${mapHeight};
`;
