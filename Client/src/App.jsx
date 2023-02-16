import './App.css'
import Home from './pages/Routes/Home'
import Perfil from './pages/Routes/Perfil'
import Login from './pages/Routes/Login'
import SignUp from './pages/Routes/SignUp'
import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom'
import ProtectedRoutes from './components/ProtectedRoutes'
import MainLayout from './pages/MainLayout'

function App() {
  return (
    <HashRouter>
      <div className="App">

        <Routes >
        {/* Las rutas que no deban tener Navbar y Footer deberan declararse aca */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />


          <Route element={< MainLayout />}>
            <Route path="/" element={<Home />} />

            <Route element={<ProtectedRoutes />}>
              {/* Las rutas en las que deba aparecer Navbar y Footer iran aca dentro */}
              <Route path="/perfil" element={<Perfil />} />
              
            </Route>
          </Route>
        </Routes>

      </div>
    </HashRouter >
  )
}

export default App
