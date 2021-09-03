import React from 'react'
import Task2React from './FinalTodo'


export const Table = (props) => {
    // console.log("props",props);
    return (
        <div>
            <h1>Hello Table</h1>
            <table class="table">
                    <thead>
                        <tr>

                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props?.state?.map(xx => {
                            return <tr>
                                <th scope="row">{xx.id}</th>
                                <td>{xx.Name}</td>
                                <td>{xx.Age}</td>
                                <td><button class="btn btn-warning" onClick={(e) => props?.eventEdit(e, xx)}> Edit </button></td>
                                <td><button class="btn btn-danger" onClick={(e) => props?.onRemove(e, xx.id)}> Delete </button></td>
                            </tr>

                        })}
                    </tbody>
                </table>
        </div>
    )
}

export default Table;
