import styled from "styled-components";

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

export const ZoomInControlStyled = styled.button`
  position: absolute;
  top: 0px;
  left: 0px;
  background: #fff;
  border: 0px solid transparent;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  opacity: 1;
  cursor: pointer;
`;

export const ZoomOutControlStyled = styled.button`
  position: absolute;
  width: 40px;
  bottom: 0px;
  left: 0px;
  background: #fff;
  border: 0px solid transparent;
  height: 40px;
  text-align: center;
  line-height: 40px;
  opacity: 1;
  cursor: pointer;
`;
