import React  from 'react';
import { useNavigate } from 'react-router-dom';
import {addFav, removeFav} from '../redux/actions' 
import style from '../components css/card.module.css'
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

const mapStateToProps = (state) => {
   return {
      favorites: state.myFavorites
   }
};
const mapDispatchToProps =(dispatch) =>{
   return{
      addFav: (character) => {
         dispatch(addFav(character))        
      },
      removeFav: (id) => {
         dispatch(removeFav(id))
      }
   };
}; 
function Card({id, name, status, species, gender, image, origin, onClose, addFav, removeFav, favorites}) {
   const navigate = useNavigate();
   const [closeBtn, setCloseBtn] = useState(true);
   useEffect(() => {
      if (!onClose) {
        setCloseBtn(false);
      }
    }, []);
    
   function navigateHandler() {
      navigate(`/detail/${id}`);
   }
   const [isFav, setIsFav] = useState(false)
   
   useEffect(() => {
      favorites.forEach((fav) => {
         if (fav.id === Number(id)) {
            setIsFav(true);
         }
      });
   }, [favorites]);
   
   function handleFavorite () {
      if (!isFav) {
         addFav({id, name, status, species, gender, origin, image, onClose})
         setIsFav(true);
      } else {
         removeFav(id)
         setIsFav(false)
      }
   }
   return (
      <div className={style.contenedor}>
         {closeBtn && (
          <button className={style.botonCerrar} onClick={()=>{onClose(id)}}>x</button>
        )}
         <div className={style.contenedor2} onClick={navigateHandler}>

         <div><img className={style.imagen} src={image} alt=''/></div>
         <h1>{name}</h1>
         {/* <h2>Status: {status}</h2>
         <h2>Especie: {species} </h2>
         <h2>Género: {gender} </h2>
         <h2>Origen: {origin}</h2> */}
         </div>
         {
   isFav ? (
      <button onClick={()=> handleFavorite(id)}>❤️</button>
   ) : (
      <button onClick={()=> handleFavorite(id)}>🤍</button>
   )
}
      </div>
   );
}
export default connect(mapStateToProps, mapDispatchToProps)(Card); 

