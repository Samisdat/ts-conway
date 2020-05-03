
export abstract class ControlAbstract {

    protected getControlElement(classNames: string[], value: string, icon: string): HTMLElement {

        const element = document.createElement('div');

        for(const className of classNames){
            element.classList.add(className.trim());
        }
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
