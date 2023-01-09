import { useMap } from "../../context/ConwayContext";

const Dump = () => {
  const {
    state: { shoppingCart },
  } = useMap();
  const x = 0;

  return (
    <dl>
      <dt>Zoom</dt>
      <dd>{shoppingCart}</dd>
      <dt>X</dt>
      <dd>{x}</dd>
    </dl>
  );
};

export default Dump;
