import React from "react";

const Test = (props) => {
    return(
        <div>
        <h1>hello world{props.name}</h1>
        <h2>hello world {props.email}</h2>
        </div>
    )
}

export default Test