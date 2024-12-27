import React, { useEffect, useState } from 'react'

const List = ({getitems}) => {
    const[items,setitems]=useState([]);
    useEffect(()=>{setitems(getitems());
        console.log("setting item")
    },[getitems]);
  return (
    <div>{items.map((item,index)=>{
        return <p key={index}>{item}</p>
    })}</div>
  )
}

export default List