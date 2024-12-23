import React, { useState } from 'react'
import './loginStyle.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const Navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const LoginUser = async(values) => {
        try{
          const res = await axios.post('http://localhost:5000/user/login', values)
          await localStorage.setItem('token', res.data.token)
          console.log('login user',res.data)

          console.log('token user',res.data.token)
           Navigate('/privateRoute')


        } catch(err) {
          alert('Connexion échouée')
        }
    }
    
    return (
    <div>
        <section className="bodyAuth">
    <div className="sectionAuth">
      <div className="container">
        <div className="user signinBx">
          <div className="imgBx">
            <img src='../../../assets/3-Soulwhen.jpg' alt="Logo Loconada" />
          </div>
          <div className="formBx">
            <form>
              <h2>Bienvenue cher Loconadien </h2>
              <input type="email" name="email" placeholder="email"  value={email} onChange={(e)=>setEmail(e.target.value)} required />
              <input type="password" name="password" placeholder="Password"   value={password} onChange={(e)=>setPassword(e.target.value)} required />
  
              <button classNameName='btn' type="button" name="" value="Login"  onClick={()=>LoginUser({email, password})}   > Se connecter </button>
              
              
              
              
              
              <p className="signup">
                <a href="/register">Devenir un Loconadien? Devenez un !</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default Login