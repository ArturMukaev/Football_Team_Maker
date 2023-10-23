import React from "react";
import AddPlayer from "../components/AddPlayer";
import Field from "../components/Field";

export const MainPage = () => {
    return (
        <>
            <div>
                <AddPlayer/>
            </div>
            <Field/>
        </>
    )
}