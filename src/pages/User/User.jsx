import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import UsersListItem from '../../components/UsersListItem/UsersListItem';

const User = () => {
    const {id} = useParams();
    const [userData, setUserData] = useState([]);
    useEffect(()=>{
        const getUserData = async () =>{
            const res = await fetch(`https://dummyjson.com/users/${id}`);
            const data = await res.json();
            setUserData(data);
        }
        getUserData()
    },[id])

    return (
        <div>
            <UsersListItem 
            // key =  {userData.id}
            id = {userData.id}
            name={userData.firstName} 
            email={userData.email} 
            phone={userData.phone} 
            />
        </div>
    )
}
 
export default User