import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './Containers/Homepage/Homepage';
import About from './Containers/Aboutpage/Aboutpage';
import Channel from './Containers/Channelspage/Channelspage';
import Getstarted from './Containers/Getstartedpage/Getstartedpage';
import Readmore from './Containers/Readmore/Readmore';


function App() {
   return (
    <Router>
     <div>
    <Routes>
    <Route path='/'  element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/channels' element={<Channel/>} />
    <Route path='/getstarted' element={<Getstarted/>} />
    <Route path='/readmore' element={<Readmore/>} />
    </Routes> 
    </div>
    </Router>
);
}

export default App;
