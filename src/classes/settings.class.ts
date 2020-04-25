export default class Settings {

  resolution: number = 20;

  getPlayerSize(): string {
    const percent: number = 100 / this.resolution;
    return `${percent.toString()}%`;
  }

}
