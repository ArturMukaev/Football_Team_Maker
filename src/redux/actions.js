import {CREATE_PLAYER} from "./types";

export function createPlayer(player){
    return{
        type: CREATE_PLAYER,
        payload: player
    }
}