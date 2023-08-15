import React from 'react'

const Student = (props) => {
    console.log(props);
  return (
    <div style={{backgroundColor: 'green', color:'#fff',padding:'10px',marginTop:'10px',borderRadius:'20px'}}>
        <h1>Student Name : {props.studentt.Name}</h1>
        <h2>Id : {props.studentt.Id}</h2>
    </div>
  )
}

export default Student