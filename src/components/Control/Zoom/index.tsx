import ZoomIn from "./In";
import ZoomOut from "./Out";
import { ZoomControlStyled } from "./styled";

const ZoomControl = () => {
  return (
    <ZoomControlStyled>
      <ZoomIn />
      <ZoomOut />
    </ZoomControlStyled>
  );
};

export default ZoomControl;
