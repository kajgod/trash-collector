import Element from "./element.class";
import { Direction } from "../scripts/types";

export default class Bush extends Element {
  constructor(
    x: number,
    y: number,
    element: HTMLElement,
    elementClasses: string,
    public direction: Direction
  ) {
    super(x, y, element, elementClasses);
  }
}
