import {useMap} from "../../context/ConwayContext";

const Dump = () => {
    const {
        state: {zoom},
        dispatch
    } = useMap();

    return (
    <dl>
      <dt>Zoom</dt>
      <dd>{zoom}</dd>
    </dl>
  );
};

export default Dump;
