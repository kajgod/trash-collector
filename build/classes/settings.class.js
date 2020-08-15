export default class Settings {
    constructor(element, elementClasses, x, y) {
        this.element = element;
        this.elementClasses = elementClasses;
        this.x = x;
        this.y = y;
        this.resolution = 16;
        this.step = 8;
        this.playerSize = this.getPlayerSize();
    }
    createElement() {
        this.sprite = document.createElement("div");
        this.sprite.setAttribute("class", this.elementClasses);
        this.sprite.style.width = this.playerSize;
        this.sprite.style.height = this.playerSize;
        this.sprite.style.left = this.posX();
        this.sprite.style.top = this.posY();
        this.element.appendChild(this.sprite);
    }
    getPlayerSize() {
        const percent = 100 / this.resolution;
        return `${percent.toString()}%`;
    }
    posX() {
        const percent = ((this.x - 1) * 100) / this.resolution;
        return `${percent.toString()}%`;
    }
    posY() {
        const percent = ((this.y - 1) * 100) / this.resolution;
        return `${percent.toString()}%`;
    }
}
Settings.resolution = 16;
//# sourceMappingURL=settings.class.js.map