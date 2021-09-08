import {React,useState} from 'react'
import { Link } from 'react-router-dom'
// import Login from './Components/login'
// import Home from './Home';


export const Data = () => {

    const [state, setState] = useState({

        Name:"",
        Password:"",
        Data:[{
            id:0,
            Name:"aadi",
            Password:"123",
        }]
    })

    var x = JSON.stringify(state.Data);
    localStorage.setItem("test",x)

    const handleChange = e =>
    {
        e.preventDefault()
        setState({...state,Name:e.target.value})
    }
    const handleChange1 = e =>
    {
        e.preventDefault()
        setState({...state,Password:e.target.value})
    }
    
    const eventSubmit = e =>
    {
        e.preventDefault()
        if(state.Name!="" && state.Age!="21"){
        // console.log("a",state);
        let FinalData = {
            id : state?.Data?.length,
            Name : state.Name,
            Password : state.Password
        }
        
        // console.log("finalData",FinalData);
        
        setState({
            Data : [...state.Data,FinalData],
            Name:"",
            Password:""
        })
    }
}
    console.log("data",state);
    console.log("data1",state.Data);


    return (
        <div>
            <h1> DataBase </h1>
            <label> Name: </label>
            <input type="text" value={state.Name} onChange={handleChange}/>
            <br/>
            <label> Password: </label>
            <input type="password" value={state.Password} onChange={handleChange1}/> 
            <br/>
            <br/>
            <button type="submit" class="btn btn-success" onClick={(e)=>eventSubmit(e)}> Register </button>
            <br/>
            <br/>
            <br/>
            <h2> Already a User? <button type="submit" class="btn btn-warning"> <Link to="/login"> Login </Link> </button> </h2>
            <br/>
            <br/>
            <br/>

            <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Password</th>
    </tr>
  </thead>
  <tbody>
      {state.Data.map(xx=>{
        //   return console.log("xx",xx);
        return <tr>
      <th scope="row"> {xx.id} </th>
      <td>{xx.Name}</td>
      <td>{xx.Password}</td>
      <td></td>
    </tr>
      })}
  </tbody>
</table>

      {/* <Login  */}
        </div>
    )
}

export default Data;
