import React from 'react'
import './AccueilStyle.css'

const Accueil = () => {
  return (
    <div className="hero">
            <div className="logo">
                <h1>Bienvenue à <br/> Loconada</h1>
            </div>
            <div className="tagline">
                <p>Locanda vous offre une expérience immersive quand vous laissez des souvenirs inoubliables. <br/> Rejoignez-nous et faites partie de notre aventure !</p>
            </div>
            <div className="cta">
                <a href='/login'>Se connecter</a>
                <a href='/register'>S'inscrire</a>
            </div>
    </div>
  )
}

export default Accueil