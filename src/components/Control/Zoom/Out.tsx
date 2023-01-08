import { useEffect, useState } from "react";
import { zoomMin, zoomStep } from "../../../configure";
import { useMap } from "../../../context/ConwayContext";
import { ZoomOutControlStyled } from "./styled";
import { Types } from "../../../context/reducers";
import Icon from "../Icon";

const ZoomOut = () => {
  const { state, dispatch } = useMap();

  const [disabled, setDisabled] = useState<boolean>(false);

  useEffect(() => {
    if (false === disabled) {
      return;
    }

    if (state.zoom > zoomMin) {
      setDisabled(false);
    }
  }, [state.zoom]);

  const onClick = () => {
    let zoom = state.zoom - zoomStep;
    if (zoom <= zoomMin) {
      setDisabled(true);

      zoom = zoomMin;
    }

    dispatch({
      type: Types.Zoom,
      payload: {
        zoom,
      },
    });
  };

  return (
    <ZoomOutControlStyled disabled={disabled} onClick={onClick}>
      <Icon icon={"out"} />
    </ZoomOutControlStyled>
  );
};

export default ZoomOut;
