import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Perfil from './pages/Perfil'
import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom'

function App() {
  return (
    <HashRouter>
      <Navbar />

      <div className="App">

        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
