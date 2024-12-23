import React, { useEffect, useState } from 'react';
import './Styles/NavbarStyle.css';
import { FetchUser } from '../API/AuthApi';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [userInfo, setUserInfo] = useState({});
  const [showPopup, setShowPopup] = useState(false); // To control popup visibility
  const Navigate = useNavigate();

  // Fetch user info
  const GetUser = async () => {
    const data = await FetchUser();
    console.log(data);
    setUserInfo(data);
  };

  useEffect(() => {
    GetUser();
  }, []);

  // Handle logout
  const logout = () => {
    setShowPopup(true); // Show popup
  };

  // Close popup and redirect
  const handleClosePopup = () => {
    setShowPopup(false);
    localStorage.removeItem('token');
    Navigate('/login');
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img style={{ width: '20%', paddingLeft: '200px' }} src="../../assets/icone.png" alt="Logo" />
        </div>
        <ul className="nav-links">
          {userInfo.role === "Admin" ? (
            <>
              <li><a href="/">Accueil</a></li>
              <li><a href="/about">À propos</a></li>
              <li><a href="/edition">Éditions</a></li>
              <li><a href="/evenemtsList">Événements</a></li>
              <li><a href="/users">Utilisateurs</a></li>
              <li><a href="/reservationList">Réservations</a></li>
              <li><button onClick={logout}>Logout</button></li>
            </>
          ) : null}

          {userInfo.role === "User" ? (
            <>
              <li><a href="/">Accueil</a></li>
              <li><a href="/about">À propos</a></li>
              <li><a href="/edition">Éditions</a></li>
              <li><button onClick={logout}>Logout</button></li>
            </>
          ) : null}
        </ul>

        {/* Avatar and user name */}
        <div className="user-info">
    
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE6uTb77WAkKgg_5HmlVyM8_dRab-AnxdCaje2hapWcEQjv4HUV8_A8XXj4TAKx2DP2_4&usqp=CAU"
              alt="User Avatar"
              className="user-avatar"
            />
          
          <p className="user-name">{userInfo.firstName || 'Utilisateur'}</p>
        </div>
      </nav>

      {showPopup && (
        <div className="popup-container">
          <div className="popup">
            <h2>Hope to see you again, {userInfo.firstName || userInfo.lastName || 'User'}!</h2>
            <button className="popup-button" onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
