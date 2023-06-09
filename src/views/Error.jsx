import img404 from '../assent/46828885c28a6bfa34dd4d6bd9986c8d.png' 
import style from './views css/error.module.css'
import { Link } from 'react-router-dom'
export default function Error (){
 return(
    <div>
        <div><Link to = '/'><button className={style.btn}>LOGIN</button></Link></div>
    <img src={img404} alt="" width='80%'/>
    </div>
)
}