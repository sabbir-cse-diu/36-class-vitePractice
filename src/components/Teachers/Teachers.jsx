import React from 'react'
import Teacher from '../Teacher/Teacher'

const Teachers = () => {
    const Teachers = [
        {
            Name: 'Shohel',
            Id: '1'
        },
        {
            Name: 'Rana',
            Id: '2'
        },
        {
            Name: 'Baig',
            Id: '3'
        }
    ]
  return (
    <div>
        {
            Teachers.map((teacher)=><Teacher teacherr={teacher}></Teacher>)
        }
    </div>
  )
}

export default Teachers