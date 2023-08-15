import React from 'react'

const Teacher = (props) => {
    console.log(props);
  return (
    <div style={{backgroundColor: 'orange', color:'black',padding:'10px',marginTop:'10px',borderRadius:'20px'}}>
        <h1>Teacher Name : {props.teacherr.Name}</h1>
        <h2>Id : {props.teacherr.Id}</h2>
    </div>
  )
}

export default Teacher