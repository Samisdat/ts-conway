import styled from "styled-components";

export const PanControlStyled = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  width: 90px;
  height: 90px;
  cursor: move;

  &:before {
    position: absolute;
    top: 30px;
    left: 30px;
    width: 30px;
    height: 30px;
    background: #fff;
    content: " ";
  }
`;

const APanControlStyled = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  background: #fff;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
  opacity: 1;
`;

export const PanTopControlStyled = styled(APanControlStyled)`
  top: 0px;
  left: 30px;

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

export const PanBottomControlStyled = styled(APanControlStyled)`
  top: 60px;
  left: 30px;

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
export const PanLeftControlStyled = styled(APanControlStyled)`
  top: 30px;
  left: 00px;

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
export const PanRightControlStyled = styled(APanControlStyled)`
  top: 30px;
  left: 60px;

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
export const PanCenterControlStyled = styled(APanControlStyled)`
  top: 30px;
  left: 30px;
`;
