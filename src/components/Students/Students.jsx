import React from 'react'
import Student from '../Student/Student'

const Students = () => {
    const Students = [
        {
            Name: 'Sabbir',
            Id: '1'
        },
        {
            Name: 'Swagato',
            Id: '2'
        },
        {
            Name: 'Jakir',
            Id: '3'
        }
    ]
  return (
    <div>
        {
            Students.map((student)=><Student studentt={student}></Student>)
        }
    </div>
  )
}

export default Students