import { useEffect, useState } from "react";
import { zoomMax, zoomStep } from "../../../configure";

import Control from "../Control";
import { ZoomInControlStyled } from "./styled";
import {useMap} from "../../../context/ConwayContext";
import {Types} from "../../../context/reducers";

const ZoomIn = () => {
  const {
    state,
    dispatch,
  } = useMap();

  console.log(state)

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

    dispatch({
      type: Types.Add
    })

    /*
    let nextZoom = state.zoom + zoomStep;
    if (nextZoom >= zoomMax) {
      setDisabled(true);

      nextZoom = zoomMax;
    }
    dispatch({
      type: Types.Zoom,
      payload:{
        zoom: nextZoom
      }
    });*/
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
