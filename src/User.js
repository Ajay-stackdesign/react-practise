import React, { useState } from "react";

const User = ()=> {
    const [data, setData] = useState(0)
    const updateData = () => {
        setData(data+1)
    }
    return(
        <div>
            <h1>{data}</h1>
            <h2>kya kar rahe hoo</h2>
            <button onClick={updateData}>button</button>
        </div>
    )
}

export default User