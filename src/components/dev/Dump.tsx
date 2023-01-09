import { useMap } from "../../context/ConwayContext";
import { DumpStyled } from "./styled";

const Dump = () => {
  const { state } = useMap();

  return (
    <DumpStyled>
      <dl>
        <dt>Zoom</dt>
        <dd>{state.zoom}</dd>
        <dt>Left</dt>
        <dd>{state.left}</dd>
        <dt>Top</dt>
        <dd>{state.top}</dd>
        <dt>with</dt>
        <dd>{state.width}</dd>
        <dt>height</dt>
        <dd>{state.height}</dd>
        <dt>ready</dt>
        <dd>{state.ready}</dd>
      </dl>
    </DumpStyled>
  );
};

export default Dump;
