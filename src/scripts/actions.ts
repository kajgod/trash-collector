import Player from "../classes/player.class";
import { Direction, Game } from "../scripts/types";
import levels from "../levels/levels";

const startLevel = (level: number, mountGame: HTMLElement): Game => {
  let player: Player;
  const charList: string[] = levels[level].split(/\n/);
  for (let y: number = 1; y <= 20; y++)
    for (let x: number = 1; x <= 20; x++) {
      let cur: string = charList[y][x - 1];
      switch (cur) {
        case "0":
          break;
        case "P":
          player = new Player(
            x,
            y,
            mountGame,
            "player",
            "element player",
            Direction.Right
          );
      }
    }
  return {
    player,
  };
};

export { startLevel };
