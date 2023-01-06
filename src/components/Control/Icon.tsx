import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faCrosshairs,
  faSearchPlus,
  faSearchMinus,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FC } from "react";

export type IconType =
  | "up"
  | "down"
  | "left"
  | "right"
  | "center"
  | "in"
  | "out";

type IconMap = {
  [key in IconType]: IconDefinition;
};

const iconMap: IconMap = {
  up: faArrowUp,
  down: faArrowDown,
  left: faArrowLeft,
  right: faArrowRight,
  center: faCrosshairs,
  in: faSearchPlus,
  out: faSearchMinus,
};

type IconProps = {
  icon: IconType;
};

const Icon: FC<IconProps> = ({ icon }) => {
  return <FontAwesomeIcon size="lg" icon={iconMap[icon]} />;
};

export default Icon;
