import React,{ useContext } from "react";
import { BioData } from "./App";

const Comb = () => {
    const context = useContext(BioData)
    return (
        <div>
           <h1>{context}</h1>
        </div>
    )
}

export default Comb