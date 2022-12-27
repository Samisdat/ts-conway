export const createControlElement = (classNames: string[], value: string, icon: string): HTMLElement => {

    const element = document.createElement('div');

    for (const className of classNames) {
        element.classList.add(className.trim());
    }
    element.setAttribute('data-value', value);

    const iconElement: HTMLElement = document.createElement('i');
    iconElement.classList.add('fa');
    iconElement.classList.add('fa-' + icon);

    element.append(iconElement);
    return element;
};

export abstract class Control {

    protected control: HTMLElement;

    abstract update(): void;


    protected updateUiSate (type: string, allModes: string[], activeMode: string[]):void{

        for (const panMode of allModes) {

            const panElement = this.control.getElementsByClassName('conway__control-' + type + '__' + panMode)[0];

            if (true === activeMode.includes(panMode)) {

                panElement.classList.remove('conway__control-pan--incactive');

            }
            else {

                panElement.classList.add('conway__control-pan--incactive');

            }

        }

    }

}
