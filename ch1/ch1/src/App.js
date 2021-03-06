import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './components/Pages/Home'
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Navbar from './components/Navbar';


function App() {
  return (
    <BrowserRouter>

<Navbar/>
{/* <Route/> */}
    
      <Route exact path = "/" component={Home}/>
      <Route path = "/about" component={About}/>
      <Route path = "/contact" component={Contact}/>
    
    </BrowserRouter>
   
  );
}

export default App;
