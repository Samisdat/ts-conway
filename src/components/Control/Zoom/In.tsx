import { useEffect, useState } from "react";
import { zoomMax, zoomStep } from "../../../configure";
import { useMap } from "../../../context/ConwayContext";
import Control from "../Control";
import { ZoomInControlStyled } from "./styled";
import {Types} from "../../../context/reducers";
const ZoomIn = () => {
  const {
    state: { zoom },
    dispatch,
  } = useMap();

  const [disabled, setDisabled] = useState<boolean>(false);

  useEffect(() => {
    if (false === disabled) {
      return;
    }

    if (zoom < zoomMax) {
      setDisabled(false);
    }
  }, [zoom]);

  const onClick = () => {
    let nextZoom = zoom + zoomStep;
    if (nextZoom >= zoomMax) {
      setDisabled(true);

      nextZoom = zoomMax;
    }
    dispatch({
      type: Types.Add
    });
  /*
    dispatch({
      type: "SET_ZOOM",
      payload: {
        zoom: nextZoom,
      },
    });

   */
  };

  return (
    <ZoomInControlStyled disabled={disabled} onClick={onClick}>
      <Control controlType={"in"} />
    </ZoomInControlStyled>
  );
};

export default ZoomIn;
