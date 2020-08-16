import Player from "../classes/player.class";
import Bush from "../classes/bush.class";
import Trash from "../classes/trash.class";
import Animal from "../classes/animal.class";

export enum Direction {
  Up,
  Down,
  Left,
  Right,
}

export interface Game {
  player: Player;
  bushes: Bush[];
  trashes: Trash[];
  animals: Animal[];
  setActive: (arg0: boolean) => void;
  hideOpeningTitle: ()=>void;
}
