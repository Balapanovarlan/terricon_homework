import React from 'react'
import styles from './UsersListItem.module.css';
import { Link } from 'react-router-dom';

const UsersListItem = (props) => {  
    return (
        <div className={styles.wrapper}>
            <Link to={`/user/${props.id}`} >{props.name}</Link>
            <ul>
                <li>{props.phone}</li>
                <li>{props.email}</li>
            </ul>
        </div>
    )
}

export default UsersListItem