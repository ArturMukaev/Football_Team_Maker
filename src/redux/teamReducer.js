import {CREATE_PLAYER} from "./types";

const initialState = {
    team1: [],
    team2: []
}

export const teamReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_PLAYER:
            if(action.payload.team ==="1"){
                return {...state, team1: state.team1.concat(action.payload)}
            }else{
                return {...state, team2: state.team2.concat(action.payload)}
            }
        default:
            return state
    }
}