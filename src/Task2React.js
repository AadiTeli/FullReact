import React, { useState } from 'react'

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
console.log("statess",state);
    const handleButton = e => {
        e.preventDefault();

        if(state.Name!=="" && state.Age!==""){

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
        alert("Data Should not be Blank!")
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
                <table class="table">
                    <thead>
                        <tr>

                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {state.Data.map(xx => {
                            return <tr>
                                <th scope="row">{xx.id}</th>
                                <td>{xx.Name}</td>
                                <td>{xx.Age}</td>
                                <td><button class="btn btn-warning" onClick={(e) => eventEdit(e, xx)}> Edit </button></td>
                                <td><button class="btn btn-danger" onClick={(e) => onRemove(e, xx.id)}> Delete </button></td>
                            </tr>

                        })}
                    </tbody>
                </table>
            </form>
        </div>
    )
}


export default Task2React