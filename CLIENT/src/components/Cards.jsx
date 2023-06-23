import Card from './Card';
import style from '../components css/cards.module.css'

export default function Cards({characters, onClose}) {
   // const personajes = props.map((per)=> <li key ={per.id}></li>);
   // const {characters} = props;
   // const personajes = per.map(n => {<h3>{n.id}</h3>})
   return (
   <div className ={style.contenedor} >
      {
         characters.map(({id, name, status, species, gender, image, origin}) => {
            return (
               <Card 
               key = {id}
               id = {id}
               name = {name}
               status = {status}
               species = {species}
               gender = {gender}
               image = {image}
               origin ={origin}
               onClose={onClose}
               />
            )
         })
      }
   </div>)
   ;
}
