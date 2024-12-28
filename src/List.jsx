//useCallBack
// import React, { useEffect, useState } from 'react'

// const List = ({getitems}) => {
//     const[items,setitems]=useState([]);
//     useEffect(()=>{setitems(getitems());
//         console.log("setting item")
//     },[getitems]);
//   return (
//     <div>{items.map((item,index)=>{
//         return <p key={index}>{item}</p>
//     })}</div>
//   )
// }

// export default List

import React, { useContext } from 'react'
import { createcontect } from './App';




const List = () => {
    const {theme}=useContext(createcontect);
    const style={
        backgroundColor:theme==="light"?"white":"black",
        color:theme==="dark"?"black":"white"

    }
  return (
    <div>
        <h1 style={style}>List</h1>
        
    </div>
  )
}

export default List