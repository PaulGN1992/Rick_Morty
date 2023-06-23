import SearchBar from "./searchBar";
import { Link } from "react-router-dom";
import imgNav from '../assent/tt.png';
import style from '../components css/nav.module.css'


export default function Nav({onSearch}) {
   return (
      <div className={style.principal}>
            <img className={style.imagen} src={imgNav} alt='imagen Rick y Morty' />
         <div className={style.barra}>
            <span>
            <Link to = '/about'><button>ABOUT</button></Link>
            <Link to = '/home'><button>HOME</button></Link>
            <Link to = '/favorites'><button>FAVORITE</button></Link>
            </span>
            <SearchBar onSearch={onSearch}/>
            
            
         </div>
      </div>
   )
}  
