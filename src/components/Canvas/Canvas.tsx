import { render } from "@testing-library/react";
import { useEffect, useRef } from "react";
import { useMap } from "../../context/ConwayContext";
import { Types } from "../../context/reducers";
import frameRenderer from "./frameRenderer";
import Renderer from "./Renderer";

import { CanvasStyled } from "./styled";

const Canvas = () => {
  const ref = useRef(null);

  const { state, dispatch } = useMap();
  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const width = (ref.current as HTMLCanvasElement).clientWidth;
    const height = (ref.current as HTMLCanvasElement).clientHeight;

    const ctx = (ref.current as HTMLCanvasElement).getContext("2d");

    if (!ctx) {
      return;
    }

    dispatch({
      type: Types.Canvas,
      payload: {
        width,
        height,
        ctx,
      },
    });
  }, []);

  const renderer = state.ready ? <Renderer /> : null;

  return <CanvasStyled ref={ref}>{renderer}</CanvasStyled>;
};

export default Canvas;
