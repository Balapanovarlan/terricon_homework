import React, { useEffect, useState } from 'react'
import styles from './UsersList.module.css';

import UsersListItem from '../UsersListItem/UsersListItem';

const UsersList = () => {
    /* 
        1) Сам state (переменная)
        2) Функция для записи в state (потмоу что нельзя перезаписывать на прямую)
        3) useState принимает initial value (начальное значение)
    */
    const [isLoading, setIsLoading] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setIsLoading(true);

                const res = await fetch('https://dummyjson.com/users');
                const data = await res.json();
                setUsers(data.users);
            } catch {
                console.log("error");
            } finally {
                setIsLoading(false);
            }
        }

        fetchUsers();
    }, []);

    if (isLoading) {
        return (
            <div>
                Идет загрузка..
            </div>
        )
    }

    return (
        <div className={styles.wrapper}>
            {users.map((item) => (
                <UsersListItem 
                    key={item.id} 
                    id={item.id}
                    name={item.firstName} 
                    email={item.email} 
                    phone={item.phone} 
                />
            ))}
        </div>
    )
}

export default UsersList