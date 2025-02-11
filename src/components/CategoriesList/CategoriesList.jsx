import React, { useEffect, useState } from 'react'
import styles from './CategoriesList.module.css'
import CategoriesListItem from '../CategoriesListItem/CategoriesListItem';

const CategoriesList = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        const fetchCategoriesList = async()=>{
            try {
                setIsLoading(true);
                const res = await fetch('https://dummyjson.com/products/categories');
                const data = await res.json();
                // console.log(data);
                
                setCategories(data);
            } catch (error) {
                console.log(error);
            }
            finally{
                setIsLoading(false)
            }
        };
        fetchCategoriesList()
    },[]);

    if(isLoading){
        return(
            <div>Is Loading....</div>
        )
    }

    console.log(categories);
  return (
    <div className={styles.wrapper}>
        {
            categories.map((item)=>(<CategoriesListItem
                key = {item.slug}
                categoryName = {item.slug}
            />))
        }
    </div>    
  )
}

export default CategoriesList