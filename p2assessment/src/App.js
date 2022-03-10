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
          <Navlink to={"/"}>Landing</Navlink>
          <NavLink to={"/Cats"}>Cats</NavLink>
          <Navlink to={"/Dogs"}>Dogs</Navlink>
        </nav>
        </div>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/Cats" element={<Cats/>}/>
          <Route path="/Dogs" element={<Dogs/>}/>
        </Routes>

      </div>
      );
  }
    

