import Element from "./element.class";
import { Direction } from "../scripts/types";

export default class Trash extends Element {
  constructor(
    x: number,
    y: number,
    element: HTMLElement,
    elementClasses: string,
    public direction: Direction
  ) {
    super(x, y, element, elementClasses);
  }

  collected(){
    this.sprite.remove();
  }
}
