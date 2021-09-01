import React, { useState } from 'react'

export const Prac = () => {

    const [data, setData] = useState(1)

    const change = () => {
        setData(data+1)

    }

    return (
        <div>
            {data}
            <button type="button" onClick={change}> Change!! </button>
        </div>
    )
}


export default Prac;