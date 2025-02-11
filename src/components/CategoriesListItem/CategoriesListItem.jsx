import React from 'react'
import styles from './CategoriesListItem.module.css'
import { Link } from 'react-router-dom'

const CategoriesListItem = (props) => {
  return (
    <div className={styles.container}>
        <Link to={`/categories/${props.categoryName}`}>{props.categoryName}</Link>
    </div>
  )
}

export default CategoriesListItem