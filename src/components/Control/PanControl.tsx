import Control from "./Control";

const PanControl = () => {
  return (
    <>
      <Control controlType={"left"} />
      <Control controlType={"up"} />
      <Control controlType={"right"} />
      <Control controlType={"down"} />
      <Control controlType={"center"} />
    </>
  );
};

export default PanControl;
