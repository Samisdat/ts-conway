import { FC, useEffect, useRef } from "react";
import { useMap } from "../../context/ConwayContext";
import { Types } from "../../context/reducers";
import Renderer from "./Renderer";

import { CanvasStyled } from "./styled";

export type CanvasProps = {
  width: number;
  height: number;
};

const Canvas: FC<CanvasProps> = ({ width, height }) => {
  const ref = useRef(null);

  const { state, dispatch } = useMap();

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const ctx = (ref.current as HTMLCanvasElement).getContext("2d");

    if (!ctx) {
      return;
    }

    dispatch({
      type: Types.Canvas,
      payload: {
        ctx,
      },
    });
  }, []);

  const renderer = state.ctx ? <Renderer /> : null;

  return (
    <CanvasStyled ref={ref} width={width} height={height}>
      {renderer}
    </CanvasStyled>
  );
};

export default Canvas;
