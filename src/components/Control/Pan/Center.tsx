import { useMap } from "../../../context/ConwayContext";
import { Types } from "../../../context/reducers";
import { PanCenterControlStyled } from "./styled";
import Icon from "../Icon";

const PanCenter = () => {
  const { dispatch } = useMap();

  const onClick = () => {
    dispatch({
      type: Types.Pan,
      payload: {
        left: 0,
        top: 0,
      },
    });
  };

  return (
    <PanCenterControlStyled onClick={onClick}>
      <Icon icon={"center"} />
    </PanCenterControlStyled>
  );
};

export default PanCenter;
