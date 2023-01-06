import { zoomMax, zoomMin, zoomStep } from "../../configure";
import { useMap } from "../../context/ConwayContext";
import Control from "./Control";
import {
  ZoomInControlStyled,
  ZoomControlStyled,
  ZoomOutControlStyled,
} from "./ZoomControlStyled";

const ZoomControl = () => {
  const {
    state: { zoom },
    dispatch,
  } = useMap();

  const zoomOut = () => {
    let nextZoom = zoom - zoomStep;
    if (nextZoom < zoomMin) {
      nextZoom = zoomMin;
    }

    dispatch({
      type: "SET_ZOOM",
      zoom: nextZoom,
    });
  };

  const zoomIn = () => {
    let nextZoom = zoom + zoomStep;
    if (nextZoom > zoomMax) {
      nextZoom = zoomMax;
    }

    dispatch({
      type: "SET_ZOOM",
      zoom: nextZoom,
    });
  };

  return (
    <ZoomControlStyled>
      <ZoomInControlStyled onClick={zoomIn}>
        <Control controlType={"in"} />
      </ZoomInControlStyled>
      <ZoomOutControlStyled onClick={zoomOut}>
        <Control controlType={"out"} />
      </ZoomOutControlStyled>
    </ZoomControlStyled>
  );
};

export default ZoomControl;
