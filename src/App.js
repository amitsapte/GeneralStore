// 
import  {   Link, Route,  BrowserRouter as Router, Routes  } from 'react-router-dom';
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
         
          {/* Redirect any non-existing route (like /GeneralStore) to the home page */}
        <Route path="/GeneralStore"  element={<Home/>}>
          
        </Route>
          <Route path='/Login' element={<UserLogin/>}></Route>
        </Routes>
      </Router>
  );
}

export default App;
