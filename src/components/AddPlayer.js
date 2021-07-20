import React, {useState, useRef} from "react";
import {connect} from 'react-redux'
import {createPlayer} from "../redux/actions";

const AddPlayer = (props) => {
    const [player, setPlayer] = useState({
        name: "",
        team: ""
    })

    const changeHandler = (event) => {
        if (event.target.name === "name") {
            setPlayer({...player, name: event.target.value});
        } else {
            setPlayer({...player, team: event.target.value});
        }
    }
    const check1 = useRef(null);
    const check2 = useRef(null);
    const submitHandler = (event) => {
        event.preventDefault();
        if (player.name&& player.team) {
            props.createPlayer(player);
            setPlayer({
                name: "",
                team: ""
            })
            check1.current.checked = false;
            check2.current.checked = false;
        } else {
            alert("Заполните имя и команду");
        }
    }

    return (
        <form className="adding">
            <div className="input-group">
                <span className="input-group-text" id="inputGroup-sizing-default">Игрок: </span>
                <input type="text" className="form-control" placeholder="Введите имя игрока" name="name"
                       value={player.name} onChange={changeHandler}/>
            </div>
            <div className="form-check line">
                <input className="form-check-input" type="radio" value="1" ref={check1} name="Radio" id="flexRadioDefault1"
                       onChange={changeHandler}/>
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Команда 1
                </label>
            </div>
            <div className="form-check line">
                <input className="form-check-input" type="radio" value="2" ref={check2} name="Radio" id="flexRadioDefault2"
                       onChange={changeHandler}/>
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Команда 2
                </label>
            </div>
            <button className="btn btn-success" onClick={submitHandler}>Добавить</button>
        </form>
    )
}

const mapDispatchToProps = {
    createPlayer
}


export default connect(null, mapDispatchToProps)(AddPlayer)