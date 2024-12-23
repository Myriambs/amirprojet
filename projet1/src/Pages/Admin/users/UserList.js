import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './reservation.css'; // Assurez-vous que le CSS est dans ce fichier

const UserList = () => {
  const [users, setUsers] = useState([]); // État pour les utilisateurs récupérés
  const [userModalVisible, setUserModalVisible] = useState(false); // Affichage de la modal
  const [selectedUser, setSelectedUser] = useState(null); // Utilisateur sélectionné

  // Récupérer les utilisateurs du backend
  useEffect(() => {
    axios.get('http://localhost:5000/user/all')
      .then(response => {
        // Filtrer les utilisateurs avec le rôle "User"
        const filteredUsers = response.data.alluser.filter(user => user.role === 'User');
        setUsers(filteredUsers); // Mettre à jour l'état avec les utilisateurs filtrés
      })
      .catch(error => {
        console.error("Il y a eu une erreur lors de la récupération des utilisateurs :", error);
      });
  }, []); // Le tableau vide signifie que l'effet s'exécute une seule fois au montage

  // Afficher les détails d'un utilisateur
  const viewUser = (index) => {
    setSelectedUser(users[index]);
    setUserModalVisible(true);
  };

  // Supprimer un utilisateur
  const deleteUser = (index) => {
    axios.delete(`http://localhost:5000/user/${users[index]._id}`)
      .then(() => {
        // Supprimer l'utilisateur de l'état local après la suppression côté serveur
        const updatedUsers = users.filter((_, i) => i !== index);
        setUsers(updatedUsers);
      })
      .catch(error => {
        console.error("Il y a eu une erreur lors de la suppression de l'utilisateur :", error);
      });
  };

  // Fermer la modal
  const closeModal = () => {
    setUserModalVisible(false);
  };

  return (
    <div className="bodyEv">
      {/* Bouton Home */}
      <a href="/privateRoute" className="home-button">🏠</a>

      <div className="container">
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Email</th>
              <th>Téléphone</th>
              <th>Rôle</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.role}</td>
                <td>
                  <button className="edit">✏️</button>
                  <button className="view" onClick={() => viewUser(index)}>👁️</button>
                  <button className="delete" onClick={() => deleteUser(index)}>🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal pour afficher les détails de l'utilisateur */}
      {userModalVisible && selectedUser && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Nom: {selectedUser.name}</h2>
            <p>Email: {selectedUser.email}</p>
            <p>Téléphone: {selectedUser.phone}</p>
            <p>Rôle: {selectedUser.role}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserList;
