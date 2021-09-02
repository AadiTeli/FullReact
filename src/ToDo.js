// import React, {useState} from 'react'

// export const Task2React = () => {

//     const [state, setState] = useState({
//         Name: "",
//         Age: "",
//         Data: [{ id: 0, Name: "a", Age: "20" }]
//     })

//     const eventChange = e => {
//         console.log("e.target.value",e.target.value)
//         setState({ ...state, Name: e.target.value })
//     }
//     const eventChange1 = e => {
//         setState({...state, Age: e.target.value })
//     }


//     const handleSubmit = e => {
//         e.preventDefault();
//         let finalData = {
//             id:  state.Data.length,
//             Name:  state.Name,
//             Age:  state.Age
//         }
//         // setState({...state, Data: [...state.Data, finalData] })
//         // state.Data.push(finalData)
        
//         setState({
//             Data: [...state.Data, finalData],
//             Name:"",
//             Age:""
//         })
//     }
//     console.log("state",state)
//     // const eventDelete = e => {
//     //     e.preventDefault();
//     //     let deleteData = {
//     //         id:  state.Data.length,
//     //         Name:  state.Name,
//     //         Age:  state.Age
//     //     }
//     //     state.Data.pop(deleteData)
//     // }

//     const onRemove = (e, id) => {
//         e.preventDefault();
//         // console.log("state.Data",state.Data)
//         // console.log("id",id)
//         const result = state.Data.filter(Data=>Data.id!==id)
//         // setState(state.Data)
//         console.log("result",result)
//         // filter - value? 
//         // ()
//         // setState(state.Data.filter());
//         setState({
//             Data: [...result],
//         })
//         // console.log("new",result);
//       };

//     const eventEdit = () =>
//     {
//         console.log("Aadi");
//     }

//     return (
//         <div>
//             <form>
//                     <h1> Task2React </h1>
//                     <label> Name </label>
//                     <input type="text" value={state.Name} onChange={eventChange} />
//                     <br />
//                     <label> Age </label>
//                     <input type="number" max="100" value={state.Age} onChange={eventChange1} />
//                     <br />
//                     <button type="submit" value="Submit" class="btn btn-success" onClick={(e)=> handleSubmit(e)}> Input Data </button>
//                     {/* <button onClick={ eventDelete} class="btn btn-danger"> Delete Data </button> */}
//                     <table class="table">
//                         <thead>
//                             <tr>

//                                 <th scope="col">ID</th>
//                                 <th scope="col">Name</th>
//                                 <th scope="col">Age</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {console.log("state.Data",state.Data)}
//                             {state.Data.map(xx => {
//                                 return <tr>
//                                     <th scope="row">{xx.id}</th>
//                                     <td>{xx.Name}</td>
//                                     <td>{xx.Age}</td>
//                                     <td><button class="btn btn-warning" onClick={()=>eventEdit()}> Edit </button></td>
//                                     <td><button class="btn btn-danger" onClick={(e)=>onRemove(e,xx.id)}> Delete </button></td>
//                                 </tr>

//                             })}
//                         </tbody>
//                     </table>
//                 </form>
//         </div>
//     )
// }


// export default Task2React