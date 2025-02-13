import React, { useState } from "react";
import Input from "../ui/Input/Input";
import styles from "./StepForm.module.css";

const StepForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    city: "",
    password: "",
    confirmPassword: "",
  });

  const [step, setStep] = useState(1); 

  const handleSubmit = (event) => {
    event.preventDefault();

    const isFormValid = Object.values(formData).every((value) => value.trim() !== "");

    if (!isFormValid) {
      console.error("Заполните все поля");
      return;
    }

    console.log("Отправка формы:", formData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const nextStep = () => {
    if (
      (step === 1 && formData.name.trim() && formData.email.trim()) ||
      (step === 2 && formData.age.trim() && formData.city.trim())
    ) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className={styles.wrapper}>
        <div className={styles.container}>
        <h3>Step Form</h3>
        <form className={styles.form}>
          {step === 1 && (
            <>    
                <Input
                  labelText="Имя"
                  type="text"
                  id="name"
                  placeholder="Введите ваше имя"
                  onChange={handleChange}
                  name="name"
                  value={formData.name}
                />

                <Input
                  labelText="Почта"
                  type="email"
                  id="email"
                  placeholder="Введите почту"
                  onChange={handleChange}
                  name="email"
                  value={formData.email}
                />
            </>
          )}

          {step === 2 && (
            <>
              <Input
                labelText="Возраст"
                type="number"
                id="age"
                placeholder="Введите возраст"
                onChange={handleChange}
                name="age"
                value={formData.age}
              />

              <Input
                labelText="Город"
                type="text"
                id="city"
                placeholder="Введите город"
                onChange={handleChange}
                name="city"
                value={formData.city}
              />
            </>
          )}

          {step === 3 && (
            <>
              <Input
                labelText="Пароль"
                type="password"
                id="password"
                placeholder="Введите пароль"
                onChange={handleChange}
                name="password"
                value={formData.password}
              />

              <Input
                labelText="Подтверждение пароля"
                type="password"
                id="confirm-password"
                placeholder="Введите пароль снова"
                onChange={handleChange}
                name="confirmPassword"
                value={formData.confirmPassword}
              />
            </>
          )}
        </form>

      
        <div className={styles.buttons}>
          <button
            type="button"
            onClick={prevStep}
            className={`${styles.navButton} ${step === 1 ? styles.disabled : ""}`}
            disabled={step === 1}
          >
            Назад
          </button>

          {step < 3 ? (
            <button
              type="button"
              onClick={nextStep}
              className={`${styles.navButton} ${
                (step === 1 && (!formData.name.trim() || !formData.email.trim())) ||
                (step === 2 && (!formData.age.trim() || !formData.city.trim()))
                  ? styles.disabled
                  : ""
              }`}
              disabled={
                (step === 1 && (!formData.name.trim() || !formData.email.trim())) ||
                (step === 2 && (!formData.age.trim() || !formData.city.trim()))
              }
            >
              Вперед
            </button>
          ) : (
            <button onClick={handleSubmit}  type="submit" className={styles.submitButton}>
              Отправить
            </button>
          )}
        </div>
      </div>  
    </div>
    
  );
};

export default StepForm;
