// import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";
import { filterFav, orderFav, resetFav } from "../redux/actions";
import style from '../components css/favorite.module.css'


export default function Favorites (){
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.myFavorites);

  function handleSort(e) {
    dispatch(orderFav(e.target.value));
  }

  function handleFilter(e) {
    dispatch(filterFav(e.target.value));
  }

  function handleReset() {
    dispatch(resetFav());
  }
  return (
		<body className={style.body}>
        <span>
          <select placeholder="Gender" onChange={handleFilter}>
          {["Male", "Female", "unknown", "Genderless"].map((gender) => (
          <option value={gender}>{gender}</option>
          ))}
          </select>
          <select placeholder="Orden" onChange={handleSort}>
          {["Ascendente", "Descendente"].map((order) => (
          <option value={order}>{order}</option>
          ))}
          </select>
          <button onClick={handleReset}>RESET</button>
        </span>
       
    <main>
      {favorites?.map(
            ({ id, name, status, species, gender, origin, image}) => {
              return (
                
                  <Card
                  key={id}
                  id={id}
                  name={name}
                  status={status}
                  species={species}
                  gender={gender}
                  origin={origin}
                  image={image}
                />
              );
            }
          )}
    </main>
            
    </body>
        
    )
}

// const mapStateToProps = (state) => {
//     return{
//         favorites: state.myFavorites
//     }
// }

// export default connect(mapStateToProps, null)(Favorites)