import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Testimonials from './Components/Testimonials';
import Works from './Components/Works';

function App() {
  return (
    <div className="App">
     <Home />
     <About />
     <Works />
     <Testimonials/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
