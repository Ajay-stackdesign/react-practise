import React from "react";

 class Bike extends React.Component {
    constructor(props){
        super(props);
        this.state={color:"red"};
    }
    render(){
        return(
            <div>
                <h1>i am {this.state.color}</h1>
                <h2>i am {this.props.color}</h2>
            </div>
        )
    }
}

export default Bike