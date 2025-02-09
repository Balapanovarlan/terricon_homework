import React from 'react'

const UsersListItem = (props) => {
    console.log(props);
    
  return (
    <div>
    <h4>{props.name}</h4>
    <ul>
        <li>{props.phone}</li>
        <li>{props.website}</li>
    </ul>
    </div>
  )
}

export default UsersListItem