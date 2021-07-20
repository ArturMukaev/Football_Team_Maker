import React from "react";
import {Link} from 'react-router-dom'

export const StartPage = () => {

    return (
        <>
            <h1>
                Выберите количество участников
            </h1>
            <div className="row">
                <div className="col container">
                    <Link to="/main">
                        <button className="btn btn-success mybtn ">
                            5 на 5
                        </button>
                    </Link>
                </div>
                <div className="col container">
                    <Link to="/main">
                        <button className="btn btn-success mybtn ">
                            6 на 6
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}
