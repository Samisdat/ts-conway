
export abstract class ControlAbstract {

    protected getControlElement(action: string, value: string, icon: string): HTMLElement {

        const element = document.createElement('div');
        element.classList.add(value);
        element.setAttribute('data-action', action);
        element.setAttribute('data-value', value);

        const iconElement: HTMLElement = document.createElement('i');
        iconElement.classList.add('fa');
        iconElement.classList.add('fa-' + icon);

        element.append(iconElement);
        return element;
    }

    abstract createControl(): void;

    abstract addEventListener(): void;

    abstract update(): void;

}
