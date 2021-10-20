import React from "react";
import Garage from "./Garage";

const Car = (props) => {
    const changeThumb =() => {
        alert("hello world")
    }
    return(
        <div>
        <h1>i am {props.color} color</h1>
        <button onClick={changeThumb}>changeThumb</button>
        <Garage />
        <h2>i am {props.brand} and {props.key}</h2>
        </div>
    )
}

export default Car