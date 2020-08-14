import Element from "./element.class";
import { Direction } from "../scripts/types";
export default class Animal extends Element {
    constructor(x, y, element, elementClasses, direction) {
        super(x, y, element, elementClasses);
        this.direction = direction;
    }
    move() {
        switch (this.direction) {
            case Direction.Right:
                this.right();
                break;
            case Direction.Left:
                this.left();
                break;
            case Direction.Up:
                this.up();
                break;
            case Direction.Down:
                this.down();
                break;
        }
    }
    switchDirection() {
        switch (this.direction) {
            case Direction.Right:
                this.direction = Direction.Left;
                break;
            case Direction.Left:
                this.direction = Direction.Right;
                break;
            case Direction.Up:
                this.direction = Direction.Down;
                break;
            case Direction.Down:
                this.direction = Direction.Up;
                break;
        }
    }
}
//# sourceMappingURL=animal.class.js.map