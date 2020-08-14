import Element from "./element.class";
export default class Trash extends Element {
    constructor(x, y, element, elementClasses, direction) {
        super(x, y, element, elementClasses);
        this.direction = direction;
    }
    collected() {
        this.sprite.remove();
    }
}
//# sourceMappingURL=trash.class.js.map