import { startLevel, checkCollisions } from "./scripts/actions";
import { Game } from "./scripts/types";
import Player from "./classes/player.class";
import Animal from "./classes/animal.class";

const mountGame: HTMLElement = document.getElementById("mount-game");

const game: Game = startLevel(0, mountGame);
const player: Player = game.player;
const animals: Animal[] = game.animals;

const ticker = setInterval(() => {
  if (game.active) {
    player.move();
    animals.map((animal) => {
      animal.move();
    });
    checkCollisions(game);
  }
}, 100 / 3);

document.addEventListener("keydown", (e: KeyboardEvent) =>
  player.switchDirection(e.code)
);

export { ticker };
