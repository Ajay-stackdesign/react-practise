import React, { createContext, useState } from "react";
// import Bike from "./Bike";
// import Car from "./Car";
import Example from "./Example";
import Form from "./Form";
import Myform from "./Myform";
// import Student from "./Student";
// import User from "./User";
// import Test from "./Test";
// import Product from "./Product"; 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Blog from "./Blog";
import Contact from "./Contact";
import Home from "./Home";
import Coma from "./Coma";

const BioData = createContext();

const App = () => {
  

  const [count, setCount] = useState(0)
  const [age, setAge] = useState(23)

  const decrement = () => {
    setCount(count + 1)
    setAge(age + 1)
  }

  const increment = () => {
    setCount(count-1)
    setAge(age -1)
  }
  return (
    <div>
        {/* <Student />
        <User name={"ajay"}/> 
        <Test name={ "ajay" } email="ajayfsahana968@gmail.com"/>
        <Product name={"amazon"} description={"js"} price={21.99} />
        <Product name={"flipkart"} description={"node"} price={21.99} />
        <Product name={"myntra"} description={"mongoDexpresssb"} price={21.99} /> */}

        <h1>welcome to add cart</h1>
        <h1>your age is {age}</h1>
        <p>the count is {count}</p>
        <button onClick={increment}>-1</button>
        <button onClick={decrement}>+5</button>
        <Example />
        {/* <Car color="red"/>
        <Bike color="black" /> */}
        <Myform />
        <Form />

        <Router>
          {/* <div>
            <Link to ="/">Home</Link>
          </div>
          <div>
            <Link to ="/Blog">Blog</Link>
          </div>
          <div>
            <Link to="/Contact">Contact</Link>

          </div>

          <hr /> */}

          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/Blog">
              <Blog />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>

          </Switch>

        </Router>

        <BioData.Provider value={"ajay"}>
          <Coma />
        </BioData.Provider>


    </div>

  )
}

export default App
export {BioData}