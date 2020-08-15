import Player from "../classes/player.class";
import Bush from "../classes/bush.class";
import Trash from "../classes/trash.class";
import Animal from "../classes/animal.class";
import { Direction } from "../scripts/types";
import levels from "../levels/levels";
import { ticker } from "../main";
import Settings from "../classes/settings.class";
let player, bushes = [], trashes = [], animals = [];
const startLevel = (level, mountGame) => {
    const charList = levels[level].split(/\n/);
    for (let y = 1; y <= Settings.resolution; y++)
        for (let x = 1; x <= Settings.resolution; x++) {
            let cur = charList[y][x - 1];
            switch (cur) {
                case "0":
                    break;
                case "P":
                    player = new Player(x, y, mountGame, "element", Direction.Right);
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
    return {
        player,
        bushes,
        trashes,
        animals,
    };
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
    clearInterval(ticker);
    alert("You are dead!");
};
const checkCompletedLevel = () => {
    for (let i = 0; i < trashes.length; i++) {
        if (trashes[i])
            return;
    }
    clearInterval(ticker);
    alert(`Well done! You collected all ${trashes.length} pieces of trash!`);
};
export { startLevel, endGame, checkCollisions };
//# sourceMappingURL=actions.js.map