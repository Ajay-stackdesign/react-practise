import React, { useState } from "react";


const Myform = () => {
    const [name, setName ] = useState("")

    const dataChange = (e) => {
        setName(e.target.value)
    }
    return(
        <form>
            <label >enter the name:
            <input type="text" value={name} onchange={dataChange}></input>
            </label>
        </form>
    )
}

export default Myform