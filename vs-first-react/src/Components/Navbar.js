import React from "react"
import reactLogo from "../logo.svg"

// console.log(reactLogo)

export default function Navbar (){
    return (
    <div className="navbar">
        <img className="nav-logo" src={reactLogo}></img>
        <h3 className="title">ReactFacts</h3>
        <h4 className="subtitle">React Course - Project 1</h4>
    </div>
    )
}
