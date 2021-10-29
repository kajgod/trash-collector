import { startLevel, checkCollisions } from "./scripts/actions";
import { Game } from "./scripts/types";
import Player from "./classes/player.class";
import Animal from "./classes/animal.class";

const mountGame: HTMLElement = document.getElementById("mount-game");

const game: Game = startLevel(0, mountGame);
const player: Player = game.player;
const animals: Animal[] = game.animals;

declare global {
  interface Window {
    active: boolean;
  }
}
let commandsReady = false;

const handleMove = (code: string) => {
  if (!window.active) {
    window.active = true;
    game.hideOpeningTitle();
  }
  player.switchDirection(code);
};

const addMobileListeners = () => {
  [
    ["direction-up", "ArrowUp"],
    ["direction-down", "ArrowDown"],
    ["direction-left", "ArrowLeft"],
    ["direction-right", "ArrowRight"],
  ].forEach((i) =>
    document
      .getElementById(i[0])
      .addEventListener("touchstart", () => handleMove(i[1]), false)
  );

  commandsReady = true;
};

const displayMobileCommands = () => {
  const tools = document.getElementById("mobile-commands").style;
  const layout = document.getElementById("body").style;
  if (window.innerHeight > window.innerWidth) {
    console.log("mobile view");
    tools.display = "block";
    layout.display = "block";
  } else {
    console.log("desktop view");

    tools.display = "none";
    layout.display = "flex";
  }
  if (!commandsReady) addMobileListeners();
};

window.onresize = function () {
  displayMobileCommands();
};

displayMobileCommands();

window.active = false; // global activity
const ticker = setInterval(() => {
  if (window.active) {
    player.move();
    animals.map((animal) => {
      animal.move();
    });
    checkCollisions(game);
  }
}, 100 / 3);

document.addEventListener("keydown", (e: KeyboardEvent) => {
  handleMove(e.code);
});

export { ticker };
