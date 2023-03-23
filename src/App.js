import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import { Route, Routes } from 'react-router-dom';
import Navigation from './pages/Navigation';

function App() {

  return (
    <div className="body">
      <Navigation  />
      <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/signin' element={<SignIn />}></Route>
      </Routes>
    </div>
  );
}

export default App;
