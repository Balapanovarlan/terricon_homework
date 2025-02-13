import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Nav.module.css'

const Nav = () => {
  return (
    <nav className={styles.nav}>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link >
        <Link to={"/form"}>Form</Link>
        <Link to={"/categories"}>Categories</Link>
        <Link to={"/stepForm"}>StepForm</Link>
        <Link to={"/uncontrolled"}>Uncontrolled</Link>
    </nav>
  )
}

export default Nav