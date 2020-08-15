import Player from "../classes/player.class";
import Bush from "../classes/bush.class";
import Trash from "../classes/trash.class";
import Animal from "../classes/animal.class";
import { Direction } from "../scripts/types";
import levels from "../levels/levels";
import Settings from "../classes/settings.class";
let player, bushes = [], trashes = [], animals = [], level, mountGame;
let active = true;
const startLevel = (levelNo, target) => {
    level = levelNo;
    mountGame = target;
    const charList = levels[level].split(/\n/);
    for (let y = 1; y <= Settings.resolution; y++)
        for (let x = 1; x <= Settings.resolution; x++) {
            let cur = charList[y][x - 1];
            switch (cur) {
                case "0":
                    break;
                case "P":
                    if (!player) {
                        player = new Player(x, y, mountGame, "element persistent", Direction.Right);
                    }
                    else {
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
                    animals.push(new Animal(x, y, mountGame, "element animal", Math.random() >= 0.5 ? Direction.Right : Direction.Down));
                    break;
            }
        }
    const setActive = (v) => {
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
    bushes.length = 0;
    trashes.length = 0;
    animals.length = 0;
    const children = mountGame.children;
    while (children[0] && children[1]) {
        [0, 1].map((v) => !children[v].classList.contains("persistent") && children[v].remove());
    }
    startLevel(level + 1, mountGame);
};
const firstLevel = () => {
    level = -1;
    nextLevel();
};
const checkCollisions = (game) => {
    const diff = 100 / player.resolution;
    const check = (x1, y1, x2, y2) => {
        if (x1 === x2 || (x1 > x2 && x1 < x2 + diff) || (x2 > x1 && x2 < x1 + diff))
            if (y1 === y2 ||
                (y1 > y2 && y1 < y2 + diff) ||
                (y2 > y1 && y2 < y1 + diff))
                return true;
        return false;
    };
    {
        let [x1, y1] = player.coordinates();
        if (x1 % player.resolution !== 0 && y1 % player.resolution !== 0) {
            bushes.map((bush) => {
                let [x2, y2] = bush.coordinates();
                if (check(x1, y1, x2, y2))
                    endGame();
            });
            animals.map((animal) => {
                let [x2, y2] = animal.coordinates();
                if (check(x1, y1, x2, y2))
                    endGame();
            });
            trashes.map((trash, key) => {
                let [x2, y2] = trash.coordinates();
                if (check(x1, y1, x2, y2)) {
                    trash.collected();
                    delete trashes[key];
                    checkCompletedLevel();
                }
            });
        }
    }
    animals.map((animal) => {
        let [x1, y1] = animal.coordinates();
        bushes.map((bush) => {
            let [x2, y2] = bush.coordinates();
            if (check(x1, y1, x2, y2))
                animal.switchDirection();
        });
    });
};
const endGame = () => {
    active = false;
    alert(`You are dead! You managed to complete ${level} levels.`);
    firstLevel();
};
const checkCompletedLevel = () => {
    for (let i = 0; i < trashes.length; i++) {
        if (trashes[i])
            return;
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
//# sourceMappingURL=actions.js.map