import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homee from './Pages/Appoiments/Homee/Homee';
import Homes from './Pages/Home/Homes';
import Login from './Pages/Login/Login';
import RequridAuth from './Pages/Login/RequridAuth';
import Singup from './Pages/Login/Singup';
import Navbar from './Pages/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppoiment from './Pages/Dashboard/MyAppoiment';
import MyReviws from './Pages/Dashboard/MyReviws';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-8'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homes />}></Route>
        <Route path='/Appoiment' element={
          <RequridAuth>
            <Homee />
          </RequridAuth>
        }></Route>
        <Route path='/dashboard' element={<RequridAuth>
          <Dashboard />
        </RequridAuth>}>
          <Route index element={<MyAppoiment />}></Route>
          <Route path='/dashboard/reviws' element={<MyReviws />}></Route>
        </Route>

        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Singup />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
