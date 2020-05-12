import {ControlInterface} from '@Conway/Frontend/Control/Control';

export const clickAndWaitForTweenEnd = (control: ControlInterface, clickOnElement: HTMLElement, tweenSteps: number) => {

    clickOnElement.click();

    for (let y = 0; y < tweenSteps; y += 1) {
        control.update();
    }

};
