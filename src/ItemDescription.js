import React,{ Component } from "react";

// const itemDescription = ({name, description,}) => {
//     return(
//        <div>
//            <p>{name}</p>
//            <p>
//                <i>{description}</i>
//            </p>
           
//        </div>
//     )
// }

// export default itemDescription

export default class itemDescription extends Component {
    render(){
       // const {name,description} = this.props;
        return(
            <div>
               <p>{this.props.name}</p>
               <p>
                  <i>{this.props.description}</i>
                </p>
            </div>
        );
    }
}
