import React, { useState } from "react";



const Myform = () => {
    const [name, setName ] = useState("")

    const dataChange = (e) => {
        setName(name + 1)
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