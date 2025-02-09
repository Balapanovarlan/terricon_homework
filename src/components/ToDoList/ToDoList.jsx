import React, { useState , useEffect} from 'react'

import styles from './ToDoList.module.css'

import ToDoItem from "../ToDoItem/ToDoItem"

const ToDoList = () => {
    const [isLoading,setIsLoading] = useState(false);
    const [todos, setTodos] = useState([]);


    useEffect(()=>{
            const fetchUsers = async () =>{
               try {
                    setIsLoading(true);
                    const res = await fetch("https://dummyjson.com/todos");
                    const data = await res.json();
                    console.log(data);
                    
                    setTodos(data.todos);
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
               {todos.map(item => (
                   <ToDoItem  
                   key={item.id}
                   {...item}/>
               ) )}
            </div>
        )
}

export default ToDoList