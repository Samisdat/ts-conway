import { useEffect, useState } from "react";
import { zoomMax, zoomStep } from "../../../configure";

import Control from "../Control";
import { ZoomInControlStyled } from "./styled";
import {useMap} from "../../../context/ConwayContext";
import {Types} from "../../../context/reducers";

const ZoomIn = () => {
  const {
    state: { map },
    dispatch,
  } = useMap();

  const [disabled, setDisabled] = useState<boolean>(false);

  useEffect(() => {
    if (false === disabled) {
      return;
    }

    if (map.zoom < zoomMax) {
      setDisabled(false);
    }
  }, [map.zoom]);

  const onClick = () => {

    let zoom = map.zoom + zoomStep;
    if (zoom >= zoomMax) {
      setDisabled(true);

      zoom = zoomMax;
    }
    dispatch({
      type: Types.Zoom,
      payload:{
        zoom
      }
    });
  };

  return (
    <ZoomInControlStyled disabled={disabled} onClick={onClick}>
      <Control controlType={"in"} />
    </ZoomInControlStyled>
  );
};

export default ZoomIn;
