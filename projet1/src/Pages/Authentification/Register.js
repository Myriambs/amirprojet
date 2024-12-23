import React, { useState } from 'react'
import './registerStyle.css'
import { RegisterAuth } from '../../API/AuthApi'
import { useNavigate } from 'react-router-dom'



const Register = () => {
    const Navigate = useNavigate()
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [age, setAge] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const AddingUser = async (values) => {
      try{
        await RegisterAuth(values)
        await alert('Utilisateur ajouté')
        Navigate('/login')
    } catch(err) {
      alert('Inscription échouée, veuillez réessayer')
    }
  }

  return (
    <div><section className="bodyAuth">
    <div className="sectionAuth">
      <div className="container">
        <div className="user signinBx">
          <div className="imgBx">
            <img src="../../../assets/3.jpg" alt="Dj" />
          </div>
          <div className="formBx">
            <form>
              <h2>Devenir un Loconadien</h2>
  
              <input type="text" name="fistName"  value={firstName}  onChange={(e)=>setFirstName(e.target.value)} placeholder='Prénom' required/>
              <input type="text" name="lasName"  value={lastName}  onChange={(e)=>setLastName(e.target.value)} placeholder='Nom' required/>
              <input type="text" name="age"  value={age}  onChange={(e)=>setAge(e.target.value)} placeholder='Age' required/>
              <input type="text" name="email"  value={email}  onChange={(e)=>setEmail(e.target.value)}  placeholder='Email'  required/>
              <input type="password" name="password"   value={password}  onChange={(e)=>setPassword(e.target.value)} placeholder='Mot de passe' required/>
  
              <button classNameName='btn' type="button" name="" value="register"   onClick={()=>AddingUser({firstName, lastName, age, email, password})}  >S'inscrire</button>
              <p className="signup">
                <a href="/login"> Vous êtes déjà un Loconadien ? </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default Register