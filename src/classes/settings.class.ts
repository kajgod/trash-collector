export default class Settings {
  resolution: number = 20;
  step: number = 10;
  sprite: HTMLDivElement;
  playerSize: string;

  constructor(
    public element: HTMLElement,
    public elementId: string,
    public elementClasses: string,
    public x: number,
    public y: number
  ) {
    this.playerSize = this.getPlayerSize();
  }

  createElement() {
    this.sprite = document.createElement("div");
    this.sprite.setAttribute("id", this.elementId);
    this.sprite.setAttribute("class", this.elementClasses);
    this.sprite.style.width = this.playerSize;
    this.sprite.style.height = this.playerSize;
    this.sprite.style.left = this.posX();
    this.sprite.style.top = this.posY();
    this.element.appendChild(this.sprite);
  }

  getPlayerSize(): string {
    const percent: number = 100 / this.resolution;
    return `${percent.toString()}%`;
  }

  posX(): string {
    const percent: number = (this.x-1)*100 / this.resolution;
    return `${percent.toString()}%`;
  }

  posY(): string {
    const percent: number = (this.y-1)*100 / this.resolution;
    return `${percent.toString()}%`;
  }
}
