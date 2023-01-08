import styled from "styled-components";
import { ControlButtonStyled } from "../styled";

export const ZoomControlStyled = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 40px;
  height: 120px;
  background: #fff;

  &:before {
    position: absolute;
    top: -2px;
    left: -2px;
    width: 40px;
    height: 120px;
    border: 2px solid rgba(0, 0, 0, 0.2);
    border-radius: 2px;
    content: " ";
    opacity: 0.5;
  }
`;

export const ZoomInControlStyled = styled(ControlButtonStyled)`
  top: 0px;
  left: 0px;
`;

export const ZoomOutControlStyled = styled(ControlButtonStyled)`
  bottom: 0px;
  left: 0px;
`;
