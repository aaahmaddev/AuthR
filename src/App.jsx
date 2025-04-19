import { Route, Routes } from 'react-router-dom';
import Home from './assets/pages/home'
import LoginPage from './assets/pages/login'
import SignUpPage from './assets/pages/signup'
import NotFound from './assets/pages/404'
import ForgotPass from './assets/pages/forgotpass'
import './App.css'

function App() {


  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/signup' element={<SignUpPage/>} />
      <Route path ='*' element={<NotFound/>} />
      <Route path='forgotpass' element={<ForgotPass/>} />
    </Routes>
  )
}

export default App
