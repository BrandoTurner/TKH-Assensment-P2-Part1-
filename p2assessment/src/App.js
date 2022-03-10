import './App.css';
import { NavLink, Route, Routes} from 'react-router-dom';
import Landing from './components/Landing'
import Cat from './components/Cat';
import Dog from './components/Dog';

export default function App() {
  return (
    <div className='App'>
      <div className= 'links'>
        <nav>
          <NavLink to={"/"}>Landing</NavLink>
          <NavLink to={"/Cat"}>Cats</NavLink>
          <NavLink to={"/Dog"}>Dogs</NavLink>
        </nav>
        </div>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/Cat" element={<Cat/>}/>
          <Route path="/Dog" element={<Dog/>}/>
        </Routes>

      </div>
      );
  }
    

