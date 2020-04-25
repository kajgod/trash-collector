import Settings from "./settings.class";

export default class Player extends Settings{
    constructor(
        public x: Number,
        public y: Number
    ){
        super();
    }
    up(){
        console.log(this.getPlayerSize());
    }
}