import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Home from './Pages/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './ContexApi/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Authentication/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';
import Payment from './Pages/Dashboard/Payment/Payment';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import AddDoctor from './Pages/Dashboard/Dashboard/AddDoctor/AddDoctor';



function App() {
  return (
    
    <div className="App">
     <AuthProvider>
            <Router>  
            <Navigation/>
          <Routes>
            <Route exact path="/" element={<Home/>}>
            </Route>
            <Route path="/Home" element={<Home/>}>
            </Route>
            <Route path="/login" element={<Login/>}>
            </Route>
            <Route path="/Register" element={<Register/>}>
            </Route>
            <Route path="/Appointment" element={<PrivateRoute><Appointment/></PrivateRoute>}>
            </Route>
            <Route path="/Dashboard" element={<Dashboard/>}>
                <Route path='/Dashboard' element={<DashboardHome/>}>
                </Route>
                <Route path='/Dashboard/Payment/:AppointmentId' element={  <Payment/>}>
                </Route>
                <Route path='/Dashboard/MakeAdmin' element={<MakeAdmin/>}>
                </Route>
                <Route path='/Dashboard/addDoctor' element={ <AddDoctor/>}>
                </Route>
            </Route>
          </Routes>
        </Router>
     </AuthProvider>
    </div>
    
  );
}

export default App;
