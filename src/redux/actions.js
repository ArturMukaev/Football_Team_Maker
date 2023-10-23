import {CREATE_PLAYER,CHANGE_NUMBER} from "./types";

export function createPlayer(player, position){
    return{
        type: CREATE_PLAYER,
        payload: player,
        position,
    }
}

export function changeNumber(condition){
    return{
        type: CHANGE_NUMBER,
        payload: condition
    }
}

export function setTeam(type, team){
    return{
        type: type,
        payload: team
    }
}