import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import style from './views css/Detail.module.css';

function Detail () {
    const { id } = useParams();
    const [character, setCharacter] = useState([]);
    useEffect(() => {            
             axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
             if (data.name) {
             setCharacter(data);
             } else {
                window.alert('No hay personajes con ese ID');
             }        
        });

        return setCharacter({});
     }, [id]);
    return (
        <section>
            
            <div className={style.detail}>
            <img src={character.image} alt={character.name} />
            <div>
            <h1>{character.name}</h1>
                <div className ={style.detalle}>
                <h2>STATUS: <span>{character.status}</span></h2>
                <h2>ESPECIE: <span>{character.species}</span></h2>
                <h2>GENERO: <span>{character.gender}</span></h2>
                <h2>ORIGEN: <span>{character.origin}</span></h2>
                </div>
            </div>
        </div>
        <div><Link to='/home'><button className={style.footer}>HOME</button></Link></div>
        </section>
        
        
          
    )
}

export default Detail;