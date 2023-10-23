import React from "react";
import {connect} from "react-redux";

const Field = (props) => {


    return (
        <div className="fields">
            <svg xmlns="http://www.w3.org/2000/svg" width="350px" height="200px" className="field">
                <rect x="0" y="0" width="350px" height="200px" fill="green" stroke="white" strokeWidth="3"/>

                <path d="M 2 60 L 50 60 L 50 140 L 2 140" fill="green" strokeWidth="3" stroke="white"/>
                <path d="M 175 0 L 175 200" fill="green" strokeWidth="3" stroke="white"/>
                <circle cx="175" cy="100" r="35" fill="none" stroke="white" strokeWidth="3"/>
                <path d="M 348 60 L 300 60 L 300 140 L 348 140" fill="green" strokeWidth="3" stroke="white"/>
                <text x="125" y="20" fill="black" fontSize="20px" fontWeight="bold">Команда 1:</text>
                <g>
                    <text x="5" y="90" fill="black" fontWeight="700"
                          fontSize="10px">{props.team1.gk ? props.team1.gk.name : ""}</text>
                    <circle cx="15" cy="100" r="5" fill="none" stroke="rgba(63, 13, 57, 1)" strokeWidth="3"/>
                </g>
                <g>
                    <text x="65" y="55" fill="black" fontWeight="700"
                          fontSize="10px">{props.team1.lb ? props.team1.lb.name : ""}</text>
                    <circle cx="80" cy="65" r="5" fill="none" stroke="rgba(63, 13, 57, 1)" strokeWidth="3"/>
                </g>
                <g>
                    <text x="65" y="125" fill="black" fontWeight="700"
                          fontSize="10px">{props.team1.rb ? props.team1.rb.name : ""}</text>
                    <circle cx="80" cy="135" r="5" fill="none" stroke="rgba(63, 13, 57, 1)" strokeWidth="3"/>
                </g>
                <g>
                    <text x="185" y="145" fill="black" fontWeight="700"
                          fontSize="10px">{props.team1.rm ? props.team1.rm.name : ""}</text>
                    <circle cx="200" cy="155" r="5" fill="none" stroke="rgba(63, 13, 57, 1)" strokeWidth="3"/>
                </g>
                <g>
                    <text x="185" y="60" fill="black" fontWeight="700"
                          fontSize="10px">{props.team1.lm ? props.team1.lm.name : ""}</text>
                    <circle cx="200" cy="45" r="5" fill="none" stroke="rgba(63, 13, 57, 1)" strokeWidth="3"/>
                </g>
                {!props.fives ?
                    <g>
                        <text x="260" y="90" fill="black" fontWeight="700"
                              fontSize="10px">{props.team1.fr ? props.team1.fr.name : ""}</text>
                        <circle cx="280" cy="100" r="5" fill="none" stroke="rgba(63, 13, 57, 1)" strokeWidth="3"/>
                    </g> : null}
            </svg>


            <svg xmlns="http://www.w3.org/2000/svg" width="350px" height="200px" className="field">
                <rect x="0" y="0" width="350px" height="200px" fill="green" stroke="white" strokeWidth="3"/>
                <path d="M 2 60 L 50 60 L 50 140 L 2 140" fill="green" strokeWidth="3" stroke="white"/>
                <path d="M 175 0 L 175 200" fill="green" strokeWidth="3" stroke="white"/>
                <circle cx="175" cy="100" r="35" fill="none" stroke="white" strokeWidth="3"/>
                <path d="M 348 60 L 300 60 L 300 140 L 348 140" fill="green" strokeWidth="3" stroke="white"/>
                <text x="125" y="20" fill="black" fontSize="20px" fontWeight="bold">Команда 2:</text>
                <g>
                    <text x="5" y="90" fill="black" fontWeight="700"
                          fontSize="10px">{props.team2.gk ? props.team2.gk.name : ""}</text>
                    <circle cx="15" cy="100" r="5" fill="none" stroke="rgba(15, 58, 43, 1)" strokeWidth="3"/>
                </g>
                <g>
                    <text x="65" y="55" fill="black" fontWeight="700"
                          fontSize="10px">{props.team2.lb ? props.team2.lb.name : ""}</text>
                    <circle cx="80" cy="65" r="5" fill="none" stroke="rgba(15, 58, 43, 1)" strokeWidth="3"/>
                </g>
                <g>
                    <text x="65" y="125" fill="black" fontWeight="700"
                          fontSize="10px">{props.team2.rb ? props.team2.rb.name : ""}</text>
                    <circle cx="80" cy="135" r="5" fill="none" stroke="rgba(15, 58, 43, 1)" strokeWidth="3"/>
                </g>
                <g>
                    <text x="185" y="145" fill="black" fontWeight="700"
                          fontSize="10px">{props.team2.rm ? props.team2.rm.name : ""}</text>
                    <circle cx="200" cy="155" r="5" fill="none" stroke="rgba(15, 58, 43, 1)" strokeWidth="3"/>
                </g>
                <g>
                    <text x="185" y="60" fill="black" fontWeight="700"
                          fontSize="10px">{props.team2.lm ? props.team2.lm.name : ""}</text>
                    <circle cx="200" cy="45" r="5" fill="none" stroke="rgba(15, 58, 43, 1)" strokeWidth="3"/>
                </g>
                {!props.fives ?
                    <g>
                        <text x="260" y="90" fill="black" fontWeight="700"
                              fontSize="10px">{props.team2.fr ? props.team2.fr.name : ""}</text>
                        <circle cx="280" cy="100" r="5" fill="none" stroke="rgba(15, 58, 43, 1)" strokeWidth="3"/>
                    </g> : null}
            </svg>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        team1: state.teams.team1,
        team2: state.teams.team2,
        fives: state.teams.fives
    }
}

export default connect(mapStateToProps, null)(Field)