import React from "react";
import AddPlayer from "../components/AddPlayer";
import ListOfPlayers from "../components/ListOfPlayers";
import Field from "../components/Field";

export const MainPage = () =>{
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <AddPlayer/>
                    <ListOfPlayers/>
                </div>
                <div className="col">
                    <Field/>
                </div>
            </div>
        </div>
    )
}