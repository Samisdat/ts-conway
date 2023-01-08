import { useState } from "react";
import { panStep } from "../../../configure";

import { useMap } from "../../../context/ConwayContext";
import { Types } from "../../../context/reducers";
import { PanLeftControlStyled } from "./styled";
import Icon from "../Icon";

const PanLeft = () => {
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
    let left = state.left - panStep;
    /*
        if (left >= panMax) {
            setDisabled(true);

            left = panMax;
        }
         */
    dispatch({
      type: Types.Pan,
      payload: {
        left,
        top: state.top,
      },
    });
  };

  return (
    <PanLeftControlStyled disabled={disabled} onClick={onClick}>
      <Icon icon={"left"} />
    </PanLeftControlStyled>
  );
};

export default PanLeft;
