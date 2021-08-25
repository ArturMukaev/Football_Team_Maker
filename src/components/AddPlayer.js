import React, {useState, useRef} from "react";
import {connect} from 'react-redux'
import {changeNumber, createPlayer} from "../redux/actions";

const AddPlayer = (props) => {

    const [player, setPlayer] = useState({
        name: "",
        team: "",
        position: ""
    })

    const changeHandler = (event) => {
        setPlayer({...player, [event.target.name]: event.target.value});
    }

    const check1 = useRef(null);
    const check2 = useRef(null);


    const changeNumberHandler = () =>{
        props.changeNumber(!props.fives);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (player.name && player.team && player.position) {
            props.createPlayer(player);
            setPlayer({
                name: "",
                team: "",
                position: ""
            })
            check1.current.checked = false;
            check2.current.checked = false;
        } else {
            alert("Заполните имя и команду");
        }
    }

    let toRender;
    if (player.team) {
        let num = 0;
        if (player.team === "1") {
            toRender = Object.entries(props.team1).filter(([key, value]) => value === null)
                .map(([key, value]) => {
                    num++;
                    return <option key={num} value={key}>{key}</option>;
                })
        } else {
            toRender = Object.entries(props.team2).filter(([key, value]) => value === null)
                .map(([key, value]) => {
                    num++;
                    return <option key={num} value={key}>{key}</option>;
                })
        }
    } else {
        toRender = <option value="">Выберите команду</option>;
    }


    return (
        <form>

            <div className="input-group">
                <span className="input-group-text">Игрок: </span>
                <input type="text" className="form-control" placeholder="Введите имя игрока"
                       name="name"
                       value={player.name}
                       onChange={changeHandler}/>
            </div>

            <div className="form-check line">
                <input className="form-check-input" type="radio" value="1"
                       ref={check1}
                       name="team"
                       onChange={changeHandler}/>
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Команда 1
                </label>
            </div>

            <div className="form-check line">
                <input className="form-check-input" type="radio" value="2"
                       ref={check2}
                       name="team"
                       onChange={changeHandler}/>
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Команда 2
                </label>
            </div>

            <div className="input-group" style={{marginBottom: 20 + "px"}}>
                <span className="input-group-text">Позиция: </span>
                <select className="form-select" aria-label="Default select example"
                        id="position"
                        name="position"
                        value={player.position}
                        onInput={changeHandler}>
                    <option defaultValue disabled/>
                    {toRender}
                </select>
            </div>
            <div style={{marginLeft: "70px"}}>
                <button className="btn btn-success" onClick={submitHandler}>Добавить</button>
                <div className="form-check line">
                    <input className="form-check-input" type="checkbox" value="5"
                           name="five"
                           onChange={changeNumberHandler}/>
                    <label className="form-check-label">
                        5 на 5
                    </label>
                </div>
            </div>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        team1: state.teams.team1,
        team2: state.teams.team2,
        fives: state.teams.fives
    }
}

const mapDispatchToProps = {
    createPlayer,
    changeNumber
}


export default connect(mapStateToProps, mapDispatchToProps)(AddPlayer)