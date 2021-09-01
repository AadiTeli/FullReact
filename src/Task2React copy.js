// import React, { Component } from 'react'

// export default class Task2React extends Component {

//     state={
//         name:"",
//         Age:"",
//         Data: []
//     }


//     eventChange = e =>
//     {
//         this.setState({name:e.target.value})

//         // e.preventDefault();
//     }
//     eventChange1 = e =>
//     {
//         this.setState({Age:e.target.value})

//         // e.preventDefault();
//     }

//     handleSubmit = e =>
//     {
//         e.preventDefault();
//         // data push -> name & age {name:"",age:21}

// let finalData = {
//     id:this.state.Data.length,
//     name:this.state.name,
//     Age:this.state.Age
// }
//         this.state.Data.push(finalData)
//         console.log("stateData",this.state.Data); 

//         // this.state.Data.pop(this.state)
//         // console.log(this.state.Data); 
        
//         // console.log(Data);

//         // console.log("state",this.state);
        
//     }
    
//     eventDelete = e =>
//     {
//         e.preventDefault();
//         let deleteData = {
//             id:this.state.Data.length,
//             name:this.state.name,
//             Age:this.state.Age
//         } 
//         this.state.Data.pop(deleteData)

//         console.log("pop data",deleteData);

//     }

//     render() {
//         // console.log(this.state);
//         return (
//             <div>
//             <form onSubmit={this.handleSubmit}>
//                 <h1> Task2React </h1>
//                 <label> Name </label>
//                 <textarea value={this.state.name} onChange={this.eventChange}/>
//                 <br/> 
//                 <label> Age </label>
//                 <textarea value={this.state.Age} onChange={this.eventChange1}/>
//                 <br/>
//                 <button type="submit" value="Submit"> Input Data </button>
//                 <button onClick={this.eventDelete}> Delete Data </button>


//                 {/* <br/>
//                 <br/>
//                 <br/>
//                 <label> Your Values Are: </label>
//                 <textarea value={this.state.name}/>
//                 <textarea value={this.state.Age}/> */}
//                 </form>
//             </div>
//         )
//     }
// }
