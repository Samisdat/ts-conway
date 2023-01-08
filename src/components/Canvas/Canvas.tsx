import { useEffect, useRef } from "react";
import { useMap } from "../../context/ConwayContext";
import { Types } from "../../context/reducers";
import frameRenderer from "./frameRenderer";

import { CanvasStyled } from "./styled";

const Canvas = () => {
  const ref = useRef(null);

  const requestIdRef = useRef<number>(null);

  const { state, dispatch } = useMap();
  useEffect(() => {
    if (!ref.current) {
      return;
    }

    console.log("foo");

    const width = (ref.current as HTMLCanvasElement).clientWidth;
    const height = (ref.current as HTMLCanvasElement).clientHeight;
    console.log(width, height);

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

  const ballRef = useRef({ x: 50, y: 50, vx: 3.9, vy: 3.3, radius: 20 });
  const size = { width: 400, height: 250 };

  const updateBall = () => {
    const ball = ballRef.current;
    ball.x += ball.vx;
    ball.y += ball.vy;
    if (ball.x + ball.radius >= size.width) {
      ball.vx = -ball.vx;
      ball.x = size.width - ball.radius;
    }
    if (ball.x - ball.radius <= 0) {
      ball.vx = -ball.vx;
      ball.x = ball.radius;
    }
    if (ball.y + ball.radius >= size.height) {
      ball.vy = -ball.vy;
      ball.y = size.height - ball.radius;
    }
    if (ball.y - ball.radius <= 0) {
      ball.vy = -ball.vy;
      ball.y = ball.radius;
    }
  };

  const renderFrame = () => {
    updateBall();
    frameRenderer.call(state.ctx, state.width, state.height, ballRef.current);
  };

  const tick = () => {
    renderFrame();
    requestAnimationFrame(tick);
  };

  useEffect(() => {
    if (!state.ctx) {
      return;
    }

    requestAnimationFrame(tick);
  }, [state.ctx]);

  return <CanvasStyled ref={ref} />;
};

export default Canvas;
