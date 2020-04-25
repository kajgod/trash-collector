import Player from "../classes/player.class";

export enum Direction {
  Up,
  Down,
  Left,
  Right,
}

export interface Game {
    player: Player
}
