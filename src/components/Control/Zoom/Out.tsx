import { useEffect, useState } from "react";
import { zoomMin, zoomStep } from "../../../configure";
import { useMap } from "../../../context/ConwayContext";
import Control from "../Control";
import { ZoomOutControlStyled } from "./styled";
import {Types} from "../../../context/reducers";

const ZoomOut = () => {
  const {
    state: { map },
    dispatch,
  } = useMap();

  const [disabled, setDisabled] = useState<boolean>(false);

  useEffect(() => {
    if (false === disabled) {
      return;
    }

    if (map.zoom > zoomMin) {
      setDisabled(false);
    }
  }, [map.zoom]);

  const onClick = () => {
    let zoom = map.zoom - zoomStep;
    if (zoom <= zoomMin) {
      setDisabled(true);

      zoom = zoomMin;
    }

    dispatch({
      type: Types.Zoom,
      payload:{
        zoom
      }
    });

  };

  return (
    <ZoomOutControlStyled disabled={disabled} onClick={onClick}>
      <Control controlType={"out"} />
    </ZoomOutControlStyled>
  );
};

export default ZoomOut;
