import imgForm from '../assent/rm.jpg'
import style from '../components css/form.module.css'
import { useState } from 'react';

function validate(user) {
    let errors = {};
  
    
    if (!/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(user.email)) {
      errors.email = "Email invalido";
    }
    if (!user.email) {
      errors.email = "Ingrese email";
    }
    
    if (user.email.length >= 35) {
      errors.email = "Email invalido";
    }
    if (!/\d/.test(user.password)) {
      errors.password = "Debe contener un número";
    }
    if (user.password.length < 6 || user.password.length > 10) {
      errors.password = "Debe tener entre 6 y 10 caracteres";
    }
    if (!user.password) {
      errors.password = "Ingrese contraseña";
    }
  
    return errors;
  }

export default function Form ({login}) {
    
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: " ",
    password: " ",
  });

  function handleChange(e) {
    e.preventDefault();
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...user,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!errors.email && !errors.password) {
      login(user);
    } else {
      alert("Datos incorrectos");
    }
  }
    return(
    <div className={style.formP}>
        <div>
            <h1>INGRESAR</h1>
            <img src={imgForm} alt="imagen" />
        </div>
    <form type= 'submit'>
        <label htmlFor="">EMAIL: </label>
        <span>
            <input 
            onChange={handleChange}
            name="email"
            value={user.email}
            placeholder="Ingrese Email"
            />
            {errors.email ? <p>{errors.email}</p> : null}
        </span>
        <label htmlFor="">CONTRASEÑA: </label>
        <span>
            <input 
            type="password"
            name = "password"
            placeholder="Ingrese Contraseña"
            value={user.password}
            onChange={handleChange}
            />
            {errors.password ? <p>{errors.password}</p> : null}
            </span>
        <p><button type="submit" onClick={handleSubmit}>Inicio de sesión</button></p>
    </form>
    </div>
    );
}

