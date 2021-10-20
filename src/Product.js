import React from "react";
import ItemDescription from "./ItemDescription";


const Product = (props) => {
    return(
        <div>
            <ItemDescription name={"ajay"} description={"google assistant"} />
            <h1>${59.99}</h1>
        </div>
    )
}

export default Product