import React from 'react'
import './AboutStyle.css'

const About = () => {
  return (
    
    
    <div className='About'>
      <div className='Poster'>
        <img style={{width:'100%'}} src='../../../assets/poster.png' alt='Poster Loconada' />
      </div>
      <div className='title'>
      <div className='logo-loconada'>
        <img style={{width:'30%'}} src='../../../assets/logo kbir.png' alt='Logo loconada' />
      </div>
      <div className='Paragraphe'>
        <p>Loconada possède une riche histoire d'événements, <br/>
            chacun marqué par un thème unique qui crée une expérience inoubliable. <br/> 
              Chaque édition est une nouvelle aventure, alliant créativité, musique <br/> 
                et culture pour offrir à nos visiteurs une immersion totale <br/>
                  dans des atmosphères différentes à chaque fois.</p>
      </div>
      <div className="lien">
        <a href='/edition'>Editions</a>
      </div>
    </div>
    <div className="InfoBox">
        <div className="InfoBox-left">
          <div className="logo-box">
            <img style={{width:'40%'}} src='../../../assets/logo sghir.png' alt='Logo Box' />
          </div>
          <p>
          Loconada n'est pas simplement un <br/>
          événement, c'est une véritable célébration <br/>
          de la musique afro, de la culture et de la <br/>
          communauté. <br/>
          Avec des rythmes <br/>
          entraînants et une énergie contagieuse, <br/>
          ce rassemblement réunit les passionnés de <br/>
          musique et les ravers pour vivre les <br/>
          vibrations de l'Afrobeat, du dancehall et <br/>
          bien plus encore. 
          </p>
        </div>
        <div className="InfoBox-right">
          <img src='../../../assets/4.jpg' alt='Illustration' />
        </div>
      </div>
  </div>

  )
}

export default About