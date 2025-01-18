import Navbar from './components/nav/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Events from './components/pages/Events';
import Sermons from './components/pages/Sermons';
import Contact from './components/pages/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
      <Router>
          <div className="app-container">
              <Navbar />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/events" element={<Events />} />
                  <Route path="/sermons" element={<Sermons />} />
                  <Route path="/contact" element={<Contact />} />
              </Routes>
          </div>
      </Router>
  );
}

export default App;
