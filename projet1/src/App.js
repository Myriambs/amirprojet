import { Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './Pages/Authentification/Register';
import Login from './Pages/Authentification/Login';
import PrivateRoute from './Pages/Authentification/PrivateRoute';
import Accueil from './Pages/Accueil/Accueil';
import Footer from './Components/Footer';
import About from './Pages/About/About';
import Edition from './Pages/Editions/Edition';
import Reservation from './Pages/Reservation/Reservation';
import ReservationList from './Pages/Admin/reservations/ReservationList';
import EvenementList from './Pages/Admin/evenements/EvenementList';
import UserList from './Pages/Admin/users/UserList';
import Navbar from './Components/Navbar';



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Accueil/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/privateRoute' element={<PrivateRoute/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/edition' element={<Edition/>} />
        <Route path='/reservation' element={<Reservation/>} />

{/* partie Admi,
 */}
        <Route path='/reservationList' element={<ReservationList/>} />
        <Route path='/users' element={<UserList/>} />
        <Route path='/evenemtsList' element={<EvenementList/>} />


      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
