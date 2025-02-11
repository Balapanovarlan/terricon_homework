import React  from 'react'
import styles from './Input.module.css'
const Input = ({placeholder,
    type, 
    name,
    id,
    labelText,
    onChange,
    value,
}) => {
  return (
    <div className={styles.wrapper}>
        <label htmlFor={id} className={styles.label}>{labelText}</label>
        <input 
            id = {id}
            className={styles.input}
            type={type} 
            placeholder={placeholder}
            name={name}
            
            onChange={onChange}
            value={value}
        />
    </div>
  )
}

export default Input