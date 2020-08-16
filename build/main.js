import { startLevel, checkCollisions } from "./scripts/actions";
const mountGame = document.getElementById("mount-game");
const game = startLevel(0, mountGame);
const player = game.player;
const animals = game.animals;
window.active = false;
const ticker = setInterval(() => {
    if (window.active) {
        player.move();
        animals.map((animal) => {
            animal.move();
        });
        checkCollisions(game);
    }
}, 100 / 3);
document.addEventListener("keydown", (e) => {
    if (!window.active) {
        window.active = true;
        game.hideOpeningTitle();
    }
    player.switchDirection(e.code);
});
export { ticker };
//# sourceMappingURL=main.js.map