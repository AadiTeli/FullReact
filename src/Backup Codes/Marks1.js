// import React, { Component } from 'react'

// export default class Marks extends Component {

//     constructor(props)

//     {
//         super(props)
//         this.state={
//             mroll:this.props.roll
//         }
//     }

//     render() {
//         return (
//             <div>
                
//             </div>
//         )
//     }
// }


// import React, { Component } from 'react'

// export default class Marks extends Component {

//     constructor(props)
//     {
//         super(props)
//         this.state = 
//         {
//             mroll : this.props.roll
//         }

//     }
//     static getDerivedStateFromProps (props,state)
//     {
//         console.log(props,state);
//         if(props.roll !== state.mroll)
//         {
//             return{mroll: props.roll}
//         }
//         return null;
//     }

//     getSnapshotBeforeUpdate(prevProps,prevState)
//     {
//         console.log("Snap");
//         console.log(prevProps, prevState);
//     }

//     componentDidUpdate(prevProps,prevState,snapshot)
//     {
//         console.log("Did");
//         console.log(prevProps, prevState, snapshot);   
//     }

//     render() {
//         console.log("Marks Rend ");
//         return (
//             <div>
//                 <h2> {this.props.mroll} </h2> 
//             </div>
//         )
//     }
// }
// import React, { Component } from 'react'
// import Marks from './Marks'



// export default class Const extends Component  
// {
//     constructor(props)
//     {
//         super(props)
//         // console.log("Conss Called");

//         this.state={
//             roll:101
//         }
//     }

//     static getDerivedStateFromProps(props,state)
//     {
//         console.log(props,state);
//         return null;
//     }
//     // static getDerivedStateFromProps(props,state)
//     // {
//     //     // console.log("Derived called");
//     //     console.log(props,state);
//     //     return null;
//     // }

//     eventhandle = () =>
//     {
//         console.log("Button Clicked");
//         // this.setState({roll:102})
//         this.setState({roll: this.state.roll + 2})
//     }
//     render()
//     {
//         console.log("App Rend");

//         return(
//             <div>
//                 <Marks roll={this.state.roll}/>
//                 <button onClick={this.eventhandle}> Click Me! </button>
//             </div>
//         )
//     }
// }