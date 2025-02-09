import React, { useEffect, useState } from "react";
import styles from './UsersList.module.css'
import UsersListItem from "../UsersListItem/UsersListItem";

const UsersList = () =>{
    const [isLoading, setIsLoading] = useState(false);

    const [users , setUsers] = useState([]);


    useEffect(()=>{
        const fetchUsers = async () =>{
           try {
                setIsLoading(true);
                const res = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await res.json();
                setUsers(data);
           } catch (error) {
                console.log(error);
                
           }finally{
                setIsLoading(false);
           }
        }
        fetchUsers();
    }, [])

    if (isLoading) {
        return(
            <div>
                Loading...
            </div>
        )
    }
    
    return(
        <div className={styles.wrapper}>
           {users.map(item => (
               <UsersListItem  {...item}/>
           ) )}
        </div>
    )
}

export default UsersList

// rafce