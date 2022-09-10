import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import LoginPage from './Pages/LoginPage';
import UserRegister from './Pages/User/UserRegister';
import UserLandingPage from './Pages/User/UserLandingPage';
import UserRentalsPage from './Pages/User/UserRentalsPage';
import StaffDashboard from './Pages/Staff/StaffDashboard';
import StaffRentalPage from './Pages/Staff/StaffRentalPage';
import AdminStaffControl from './Pages/Admin/AdminStaffControl';
import AdminUserControl from './Pages/Admin/AdminUserControl';
import { useEffect, useState } from 'react';
import NavBar from './Components/NavBar';
import UserBooks from './Pages/User/UserBooks';
function App() {
  sessionStorage.setItem('user', JSON.stringify({role:'staff'}))
  let sessionUser = JSON.parse(sessionStorage.getItem('user'))
  const [user, setUser] = useState(sessionUser)
  useEffect(()=>{
    if(user != null){
      sessionStorage.setItem('user', JSON.stringify(user))
    }
  },[user])

  const {pathname} = useLocation()
  console.log({pathname})
  return (
    <div className="App">
      {user && <NavBar user={user} setUser={setUser}/>}
    
      <Routes>
        <Route path="/login" element={<LoginPage />}/>

        {/* users */}
        <Route path="/register" element={<UserRegister />}/>
        <Route path="/userLandingPage" element={<UserLandingPage />}/>
        <Route path="/userRentalsPage" element={<UserRentalsPage />}/>   {/* orders placed by user */}
        <Route path="/userBooks" element={<UserBooks />}/>   {/* books rented by user   ...can return it from here...check due date */}

        {/* staff */}
        <Route path="/staffDashboard" element={<StaffDashboard />}/> {/*add and edit books*/}
        <Route path="/staffRental" element={<StaffRentalPage />}/>   {/*accept or decline book requests*/}

        {/* admin */}
        <Route path="/adminStaffControl" element={<AdminStaffControl />}/>
        <Route path="/adminUserControl" element={<AdminUserControl />}/>
    </Routes>
    </div>
  );
}

export default App;
