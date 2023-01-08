import styled from "styled-components";
import { ControlButtonStyled } from "../styled";

export const PanControlStyled = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  width: 120px;
  height: 120px;
  cursor: move;

  &:before {
    position: absolute;
    top: 40px;
    left: 40px;
    width: 40px;
    height: 40px;
    background: #fff;
    content: " ";
  }
`;

export const PanTopControlStyled = styled(ControlButtonStyled)`
  top: 0px;
  left: 40px;

  &:before {
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: 1px;
    border-top: 2px solid rgba(0, 0, 0, 0.2);
    border-left: 2px solid rgba(0, 0, 0, 0.2);
    border-right: 2px solid rgba(0, 0, 0, 0.2);
    border-radius: 2px;
    content: " ";
  }
`;

export const PanBottomControlStyled = styled(ControlButtonStyled)`
  top: 80px;
  left: 40px;

  &:before {
    position: absolute;
    bottom: -2px;
    left: -2px;
    right: -2px;
    top: 1px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
    border-left: 2px solid rgba(0, 0, 0, 0.2);
    border-right: 2px solid rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    content: " ";
  }
`;
export const PanLeftControlStyled = styled(ControlButtonStyled)`
  top: 40px;
  left: 0px;

  &:before {
    position: absolute;
    bottom: -2px;
    left: -2px;
    right: 1px;
    top: -2px;
    border-top: 2px solid rgba(0, 0, 0, 0.2);
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
    border-left: 2px solid rgba(0, 0, 0, 0.2);
    border-radius: 2px;
    content: " ";
  }
`;
export const PanRightControlStyled = styled(ControlButtonStyled)`
  top: 40px;
  left: 80px;

  &:before {
    position: absolute;
    bottom: -2px;
    left: 1px;
    right: -2px;
    top: -2px;
    border-top: 2px solid rgba(0, 0, 0, 0.2);
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
    border-right: 2px solid rgba(0, 0, 0, 0.2);
    border-radius: 2px;
    content: " ";
  }
`;
export const PanCenterControlStyled = styled(ControlButtonStyled)`
  top: 40px;
  left: 40px;
`;
