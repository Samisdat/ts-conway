import * as $ from 'jquery';

export default class Frontend {

    private wrapper: JQuery;

    constructor($element: JQuery) {

        if (undefined === $element.get(0)) {
            throw new Error('jquery selector does not match an element');
        }

        this.wrapper = $element;

    }

}