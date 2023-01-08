import { useState } from "react";
import { panStep } from "../../../configure";
import { useMap } from "../../../context/ConwayContext";
import { Types } from "../../../context/reducers";
import Icon from "../Icon";
import { PanTopControlStyled } from "./styled";

const PanTop = () => {
  const { state, dispatch } = useMap();

  const [disabled, setDisabled] = useState<boolean>(false);
  /*
    useEffect(() => {
        if (false === disabled) {
            return;
        }

        if (state.zoom < zoomMax) {
            setDisabled(false);
        }
    }, [state.zoom]);
    */
  const onClick = () => {
    let top = state.top - panStep;
    /*
        if (left >= panMax) {
            setDisabled(true);

            left = panMax;
        }
         */
    dispatch({
      type: Types.Pan,
      payload: {
        left: state.left,
        top: top,
      },
    });
  };

  return (
    <PanTopControlStyled disabled={disabled} onClick={onClick}>
      <Icon icon={"up"} />
    </PanTopControlStyled>
  );
};

export default PanTop;
