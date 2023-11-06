import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Button, Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavbarComp } from './components/indexComp'
import {Home, About, Contact} from './pages/indexPage'

function App() {

  return (
    <div>
      <Router>
        <NavbarComp/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='*' element={<h1>Error</h1>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
