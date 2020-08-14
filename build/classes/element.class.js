import Settings from "./settings.class";
export default class Element extends Settings {
    constructor(x, y, element, elementClasses) {
        super(element, elementClasses, x, y);
        this.x = x;
        this.y = y;
        this.element = element;
        this.elementClasses = elementClasses;
        this.offsetX = 0;
        this.offsetY = 0;
        this.createElement();
    }
    left() {
        this.offsetX = this.offsetX - this.step;
        this.execMove();
    }
    right() {
        this.offsetX = this.offsetX + this.step;
        this.execMove();
    }
    up() {
        this.offsetY = this.offsetY - this.step;
        this.execMove();
    }
    down() {
        this.offsetY = this.offsetY + this.step;
        this.execMove();
    }
    execMove() {
        this.sprite.style.transform = `translate3d(${this.offsetX}%, ${this.offsetY}%, 0)`;
    }
    coordinates() {
        return [
            (this.x * 100) / this.resolution + (this.offsetX * 1) / this.resolution,
            (this.y * 100) / this.resolution + (this.offsetY * 1) / this.resolution,
        ];
    }
}
//# sourceMappingURL=element.class.js.map