import React from 'react'
import styles from './ProductItem.module.css'
const ProductItem = (props) => {
  return (
    <div className={styles.container}>
      <img src={props.image} alt="" />
      <h3>{props.title}</h3>
      </div>
  )
}

export default ProductItem