import styled from "styled-components";
import { mapHeight, mapWidth } from "../../configure";
import { CanvasProps } from "./Canvas";

export const CanvasWrapperStyled = styled.div`
  background: red;
  width: ${mapWidth};
  height: ${mapHeight};
`;

export const CanvasStyled = styled.canvas<CanvasProps>`
  background: blue;
  display: block;
  ${(props: CanvasProps) =>
    `width: ${props.width}px;height: ${props.height}px;`}
`;
