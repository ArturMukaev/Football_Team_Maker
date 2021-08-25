import {CREATE_PLAYER,CHANGE_NUMBER} from "./types";

const initialState = {
    team1: {
        gk: null,
        lb: null,
        rb: null,
        lm: null,
        rm: null,
        fr: null
    },
    team2: {
        gk: null,
        lb: null,
        rb: null,
        lm: null,
        rm: null,
        fr: null
    },
    fives: false
}

export const teamReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_PLAYER:
            if(action.payload.team ==="1"){
                return {...state,team1: {...state.team1,[action.payload.position]: action.payload}}
            }else{
                return {...state,team2: {...state.team2,[action.payload.position]: action.payload}}
            }
        case CHANGE_NUMBER:
            if(action.payload){
                return {...state,team1: {...state.team1,fr: {}},team2: {...state.team2,fr: {}},fives: true}
            }else{
                return {...state,team1: {...state.team1,fr: null},team2: {...state.team2,fr: null},fives: false}
            }
        default:
            return state
    }
}