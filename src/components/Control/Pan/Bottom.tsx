import { useState } from "react";
import { panStep } from "../../../configure";

import { useMap } from "../../../context/ConwayContext";
import { Types } from "../../../context/reducers";
import { PanBottomControlStyled } from "./styled";
import Icon from "../Icon";

const PanBottom = () => {
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
    let top = state.top + panStep;
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
        top,
      },
    });
  };

  return (
    <PanBottomControlStyled disabled={disabled} onClick={onClick}>
      <Icon icon={"down"} />
    </PanBottomControlStyled>
  );
};

export default PanBottom;
