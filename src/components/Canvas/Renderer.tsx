import { useEffect, useRef } from "react";
import { useMap } from "../../context/ConwayContext";
import frameRenderer from "./frameRenderer";

const Renderer = () => {

    const { state, dispatch } = useMap();

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
        if(!state.width || !state.height){
            return;
        }

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

    return null;
};

export default Renderer;
