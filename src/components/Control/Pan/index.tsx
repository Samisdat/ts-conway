import Control from "../Control";
import {
  PanBottomControlStyled,
  PanCenterControlStyled,
  PanControlStyled,
  PanLeftControlStyled,
  PanRightControlStyled,
  PanTopControlStyled,
} from "./styled";

const PanControl = () => {
  return (
    <PanControlStyled>
      <PanLeftControlStyled>
        <Control controlType={"left"} />
      </PanLeftControlStyled>
      <PanTopControlStyled>
        <Control controlType={"up"} />
      </PanTopControlStyled>
      <PanRightControlStyled>
        <Control controlType={"right"} />
      </PanRightControlStyled>
      <PanBottomControlStyled>
        <Control controlType={"down"} />
      </PanBottomControlStyled>
      <PanCenterControlStyled>
        <Control controlType={"center"} />
      </PanCenterControlStyled>
    </PanControlStyled>
  );
};

export default PanControl;
