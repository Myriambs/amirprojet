import React , {useState} from 'react'
import { ReservationUser } from '../../API/AuthApi'
import { useNavigate } from 'react-router-dom'

const Reservation = () => {
        const Navigate = useNavigate()
        const [fullName, setFullName] = useState("")
        const [email, setEmail] = useState("")
        const [phone, setPhone] = useState("")
        const [numberOfTickets, setNumberOfTickets] = useState("")
    
        const AddingReservation = async (values) => {
          try{
            await ReservationUser(values)
            await alert('Résérvation confirmée, un email de validation sera envoyé')
            Navigate('/privateRoute')
        } catch (err) {
          alert('Réservation échouée, veuillez réessayer')
        }
      }

  return (
    <div><section className="bodyAuth">
    <div className="sectionAuth">
      <div className="container">
        <div className="user signinBx">
          <div className="imgBx">
            <img src="../../../assets/icone edition 1.png" alt="logo_loconada" />
          </div>
          <div className="formBx">
            <form>
              <h2>Résérver vos tickets</h2>
  
              <input type="text" name="fullName" value={fullName} onChange={(e)=> setFullName(e.target.value)} placeholder='Nom Complet' required/>
              <input type="text" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Email' required/>
              <input type="text" name="phone" value={phone} onChange={(e)=> setPhone(e.target.value)} placeholder='Téléphone' required/>
              <input type="text" name="numberOfTickets" value={numberOfTickets} onChange={(e)=> setNumberOfTickets(e.target.value)} placeholder='Nombre des tickets' required/>
  
              <button classNameName='btn' type="button" name="" value="reservation" onClick={()=> AddingReservation({fullName, email, phone, numberOfTickets})}>Confirmer</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default Reservation