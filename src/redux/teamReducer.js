import {CREATE_PLAYER, CHANGE_NUMBER, SET_TEAM1, SET_TEAM2} from "./types";

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
            if (action.payload.team === "1") {
                return {...state, team1: {...state.team1, [action.position]: action.payload}}
            } else {
                return {...state, team2: {...state.team2, [action.position]: action.payload}}
            }
        case CHANGE_NUMBER:
            if (action.payload) {
                return {...state, team1: {...state.team1, fr: undefined}, team2: {...state.team2, fr: undefined}, fives: true}
            } else {
                return {...state, team1: {...state.team1, fr: null}, team2: {...state.team2, fr: null}, fives: false}
            }
        case SET_TEAM1:
            return {...state, team1: action.payload}
        case SET_TEAM2:
            return {...state, team2: action.payload}
        default:
            return state
    }
}