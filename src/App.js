import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import Navigation from './pages/Navigation';

function App() {

  return (
    <div className="body">
      <Navigation  />
      <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
      </Routes>
    </div>
  );
}

export default App;
