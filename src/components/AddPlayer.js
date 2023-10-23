import React, {useState, useRef} from "react";
import {connect} from 'react-redux'
import {changeNumber, createPlayer, setTeam} from "../redux/actions";
import {DropdownButton, InputGroup, Dropdown, Form} from "react-bootstrap";
import {SET_TEAM1, SET_TEAM2} from "../redux/types";

function splitArrayToMaximizeEqualSum(arr) {
    arr.sort(() => Math.random() - 0.5).sort((a, b) => b.skill - a.skill);

    let sum1 = 0;
    let sum2 = 0;
    const resultArr1 = [];
    const resultArr2 = [];

    arr.forEach(elem => {
        if (sum1 <= sum2) {
            sum1 += elem.skill;
            resultArr1.push(elem);
        } else {
            sum2 += elem.skill;
            resultArr2.push(elem);
        }
    });

    return [resultArr1, resultArr2];
}

const initialPlayersArray = [
    {
        name: "Андрей Б.",
        skill: 3,
        key: 1,
    },
    {
        name: "Семен",
        skill: 3,
        key: 2,
    },
    {
        name: "Андрей Е.",
        skill: 3,
        key: 3,
    },
    {
        name: "Владлен",
        skill: 3,
        key: 4,
    },
    {
        name: "Михаил",
        skill: 2,
        key: 5,
    },
    {
        name: "Алексей Ю.",
        skill: 3,
        key: 6,
    },
    {
        name: "Иван Ч.",
        skill: 2,
        key: 7,
    },
    {
        name: "Илья С.",
        skill: 3,
        key: 8,
    },
    {
        name: "Артур М.",
        skill: 3,
        key: 9,
    },
    {
        name: "Глеб",
        skill: 3,
        key: 10,
    },
    {
        name: "Шама",
        skill: 3,
        key: 11,
    },
    {
        name: "Макс Ш.",
        skill: 2,
        key: 12,
    },
    {
        name: "Евгений",
        skill: 1,
        key: 13,
    },
    {
        name: "Марк",
        skill: 1,
        key: 14,
    },
    {
        name: "Даниил Д.",
        skill: 3,
        key: 15,
    },
];


const AddPlayer = (props) => {

    const [player, setPlayer] = useState({
        name: "",
        team: "",
        position: "",
        skill: 1,
    })

    const changeHandler = (event) => {
        setPlayer({...player, [event.target.name]: event.target.value});
    }

    const selectPlayer = (selectedPlayer) => {
        setPlayer({...player, name: selectedPlayer.name, skill: selectedPlayer.skill});
    }

    const check1 = useRef(null);
    const check2 = useRef(null);


    const changeNumberHandler = () => {
        props.changeNumber(!props.fives);
    }

    const mixTeamsHandler = (e) => {
        e.preventDefault();
        const {team1, team2, fives} = props;
        const allPlayers = Object.values(team1).concat(Object.values(team2)).filter(Boolean);
        if ((fives && allPlayers.length !== 10) || (!fives && allPlayers.length !== 12)) {
            alert("Добавьте всех игроков!");
            return;
        }
        const [newTeam1, newTeam2] = splitArrayToMaximizeEqualSum(allPlayers);
        const newObjTeam1 = {
            gk: newTeam1[0],
            lb: newTeam1[1],
            rb: newTeam1[2],
            lm: newTeam1[3],
            rm: newTeam1[4],
        }
        const newObjTeam2 = {
            gk: newTeam2[0],
            lb: newTeam2[1],
            rb: newTeam2[2],
            lm: newTeam2[3],
            rm: newTeam2[4],
        }
        if (!fives) {
            newObjTeam1.fr = newTeam1[5];
            newObjTeam2.fr = newTeam2[5];
        }
        props.setTeam(SET_TEAM1, newObjTeam1);
        props.setTeam(SET_TEAM2, newObjTeam2);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (player.name && player.team && player.position) {
            const position = player.position;
            delete player.position;
            props.createPlayer(player, position);
            setPlayer({
                name: "",
                team: "",
                position: "",
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
            <Form.Label>Игрок:</Form.Label>
            <InputGroup className="mb-3">
                <DropdownButton
                    variant="outline-secondary"
                    title="Выбрать из списка"
                    id="dropdown"
                >
                    {initialPlayersArray.map(item => (
                        <Dropdown.Item onClick={() => selectPlayer(item)} key={item.key}>{item.name}</Dropdown.Item>
                    ))}

                </DropdownButton>
                <Form.Control name="name" value={player.name} onChange={changeHandler}
                              placeholder="Введите имя игрока"/>
            </InputGroup>

            <div className="input-group mt-3">
                <span className="input-group-text">Скилл игрока: </span>
                <select className="form-select"
                        id="skill"
                        name="skill"
                        value={player.skill}
                        onInput={changeHandler}>
                    <option value={1}>Низкий</option>
                    <option value={2}>Средний</option>
                    <option value={3}>Высокий</option>
                </select>
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

            <div className="input-group">
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
            <div className="d-flex justify-content-center align-items-center flex-wrap">
                <button className="btn btn-success" onClick={submitHandler}>Добавить</button>
                <div className="form-check line">
                    <input className="form-check-input" type="checkbox" value="5"
                           name="five"
                           onChange={changeNumberHandler}/>
                    <label className="form-check-label">
                        5 на 5
                    </label>
                </div>
                <button className="btn btn-primary" onClick={mixTeamsHandler}>Переформировать команды по силе</button>
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
    changeNumber,
    setTeam
}


export default connect(mapStateToProps, mapDispatchToProps)(AddPlayer)