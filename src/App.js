import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Store from './Store';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Contact from './Contact';
import Gallery from './Gallery';

function App() {
  return (
    <Router>   
    <div className="App">
      <Navbar/>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/store" element={<Store/>}/>   
          <Route exact path="/contact" element={<Contact/>}/>  
          <Route exact path="/gallery" element={<Gallery/>}/> 
          

        </Routes>

      </div>
    </div>
    </Router>
  );
}

export default App;
