import styled from "styled-components";
import { ControlStyled } from "./ControllStyled";

export const ZoomControlStyled = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 40px;
  height: 120px;
  background: #fff;
  /*
  &:before {
    position: absolute;
    top: -3px;
    left: -3px;
    width: 40px;
    height: 120px;
    border: 2px solid rgba(0, 0, 0, 0.2);
    border-radius: 2px;
    content: " ";
  }
  */
`;

export const ZoomInControlStyled = styled(ControlStyled)`
  position: absolute;
  top: 0px;
  left: 0px;
  border: 1px solid red;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  opacity: 1;
  cursor: pointer;
`;

export const ZoomOutControlStyled = styled(ControlStyled)`
  position: absolute;
  width: 40px;
  bottom: 0px;
  left: 0px;
  border: 1px solid red;
  height: 40px;
  text-align: center;
  line-height: 40px;
  opacity: 1;
  cursor: pointer;
`;
