import { useEffect, useRef, ReactNode, FC } from "react";
import { useMap } from "../../context/ConwayContext";
import { Types } from "../../context/reducers";
import Canvas from "./Canvas";

import { CanvasWrapperStyled } from "./styled";

const CanvasWrapper: FC = () => {
  const ref = useRef(null);

  const { state, dispatch } = useMap();

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const width = (ref.current as HTMLCanvasElement).clientWidth;
    const height = (ref.current as HTMLCanvasElement).clientHeight;

    dispatch({
      type: Types.Dimension,
      payload: {
        width,
        height,
      },
    });
  }, []);

  const getCanvas = () => {
    if (!state.width || !state.height) {
      return null;
    }

    return <Canvas width={state.width} height={state.height} />;
  };

  const canvas = getCanvas();

  return <CanvasWrapperStyled ref={ref}>{canvas}</CanvasWrapperStyled>;
};

export default CanvasWrapper;
