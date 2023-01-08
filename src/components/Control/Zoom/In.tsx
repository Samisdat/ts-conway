import { useEffect, useState } from "react";
import { zoomMax, zoomStep } from "../../../configure";

import { ZoomInControlStyled } from "./styled";
import { useMap } from "../../../context/ConwayContext";
import { Types } from "../../../context/reducers";
import Icon from "../Icon";

const ZoomIn = () => {
  const { state, dispatch } = useMap();

  const [disabled, setDisabled] = useState<boolean>(false);

  useEffect(() => {
    if (false === disabled) {
      return;
    }

    if (state.zoom < zoomMax) {
      setDisabled(false);
    }
  }, [state.zoom]);

  const onClick = () => {
    let zoom = state.zoom + zoomStep;
    if (zoom >= zoomMax) {
      setDisabled(true);

      zoom = zoomMax;
    }
    dispatch({
      type: Types.Zoom,
      payload: {
        zoom,
      },
    });
  };

  return (
    <ZoomInControlStyled disabled={disabled} onClick={onClick}>
      <Icon icon={"in"} />
    </ZoomInControlStyled>
  );
};

export default ZoomIn;
