import styles from './FirstComponent.module.css'

const FirstComponent = ({userName}) =>{
    // const userName = "Ivan"
    return (
        <div className={styles.container}>
            Привет {userName}! 
        </div>
    )
};

export default FirstComponent; 
