import React from 'react'

import styles from './ToDoItem.module.css'

const ToDoItem = ({todo, completed}) => {
    return (
        <div className={`${styles.itemContainer} ${completed? styles.completed : styles.pending}`}>
            <p className={styles.todoText}>{todo}</p>
            <span className={styles.status}>{completed? 'Completed' : 'In process'}</span>
        </div>
  );
};

export default ToDoItem

