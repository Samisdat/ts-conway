import { FC } from "react";
import ControlStyled from "./ControllStyled";

import Icon, { IconType } from "./Icon";
import {useMap} from "../../context/ConwayContext";

type ControlProps = {
  controlType: IconType;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Control: FC<ControlProps> = ({ controlType }) => {

    const {
        state: {zoom},
        dispatch
    } = useMap();

    const onClick = () => {

        dispatch({
            type: 'SET_ZOOM',
            zoom: 2
        });

    }

    return (
    <ControlStyled onClick={onClick}>
      <Icon icon={controlType} />
    </ControlStyled>
  );
};
export default Control;
