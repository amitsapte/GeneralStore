// 
import  {   Link, Route,  BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';

import Home from './home/home';
import UserLogin from './login/userlogin';


function App() {



  return (
      <Router>
        <nav>
          <Link to={"/Login"}>  </Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Login' element={<UserLogin/>}></Route>
        </Routes>
      </Router>
  );
}

export default App;
