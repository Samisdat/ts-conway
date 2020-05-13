import {Control} from '@Conway/Frontend/Control/Control';

export const clickAndWaitForTweenEnd = (control: Control, clickOnElement: HTMLElement, tweenSteps: number) => {

    clickOnElement.click();

    for (let y = 0; y < tweenSteps; y += 1) {
        control.update();
    }

};
