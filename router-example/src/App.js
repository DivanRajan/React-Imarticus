import logo from './logo.svg';
import './App.css';
import About from './About';
import Contact from './Contact';
import Location from './Location';
import { Routes,Route,Link } from 'react-router-dom';

function App() {
  return(

    <div className="App-header">
      <nav>
        <ul>
          <li>
          <Link to ="/">Home</Link>||
          </li>
<li>
        <Link to ="/contact">Contact</Link>||
        </li>
        <li>
        <Link to ="/location">Place</Link>
        </li>
      </ul>
      </nav>
      <Routes>
        <Route path="/" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/location" element={<Location />}/>
        </Routes>
    </div>
  );
}
export default App;
