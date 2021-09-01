import React, { Component } from 'react'

export default class Task2React extends Component {

    state = {
        Name: "",
        Age: "",
        Data: [{ id: 0, Name: "a", Age: "20" }]
    }

    
    eventChange = e => {
        this.setState({ Name: e.target.value })
    }
    eventChange1 = e => {
        this.setState({ Age: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault();
        let finalData = {
            id: this.state.Data.length,
            Name: this.state.Name,
            Age: this.state.Age
        }
        this.state.Data.push(finalData)

    }
    eventDelete = e => {
        e.preventDefault();
        let deleteData = {
            id: this.state.Data.length,
            Name: this.state.Name,
            Age: this.state.Age
        }
        this.state.Data.pop(deleteData)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1> Task2React </h1>
                    <label> Name </label>
                    <textarea value={this.state.Name} onChange={this.eventChange} />
                    <br />
                    <label> Age </label>
                    <textarea value={this.state.Age} onChange={this.eventChange1} />
                    <br />
                    <button type="submit" value="Submit" class="btn btn-success"> Input Data </button>
                    <button onClick={this.eventDelete} class="btn btn-danger"> Delete Data </button>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.Data.map(xx => {
                                    console.log("xx",xx);
                                return <tr>
                                    <th scope="row">{xx.id}</th>
                                    <td>{xx.Name}</td>
                                    <td>{xx.Age}</td>
                                </tr>

                            })}
                        </tbody>
                    </table>
                </form>
            </div>
        )
    }
}
