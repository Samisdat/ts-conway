import { useEffect, useState } from "react";
import { zoomMin, zoomStep } from "../../../configure";
import { useMap } from "../../../context/ConwayContext";
import Control from "../Control";
import { ZoomOutControlStyled } from "./styled";

const ZoomOut = () => {
  const {
    state: { zoom },
    dispatch,
  } = useMap();

  const [disabled, setDisabled] = useState<boolean>(false);

  useEffect(() => {
    if (false === disabled) {
      return;
    }

    if (zoom > zoomMin) {
      setDisabled(false);
    }
  }, [zoom]);

  const onClick = () => {
    let nextZoom = zoom - zoomStep;
    if (nextZoom <= zoomMin) {
      setDisabled(true);

      nextZoom = zoomMin;
    }

    dispatch({
      type: "SET_ZOOM",
      zoom: nextZoom,
    });
  };

  return (
    <ZoomOutControlStyled disabled={disabled} onClick={onClick}>
      <Control controlType={"out"} />
    </ZoomOutControlStyled>
  );
};

export default ZoomOut;
