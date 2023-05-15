import './App.css';
import { Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/home/Home';
import Error from './components/Pages/error/Error';
import Login from './components/Pages/login/Login';
import Signup from './components/Pages/signup/Signup';
import ResetPassword from './components/Pages/reset/ResetPassword';
import Dashboard from './components/Pages/dashboard/Dashboard';
import Cart from './components/Pages/cart/Cart';

function App() {
  return (
    <div>
        {/* <Navbar /> */}
        <Routes>
          <Route exact path='*' element={<Error />} />
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/resetpassword' element={<ResetPassword />}/>
          <Route exact path='/dashboard' element={<Dashboard />} />
          <Route exact path='/cart' element={<Cart />} />
        </Routes>
        {/* <Footer /> */}
    </div>
  );
}

export default App;
