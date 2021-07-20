import React from "react";

const Player = ({players}) => {


    return (
        <>
            {players.map(player => (
                    <div className="card w-75" key={player.id}>
                        <div className="card-body">
                            <h5 className="card-title">{player.name}</h5>
                            <p className="card-text">Команда: {player.team}</p>
                        </div>
                    </div>
                )
            )}
        </>
    )
}

export default Player