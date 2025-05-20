import { Route, Routes } from 'react-router-dom';
import Home from '../src/pages/home/'
import LoginPage from '../src/pages/login/'
import SignUpPage from '../src/pages/signup/'
import NotFound from '../src/pages/404/'
import ForgotPass from '../src/pages/forgotpass/'
import Users from '../src/pages/users/'
import './App.css'

function App() {


  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/signup' element={<SignUpPage/>} />
      <Route path ='*' element={<NotFound/>} />
      <Route path='forgotpass' element={<ForgotPass/>} />
      <Route path='users' element={<Users/>}/>
    </Routes>
  )
}

export default App
