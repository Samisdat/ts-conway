import { FC } from "react";

import Icon, { IconType } from "./Icon";

type ControlProps = {
  controlType: IconType;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Control: FC<ControlProps> = ({ controlType }) => {

  return (
      <Icon icon={controlType} />
  );
};
export default Control;
