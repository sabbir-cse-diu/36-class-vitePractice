import React from 'react'

const User = (props) => {
  return (
    <div style={{backgroundColor: 'teal', color:'#fff',padding:'10px',marginTop:'10px',borderRadius:'20px'}}>
        <h1>User Name : {props.userr.Name}</h1>
        <h2>Id : {props.userr.Id}</h2>
    </div>
  )
}

export default User