import React, { useState } from "react";

const Form = () =>{
    const [name, setName] = useState("ajay")

    const handleSubmit= (e) => {
        e.preventDefault();
        alert("submit is working")
    }
    const handleChange =(e) => {
        setName(e.target.value)
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>enter the name:
                <input type="text"
                value={name} 
                onChange={handleChange} />
            </label>
        </form>
    )
}


export default Form