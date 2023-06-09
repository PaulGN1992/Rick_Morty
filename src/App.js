import './App.css';
import { useState} from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { removeFav } from './redux/actions';
import { useDispatch } from 'react-redux';

import axios from 'axios';
import About from './views/About.jsx'
import Error from './views/Error'
import Detail from './views/Detail'
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import Form from './components/Form'
import Favorites from './components/Favorite';

function App() {

   const [characters, setCharacters ] = useState([])
   const {pathname} = useLocation();
   console.log(pathname)
   const dispatch = useDispatch();

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = "pmgn@gmail.com";
   const PASSWORD = "password1";

   function loginHandler(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
        setAccess(true);
        navigate("/home");
      } else {
       alert("Email o Password incorrectos");
      }
    }

   //  useEffect(() => {
   //       !access && navigate('/')
   //  },[access]);

   function onSearch(id) {
         axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         });
   }

   function closeHandler(id) {
      dispatch(removeFav(id))
      setCharacters(
         characters.filter((char) => {
            return char.id !== Number(id);
               }
            )
      )
      
    }

   return (
   
      <div className='App'>
         {!access ? (
            <Routes>
               <Route path='/' element = {<Form login={loginHandler}/>}/>
               <Route path = '*' element = {<Error/>}/> 
            </Routes>
            )
            : (
               <>
            <Nav onSearch={onSearch} />
            <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={closeHandler}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path = '/detail/:id' element = {<Detail/>} />
            <Route path ='/favorites' element={<Favorites/>}/>
            
         </Routes>
         </>
         )}
         
        
      </div>
         
   );
}

export default App;
