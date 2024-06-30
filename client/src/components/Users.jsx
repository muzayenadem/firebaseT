import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Users() {
const [list,setList] =useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/admins')
        .then(result =>{
            setList(result.data)
        })
        .catch(err=>{
            console.log({error:err.message})
        })
    },[])
  return (
    <div>
        Users
        {list.map((single,i) => <div key={i}><h2>{single.name}</h2></div>)}
    </div>
  )
}

export default Users