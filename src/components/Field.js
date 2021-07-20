import React from "react";
import {connect} from "react-redux";

const Field = (props) => {
// const my_svg = useRef(null);

    return (
        <div style={{marginTop:"40px"}}>
            {/*<svg xmlns="http://www.w3.org/2000/svg"  ref={my_svg} width="100%"*/}
            {/*     height={my_svg.current? my_svg.current.width : "400px"}>*/}
            {/*    <rect x="0" y="0" width="100%" height="400px" fill="green"/>*/}
            {/*    <path d="M 0 130 L 60 130 L 60 270 L 0 270" fill="green" strokeWidth="3" stroke="white"/>*/}
            {/*    <path d="M 0 130 L 60 130 L 60 270 L 0 270" fill="green" strokeWidth="3" stroke="white"/>*/}
            {/*</svg>*/}
            <table>
                <tbody>
                <tr>
                    <th>
                        Команда 1
                    </th>
                    {props.team1.map(el =>(
                        <td key={el.id} className="team1">
                            {el.name}
                        </td>
                    ))}
                </tr>
                <tr>
                    <th>
                        Команда 2
                    </th>
                    {props.team2.map(el =>(
                        <td key={el.id} className="team2">
                            {el.name}
                        </td>
                    ))}
                </tr>
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        team1: state.teams.team1,
        team2: state.teams.team2
    }
}

export default connect(mapStateToProps,null)(Field)