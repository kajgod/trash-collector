import Settings from "./settings.class";

export default class Element extends Settings{
    offsetX: number = 0;
    offsetY: number = 0;
    constructor(
        public x: number,
        public y: number,
        public element: HTMLElement,
        public elementId: string,
        public elementClasses: string
    ){
        super(element, elementId, elementClasses, x, y);
        this.createElement();
    }

    left(){
        this.offsetX = this.offsetX - this.step;
        this.execMove();
    }

    right(){
        this.offsetX = this.offsetX + this.step;
        this.execMove();
    }

    up(){
        this.offsetY = this.offsetY - this.step;
        this.execMove();
    }

    down(){
        this.offsetY = this.offsetY + this.step;
        this.execMove();
    }

    execMove(){
        this.sprite.style.transform=`translate3d(${this.offsetX}%, ${this.offsetY}%, 0)`;
    }
}