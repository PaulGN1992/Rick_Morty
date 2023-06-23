import { useState } from "react";
import style from '../components css/nav.module.css'

export default function SearchBar({onSearch}) {

    const [id, setId] = useState("")

    function changeHandler (e) {
        e.preventDefault();
        let input = e.target.value;

        setId(input)
    }
    return (
       <div className={style.searchBar}>
         <input className={style.input} type='search' value = {id} placeholder="Buscar por ID" onChange={changeHandler}/>
          <button onClick={()=>onSearch(id)}>Buscar</button>
       </div>
    );
 }