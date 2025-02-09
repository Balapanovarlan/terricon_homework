import React, { useState } from "react";
import styles from './Counter.module.css'

const Counter = ()=>{
    const [counter , setCounter] = useState(1);

    const handleClickPos = () =>{
        setCounter(counter+1);
    }    

    const handleClickNeg = () =>{
        if (counter < 1) {
            return;
        }
        setCounter(counter-1);
    }    

    return(
        <div className={styles.container}>
            <div>Counter:{counter}</div>
            <button onClick={handleClickPos}>+</button>
            <button onClick={handleClickNeg}>-</button>
        </div>
   
    )
}

export default Counter