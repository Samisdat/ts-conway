import { useMap } from "../../context/ConwayContext";

const Dump = () => {
  const {
    state: { map },
  } = useMap();
  const x = 0;

  return (
    <dl>
      <dt>Zoom</dt>
      <dd>{map.zoom}</dd>
      <dt>X</dt>
      <dd>{x}</dd>
    </dl>
  );
};

export default Dump;
