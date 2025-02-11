import React, { useEffect, useState } from 'react'
import ProductItem from '../ProductItem/ProductItem';
import styles  from './ProdByCategoryList.module.css'
import { useParams } from 'react-router-dom';

const ProdByCategory = () => {
   const {slug} = useParams()
  const [products, setProducts] = useState([]);

  useEffect(()=>{
      const fetchProdByCategory = async()=>{
        try{
            const res =  await fetch(`https://dummyjson.com/products/category/${slug}`);
            const data = await res.json();
            setProducts(data.products);

        }catch(error){
          console.log(error);
          
        }
      }
      if(slug){
        fetchProdByCategory();
      }
  },[slug])

  return (
    <div className={styles.wrapper}>
        {
        products.map((item)=>(<ProductItem
                key = {item.id}
                image = {item.thumbnail}
                title = {item.title}
            />))
        }
    </div>
  )
}

export default ProdByCategory