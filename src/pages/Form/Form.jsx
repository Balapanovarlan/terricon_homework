import React , {useState} from 'react'
import styles from './Form.module.css'
import Input from '../../components/ui/Input/Input'

const Form = () => {
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");

    const [formData, setFormData] = useState({
        formName: "",
        formEmail: "",
        formPass: "",
    }
    );

    const handleSubmit = (event) =>{
        event.preventDefault();
    };

    const handleChange = (event) =>{
       const inputName = event.target.name;
       const  inputValue = event.target.value ;
       setFormData((prev)=>({
            ...prev,
            [inputName]:inputValue,
        }));  
       console.log(formData);
       
    };

    return (
    <div>
        <h3>Form</h3>
        <form className={styles.form} onSubmit={handleSubmit}>
            <Input 
                labelText={"Имя"}
                type={"text"}
                id={"name"}
                placeholder={"Введите ваше имя"} 
                // value={name}
                // onChange={(event)=>{
                //     setName(event.target.value);
                // }} 

                onChange={handleChange}
                name={"formName"}
            />

            <Input 
                labelText={"Почта"}
                type={"email"}
                id={"email"}
                placeholder={"Введите почту"} 
                // value={email}
                // onChange={(event)=>setEmail(event.target.value)} 

                onChange={handleChange}
                name={"formEmail"}
            />

            {/* {email.includes("@") && <Input 
                labelText={"add text"}
                type={"number"}
                id={"number"}
                placeholder={"Test"}
                />
            } */}

            <button>Send</button>
        </form>
    </div>
  )
}

export default Form