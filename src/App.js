// import React from 'react';
import React, { useState } from 'react';

const App = () =>
{   
    const [Data, setData] = useState([
        {name: "Aadi" , id:"1"},
        {name: "Raaj" , id:"2"},
    ])

    return(
        <div>

        {Data?.map((items) => {
            return(

                <>
                    {/* <li> {items.id} </li>
                    <table>
                        <th>  {items.name}  </th>
                    </table> */}

<table>
  <tr>
    <th>ID</th>
    <th>Name</th>
  </tr>
  {items.id="1"}
  <tr>
    {items.}
  </tr>
</table>


                </>
            )
            
        } )}




        </div>

        
    )
}
export default App;