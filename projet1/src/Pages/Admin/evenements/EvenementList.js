import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './reservation.css'; // Assurez-vous que le CSS est dans ce fichier

const EvenementList = () => {
  const [events, setEvents] = useState([]); // État pour les événements récupérés
  const [eventModalVisible, setEventModalVisible] = useState(false); // Affichage de la modal
  const [selectedEvent, setSelectedEvent] = useState(null); // Événement sélectionné

  // Récupérer les événements du backend
  useEffect(() => {
    axios.get('http://localhost:5000/event')
      .then(response => {
        setEvents(response.data); // Mettre à jour l'état avec les événements
      })
      .catch(error => {
        console.error("Il y a eu une erreur lors de la récupération des événements :", error);
      });
  }, []); // Le tableau vide signifie que l'effet s'exécute une seule fois au montage

  // Afficher les détails d'un événement
  const viewEvent = (index) => {
    setSelectedEvent(events[index]);
    setEventModalVisible(true);
  };

  // Supprimer un événement
  const deleteEvent = (index) => {
    axios.delete(`http://localhost:5000/event/${events[index]._id}`)
      .then(() => {
        // Supprimer l'événement de l'état local après la suppression côté serveur
        const updatedEvents = events.filter((_, i) => i !== index);
        setEvents(updatedEvents);
      })
      .catch(error => {
        console.error("Il y a eu une erreur lors de la suppression de l'événement :", error);
      });
  };

  // Fermer la modal
  const closeModal = () => {
    setEventModalVisible(false);
  };

  return (
    <div className="bodyEv">
      {/* Bouton Home */}
      <a href="/privateRoute" className="home-button">🏠</a>

      <div className="container">
        <table>
          <thead>
            <tr>
              <th>Nom de l'événement</th>
              <th>Edition</th>
              <th>Description</th>
              <th>Image</th>
              <th>Location</th>
              <th>Date</th>
              <th>Lineup</th>
              <th>Prix</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <tr key={event._id}>
                <td>{event.eventName}</td>
                <td>{event.edition}</td>
                <td>{event.description}</td>
                <td><img src={event.image} alt="Event" width="50" /></td>
                <td>{event.location}</td>
                <td>{event.date}</td>
                <td>{event.lineup}</td>
                <td>{event.price}€</td>
                <td>
                  <button className="edit">✏️</button>
                  <button className="view" onClick={() => viewEvent(index)}>👁️</button>
                  <button className="delete" onClick={() => deleteEvent(index)}>🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal pour afficher les détails de l'événement */}
      {eventModalVisible && selectedEvent && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Nom de l'événement: {selectedEvent.eventName}</h2>
            <p>Description: {selectedEvent.description}</p>
            <p>Lieu: {selectedEvent.location}</p>
            <p>Date: {selectedEvent.date}</p>
            <p>Lineup: {selectedEvent.lineup}</p>
            <p>Prix: {selectedEvent.price}€</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default EvenementList;
