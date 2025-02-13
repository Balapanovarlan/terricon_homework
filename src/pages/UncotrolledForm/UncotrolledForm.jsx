import React, { useEffect, useRef } from 'react'

const UncotrolledForm = () => {

    const descriptionRef = useRef(null);

    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log(descriptionRef.current.value);
        
    }

    console.log(descriptionRef.current);
    
    useEffect(()=>{
        console.log(descriptionRef.current);
        descriptionRef.current.focus();
        
    },[]);

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="description">Описание</label>
                <input type="text" ref={descriptionRef}/>
            </div>
            <div>
                <label htmlFor="price">Цена</label>
                <input type="number" />
            </div>
            <button>Отправить</button>
        </form>
    )
}

export default UncotrolledForm