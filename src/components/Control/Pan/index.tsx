import PanLeft from "./Left";
import PanCenter from "./Center";
import PanRight from "./Right";
import PanTop from "./Top";
import PanBottom from "./Bottom";
import { PanControlStyled } from "./styled";

const PanControl = () => {
  return (
    <PanControlStyled>
      <PanLeft />
      <PanTop />
      <PanRight />
      <PanBottom />
      <PanCenter />
    </PanControlStyled>
  );
};

export default PanControl;
