import './App.css';
import './Fruit.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Service from './components/Service';
import Nav from './components/Nav';
import Footer from './components/Footer';

//  import Todolist from './components/Todolist';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
          <div className="App">
          {/* <Todolist/> */}
          
 <Router>
          <Nav/> 



          <Routes>

          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Service" element={<Service />} />
          <Route exact path="/Service" element={<Service />} />
          <Route exact path="/Contact" element={<Contact />} />



                {/* <Route exact path="/"><Home/></Route>
                <Route path="/About"><About/></Route>
                <Route path="/Service"><Service/></Route>
                <Route path="/ContactUs" id="ContactUs"><ContactUs/></Route> */}
                </Routes>
              <Footer/>
              </Router>
          </div> 

  )
}

export default App;
