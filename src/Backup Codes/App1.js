//          import React, {Component, Fragment} from "react";

//    import { render } from "react-dom/cjs/react-dom.development";


//          class App extends Component {
//              render()
//              {
//                     return <h1> This is my First Website </h1>
//                  return(
//                      <>
//                      <h1> Hello World </h1>  
//                      <p> Description </p>
//                      </>
//                  )
        
//              }
//          }
 
//          export default App;

//       import React from "react";
//       import Students from "./Students";

//       const App = () =>
//       {
//           return(
//               <div>
//               <Students name="1"/>
//               <Students name="2"/>
//               <Students name="3"/>
//               </div>
//           )
//       }

//       export default App;


//       import React from 'react'

//          const name = "rahul";

//       function show(name)
//       {
//           return name;
//       }

//       const el = <h1> {10+20} {show("aadi")} </h1>;

//       export default el;

//       import React from 'react'
//       import "./App.css";


//       const el = <div className="bg"> Hello World; </div> 

//       export default el;


//    import React from 'react'


//    const student = () =>
//        {
//            return <h1> Hello Aadi </h1>
    
//        }

//    export default student;  

// ------------------------------------------------------------------

import { computeHeadingLevel } from '@testing-library/dom'
import React, { Component } from 'react'


// class Students extends Component{
//     state = {
//         name: "Aadi",
//         roll= {21}
// };




// import React from 'react'


// const Student1 = (props) =>
// {
//     return(
//     <h1> Hello World {props.children} </h1>
//     )
// }


// export default Student1





// import React, { Component } from 'react'


// class Student extends Component{
//     constructor(props)
//     {
//         super(props);
//     }
//     state = {
//         name: 'Aadi',
//         roll: this.props.rolle
//     }

//     render()
//     {
//         return <h1> Hello: {this.state.name} <br></br> Your Roll number is:  {this.state.roll} </h1>
//     }
// }

// export default Student 




// ------ State with Modification ---
// import React, { Component } from 'react'



// class Car extends Component{

//     constructor(props)
//     {
//         super(props);
//         this.state = {
//             name: "Ford",
//             model: 2012
//         }
//     }

//     changeModel = () =>
//     {
//         this.setState({model:2019});
//     }

//     render()
//     {
//         return(
//             <div>
//              <h1> Hello Your car Name is: {this.state.name}, And Your Car Model is: {this.state.model} </h1> 
//              <button type="button" onClick={this.changeModel}> Click to Change Model </button>  
//              </div>
//         );
//     }
// }


// export default Car;


// import React, { Component } from 'react'


// class Click extends Component {

//     state =
//     {
//         name:"aadi",
//         id: 1
//     };  

//     handleClick = (a) =>
//     {
//         console.log("Call 2",a) 
//         console.log(a);
//     }

//     // handleClickArg = () => 
//     // {
//     //     console.log("Call 1",this.state.id) 
//     //     this.handleClick(this.state.id)
//     // }    

//     render() {
//         return (
//             <div>
//                 <h1>Hello </h1>
//                 <button type="button" onClick={() => this.handleClick(this.state.id)}> Click Me! </button> 
//             </div>


//         )
//     }
// }


// export default Click;


// import React, { Component } from 'react'

// class Click extends Component 
//     {
//         state = 
//         {
//             name: "aadi",
//             age : 18
//         }

//         clicktest = (age) =>
//         {
//             alert(age);
//         } 

//         render()
//         {
//             return(
//                 <div> 
//                     <h2> Hello H2 </h2>
//                     <button type="button" onClick={() => this.clicktest(this.state.age)}> Click Me!!! </button>
//                 </div>
//             )
//         }
//     }

// export default Click;






// import React, { Component } from 'react'


// export default class App extends Component{
//     componentDidMount()
//     {
//         console.log("App Mounted");
//     }
//     // componentWillMount()
//     // {
//     //     console.log("App DeMounted");
//     // }
//     render()
//     {
//         return <h1> App </h1>
//     }
// }


import React, { Component } from 'react'

// export default class App extends Component {

//     componentDidMount()
//     {
//         console.log("Mount");
//     }
//     componentWillUnmount()
//     {
//         console.log("UN Mount");
//     }


//     render() {  
//         return (
//             <div>
//                 <h1> Hello </h1>
//             </div>
//         )
//     }bhai aa backup code chhe
// }

import React, { useState } from 'react'

// const App = () =>
// {

//     const [name, setName] = useState("aadi");
//     const [roll, setRoll] = useState(123);

//     // const nameStateVariable = useState("aadi");
//     // const name = nameStateVariable;
//     // const setName = nameStateVariable[1];


//     const click = () =>
//     {
//         setName("teli")
//         setRoll(321)
//     }

//     return(
//     <div>
//         {name}
//         {roll}
//         <button type="button" onClick={click}> Changee! </button>
//     </div>
//     )

// }


// export default App


import React,{useEffect, useState} from 'react'


// const App = () =>
// {
//     const [count,setCount] = useState(0);
//     const [count1,setCount1] = useState(50);

//     const click = () =>
//     {
//         setCount(count+1)
//     }

//     const click1 = () =>
//     {
//         setCount1(count1-1)
//     }

//     useEffect(() =>
//         {
//             console.log("Effect occurs");
//         }

//     )


//     return(
//         <div>
//             <h1> {count} </h1> 
//             <button type="button" onClick={click} > Increment </button> 

//             <h1> {count1} </h1> 
//             <button type="button" onClick={click1} > Increment </button> 
//         </div>
//     )


// }

// export default App;




// Controlled Component / Uncontrolled Component

// import React, { Component } from 'react'
// import './App.css'

// export default class App extends Component {
//             // const btnstyle=
//             // {
//             //     color:"blue",
//             //     backgroundColor:"orange"
//             // }
//             state ={
//                 // value:"Aadi Hello"
//                 value:""
//             }

//             handlechange =(e) =>
//             {
//                 console.log(e);
//                 this.setState({value:e.target.value})
//             }
//             render() {

//             return (

//             <div>
//                 <input type="text" value={this.state.value} onChange={this.handlechange} />
//             </div>
//              )
//     }
// } 

import React, { Component } from 'react'

// export default class App extends Component {

//     state={
//         value: "Hello this is textarea what we are learning today!!"
//     }
//     HandleChange = e =>
//     {
//         this.setState({value:e.target.value})
//     }

//     render() {
//         return (
//             <div>
//                 <textarea value={this.state.value} onChange={this.HandleChange} />
//                 </div>
//         )
//     }
// }

// arey bt output not computeHeadingLevel
// see try using console, it's working
// show menubar

import React, { Component } from 'react'

// export default class App extends Component {

//     state ={
//         Name : "Aadi",
//         Pass : 123
//     }
//     handleChange = e =>
//     {
//         // this.setState({[e.target.name]: e.target.value});
//         // console.log({[e.target.name]: e.target.value});;
        
//         // this.setState({[e.target.name]: e.target.value});
//         const value = e.target.name === "Name" ? e.target.value.toUpperCase() : e.target.value;
//         console.log("e.target.name",e.target.name);
//         // console.log("value",value);
//         // console.log({[e.target.name] : value});
        
//         // Selection, but when i try to use on frontend without console not workng 
        
//         this.setState({[e.target.name]: value})
        
//         // console.log({[e.target.name]:this.value})
        
//     }
    

//     render() {
//         return (
//             <div>
//                 <label>
//                     Name : <input type="text" value={this.state.Name} onChange={this.handleChange} name="Name"/>
//                 </label>
//                 <label>
//                     Password : <input type="text" value={this.state.Pass} onChange={this.handleChange} name="Pass"/>
//                 </label>
                
//             </div>
//         )
//     }
// }







import React, { Component } from 'react'

// export default class App extends Component {

//     constructor(props)
//     {
//         super(props)
//         this.textInput = React.createRef();
//         this.state={
//             value : ""
//         }
//     }

//     componentDidMount = () =>
//     {
//         this.textInput.current.focus()
//     }

//     handleSubmit = e =>
//     {
//         e.preventDefault();
//         this.setState({value :this.textInput.current.value})
//         console.log("log",this.textInput.current.value);
//     }

//     render() {
//         return (
//             <div>
//                 <div>
//                     <form onSubmit={this.handleSubmit}>
//                         <h1> You Typed : {this.state.value} </h1>
            

//                         <label>
//                             Name: <input type="text" ref={this.textInput}/>
//                         </label>
//                         {/* <label>
//                             Password: <input type="password" />
//                         </label> */}
//                         <input type = "submit" value="Submit"/>
//                     </form>
//                 </div>
//             </div>
//         )
//     }
// }



import React, { Component } from 'react'
// import Child2 from './Child2';
// export const Context = React.createContext();

// export default class App extends Component {

//     state=
//     {
//         name: "Aadi",
//         value: 10
//     }

//     handler = () =>
//     {
//         this.setState({value: this.state.value +1})
//     }


//     render() {

//         const ContextValue ={
//             data: this.state,
//             EventClick: this.handler
//         }

//         return (
//             <div>
//                 <Context.Provider value={ContextValue}>
//                 <Child2/>
//                 </Context.Provider>
                
//             </div>
           
//         )
//     }
// }



import React, { Component } from 'react'
// import { Provider } from './Context';
// import Child2 from './Child2';

// export default class App extends Component {


//     state=
//     {
//         name: "Aadi",
//         value: 10
//     }

//     handler = () =>
//     {
//         this.setState({value: this.state.value +1})
//     }


//     render() {

//         const ContextValue ={
//             data: this.state,
//             EventClick: this.handler
//         }

//         return (
//             <div>
//                 <Provider value={ContextValue}>
//                 <Child2/>
//                 </Provider>
                
//             </div>
           
//         )
//     }
// }