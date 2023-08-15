import React from 'react'
import User from '../User/User'

const Users = () => {
    const Users = [
        {
            Name: 'Ashik',
            Id: '1'
        },
        {
            Name: 'Badsha',
            Id: '2'
        },
        {
            Name: 'Mahfuz',
            Id: '3'
        }
    ]
  return (
    <div>
        {
            Users.map((user)=><User userr={user}></User>)
        }
        
    </div>
  )
}

export default Users