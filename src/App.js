import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './Containers/Homepage/Homepage';
import About from './Containers/Aboutpage/Aboutpage';
import Channel from './Containers/Channelspage/Channelspage';
import Getstarted from './Containers/Getstartedpage/Getstartedpage';
import Contactus from './Containers/Contactus/Contactus';


function App() {
   return (
    <Router>
     <div>
    <Routes>
    <Route path='/'  element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/channels' element={<Channel/>} />
    <Route path='/getstarted' element={<Getstarted/>} />
    <Route path='/contactus' element={<Contactus/>} />
    </Routes> 
    </div>
    </Router>
);
}
export default App;
