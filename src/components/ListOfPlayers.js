import React from "react";
import Player from "./Player";
import {connect} from "react-redux";

const ListOfPlayers = ({players}) =>{
    return(
        <>
            <Player players = {players}/>
        </>
    )
}

const mapStateToProps = state =>{
    return{
        players: state.teams.team1.concat(state.teams.team2)
    }
}


export default connect(mapStateToProps,null)(ListOfPlayers)