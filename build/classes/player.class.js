import Element from "./element.class";
import { Direction } from "../scripts/types";
export default class Player extends Element {
    constructor(x, y, element, elementClasses, direction) {
        super(x, y, element, elementClasses);
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.prepareElement();
    }
    prepareElement() {
        this.artDiv = document.createElement("div");
        this.artDiv.setAttribute("class", "player right");
        this.sprite.appendChild(this.artDiv);
    }
    newLevel(nX, nY, nD) {
        this.x = nX;
        this.y = nY;
        this.direction = nD;
        this.offsetX = 0;
        this.offsetY = 0;
        this.sprite.style.left = this.posX();
        this.sprite.style.top = this.posY();
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
    switchDirection(dir) {
        switch (this.direction) {
            case Direction.Right:
                this.artDiv.classList.toggle("right");
                break;
            case Direction.Left:
                this.artDiv.classList.toggle("left");
                break;
            case Direction.Up:
                this.artDiv.classList.toggle("up");
                break;
            case Direction.Down:
                this.artDiv.classList.toggle("down");
                break;
        }
        switch (dir) {
            case "ArrowRight":
                this.artDiv.classList.toggle("right");
                this.direction = Direction.Right;
                break;
            case "ArrowLeft":
                this.artDiv.classList.toggle("left");
                this.direction = Direction.Left;
                break;
            case "ArrowUp":
                this.artDiv.classList.toggle("up");
                this.direction = Direction.Up;
                break;
            case "ArrowDown":
                this.artDiv.classList.toggle("down");
                this.direction = Direction.Down;
                break;
        }
    }
}
//# sourceMappingURL=player.class.js.map