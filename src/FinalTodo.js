import React, { useState } from 'react'
import reactDom from 'react-dom'
import Table from './Table'


export const Task2React = () => {

    const [state, setState] = useState({
        Name: "",
        Age: "",
        Data: [{ id: 0, Name: "a", Age: "20" }]
    })

    console.log("state", state)
    const eventChange = e => {
        console.log("e.target.value", e.target.value)
        setState({ ...state, Name: e.target.value })
    }
    const eventChange1 = e => {
        setState({ ...state, Age: e.target.value })
    }
// console.log("statess",state);
    const handleButton = e => {
        e.preventDefault();

        if(state.Name=="Aadi" && state.Age=="21"){

        if (state.id === undefined) {


            let finalData = {
                id: state.Data.length,
                Name: state.Name,
                Age: state.Age
            }
            setState({
                Data: [...state.Data, finalData],
                Name: "",
                Age: ""
            })
        } else {
            const update = state.Data.map(Data => {
                if (Data.id === state.id) {
                    Data.Name = state.Name
                    Data.Age = state.Age
                }
                return Data
            })
            setState({
                Data: update,
                Name: "",
                Age: ""
            })
        }

    }
    else{
        alert("Wrong Credentials!")
    }
}

    // const handleUpdate = (e) => {
    //     e.preventDefault();

    // }

    const onRemove = (e, id) => {
        e.preventDefault();
        const result = state.Data.filter(Data => Data.id !== id)
        // setState(state.Data)
        // console.log("result",result)
        // filter - value? 
        // ()
        // setState(state.Data.filter());
        setState({
            Data: [...result],
        })
        // console.log("new",result);
    };

    const eventEdit = (e, xx) => {
        e.preventDefault();
        console.log("Full state Edit", xx);
        setState({
            Data: [...state.Data],
            Name: xx.Name,
            Age: xx.Age,
            id: xx.id
        })
    }

    return (
        <div>
            <form>
                <h1 align="center" class="display-3"> CRUD Operations! </h1>
                <label> Name </label>
                <input type="text" pattern="[a-zA-Z]*" value={state.Name} onChange={eventChange} />
                <br />
                <label> Age </label>
                <input type="number" value={state.Age} onChange={eventChange1} />
                <br />

                {/* {state.id == undefined?
                    <button type="submit" value="Submit" class="btn btn-success" onClick={(e) => handleSubmit(e)}> Input Data  </button>
                :
                <button type="submit" value="Update" class="btn btn-warning" onClick={(e) => handleUpdate(e)}> Update Data </button>

                } */}
                <button type="submit" value="Update" class={state.id === undefined ? "btn btn-success" : "btn btn-warning"} onClick={(e) => handleButton(e)}> {state.id === undefined ? "Input Data" : "Update Data"} </button>

                {/* <button onClick={ eventDelete} class="btn btn-danger"> Delete Data </button> */}

                {/* eventEdit = {()=>{}}
                onRemove = {()=>{}} */}

                <Table 
                state = {state.Data}
                eventEdit = {(e, xx) => eventEdit(e, xx)}
                onRemove = {(e, id) => onRemove(e, id)} 
                />

            </form>
        </div>
    )
}


// onRemove = (e, id)
// const eventEdit = (e, xx) => {
export default Task2React