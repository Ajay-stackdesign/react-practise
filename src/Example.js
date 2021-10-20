import React, { useEffect, useState } from "react";

const Example = () => {
    const[count, setCount] = useState(0)

    useEffect(() => {
        document.title= `mycount is ${count}`;
    });

    const handleClick = () => {
        setCount(count+1)
    }
    return(
        <div>
            <h1>my count is {count}</h1>
            <button onClick={handleClick}>+1</button>
        </div>
    )
}


export default Example