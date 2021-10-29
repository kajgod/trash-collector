import { startLevel, checkCollisions } from "./scripts/actions";
const mountGame = document.getElementById("mount-game");
const game = startLevel(0, mountGame);
const player = game.player;
const animals = game.animals;
let commandsReady = false;
const handleMove = (code) => {
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
    ].forEach((i) => document
        .getElementById(i[0])
        .addEventListener("touchstart", () => handleMove(i[1]), false));
    commandsReady = true;
};
const displayMobileCommands = () => {
    const tools = document.getElementById("mobile-commands").style;
    const layout = document.getElementById("body").style;
    if (window.innerHeight > window.innerWidth) {
        console.log("mobile view");
        tools.display = "block";
        layout.display = "block";
    }
    else {
        console.log("desktop view");
        tools.display = "none";
        layout.display = "flex";
    }
    if (!commandsReady)
        addMobileListeners();
};
window.onresize = function () {
    displayMobileCommands();
};
displayMobileCommands();
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
    handleMove(e.code);
});
export { ticker };
//# sourceMappingURL=main.js.map