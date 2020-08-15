import Player from "../classes/player.class";
import Bush from "../classes/bush.class";
import Trash from "../classes/trash.class";
import Animal from "../classes/animal.class";
import { Direction, Game } from "../scripts/types";
import levels from "../levels/levels";
import { ticker } from "../main";
import Settings from "../classes/settings.class";

let player: Player,
  bushes: Bush[] = [],
  trashes: Trash[] = [],
  animals: Animal[] = [],
  level: number,
  mountGame: HTMLElement;
let active = true;

const startLevel = (levelNo: number, target: HTMLElement): Game => {
  level = levelNo;
  mountGame = target;
  const charList: string[] = levels[level].split(/\n/);
  for (let y: number = 1; y <= Settings.resolution; y++)
    for (let x: number = 1; x <= Settings.resolution; x++) {
      let cur: string = charList[y][x - 1];
      switch (cur) {
        case "0":
          break;
        case "P":
          if (!player) {
            // start game
            player = new Player(
              x,
              y,
              mountGame,
              "element persistent",
              Direction.Right
            );
          } else {
            // new level
            player.newLevel(x, y, Direction.Right);
          }
          break;
        case "B":
          bushes.push(new Bush(x, y, mountGame, "element bush", null));
          break;
        case "T":
          trashes.push(new Trash(x, y, mountGame, "element trash", null));
          break;
        case "A":
          animals.push(
            new Animal(
              x,
              y,
              mountGame,
              "element animal",
              Math.random() >= 0.5 ? Direction.Right : Direction.Down
            )
          );
          break;
      }
    }
  const setActive = (v: boolean): void => {
    active = v;
  };
  return {
    player,
    bushes,
    trashes,
    animals,
    active,
    setActive,
  };
};

const nextLevel = () => {
  //clear last level
  bushes.length = 0;
  trashes.length = 0;
  animals.length = 0;
  const children = mountGame.children;
  while (children[0] && children[1]) {
    [0, 1].map(
      (v) =>
        !children[v].classList.contains("persistent") && children[v].remove()
    );
  }
  startLevel(level + 1, mountGame);
};

const firstLevel = () => {
  level = -1;
  nextLevel();
};

const checkCollisions = (game: Game) => {
  const diff: number = 100 / player.resolution;
  const check = (x1: number, y1: number, x2: number, y2: number): boolean => {
    if (x1 === x2 || (x1 > x2 && x1 < x2 + diff) || (x2 > x1 && x2 < x1 + diff))
      if (
        y1 === y2 ||
        (y1 > y2 && y1 < y2 + diff) ||
        (y2 > y1 && y2 < y1 + diff)
      )
        return true;
    return false;
  };
  // player
  {
    let [x1, y1]: number[] = player.coordinates();
    if (x1 % player.resolution !== 0 && y1 % player.resolution !== 0) {
      bushes.map((bush) => {
        let [x2, y2]: number[] = bush.coordinates();
        if (check(x1, y1, x2, y2)) endGame();
      });
      animals.map((animal) => {
        let [x2, y2]: number[] = animal.coordinates();
        if (check(x1, y1, x2, y2)) endGame();
      });
      trashes.map((trash, key) => {
        let [x2, y2]: number[] = trash.coordinates();
        if (check(x1, y1, x2, y2)) {
          trash.collected();
          delete trashes[key];
          checkCompletedLevel();
        }
      });
    }
  }
  // animal
  animals.map((animal) => {
    let [x1, y1]: number[] = animal.coordinates();
    bushes.map((bush) => {
      let [x2, y2]: number[] = bush.coordinates();
      if (check(x1, y1, x2, y2)) animal.switchDirection();
    });
  });
};

const endGame = () => {
  active = false;
  alert(`You are dead! You managed to complete ${level} levels.`);
  firstLevel();
};

const checkCompletedLevel = () => {
  for (let i: number = 0; i < trashes.length; i++) {
    if (trashes[i]) return;
  }
  if (level < levels.length - 1) {
    nextLevel();
    return;
  }
  active = false;
  alert(`Well done! You completed all ${level + 1} levels!`);
  firstLevel();
};

export { startLevel, endGame, checkCollisions };
