import { startLevel } from "./scripts/actions";
import { Game } from "./scripts/types";
import Player from "./classes/player.class";

const mountGame: HTMLElement = document.getElementById("mount-game");

const game: Game = startLevel(0, mountGame);
const player: Player = game.player;

const ticker = setInterval(() => {
    player.move();
}, 30);

document.addEventListener("keydown", (e: KeyboardEvent) => player.switchDirection(e.code));
