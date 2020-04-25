import Element from "./element.class";
import { Direction } from "../scripts/types";

export default class Player extends Element {
  constructor(
    x: number,
    y: number,
    element: HTMLElement,
    elementId: string,
    elementClasses: string,
    public direction: Direction
  ) {
    super(x, y, element, elementId, elementClasses);
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

  switchDirection(dir: string) {
    switch (dir) {
      case "ArrowRight":
        this.direction = Direction.Right;
        break;
      case "ArrowLeft":
        this.direction = Direction.Left;
        break;
      case "ArrowUp":
        this.direction = Direction.Up;
        break;
      case "ArrowDown":
        this.direction = Direction.Down;
        break;
    }
  }
}
