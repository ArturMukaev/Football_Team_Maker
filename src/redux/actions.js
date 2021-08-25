import {CREATE_PLAYER,CHANGE_NUMBER} from "./types";

export function createPlayer(player){
    return{
        type: CREATE_PLAYER,
        payload: player
    }
}

export function changeNumber(condition){
    return{
        type: CHANGE_NUMBER,
        payload: condition
    }
}