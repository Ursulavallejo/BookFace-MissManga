import {FC, useState} from 'react'
import UserService from '../api/service/UserService'
import RegisterPopup from '../registerPopup/RegisterPopup'
import './register.css'

interface Props {
  openRegisterFunc: () => void
}

const Register:FC<Props> = ({openRegisterFunc}) => {

  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [popup, setPopup] = useState(false)
  const [name, setName] = useState('')

  const registerUser = () => {
    const newUser = {
      username: username,
      password: password,
      email: email,
      active: false
    }

    UserService.createUser(newUser)
    .then(response => {
      console.log(response.data)
      setName(response.data.username)
      setUsername('')
      setPassword('')
      setEmail('')
      setPopup(true)
    })
    .catch(error => console.log(error))

  }


  return (
    <>
    {popup ?<RegisterPopup name={name} openRegisterFunc={openRegisterFunc}/>
    :  <div className='register-card'>
    <h3 className='fill-in'>Please fill in the register form below ...</h3> 
  
    <div className='register-email-div'>
        <p className='register-email'>Email:</p>
        <input
            className='register-email-input'
            value={email}
            onChange={e => setEmail(e.target.value)}
        />
    </div>

    <div className='register-username-div'>
        <p className='register-username'>Username:</p>
        <input
            className='register-username-input'
            value={username}
            onChange={e => setUsername(e.target.value)}
        />
    </div>

    <div className='register-password-div'>
        <p className='register-password'>Password:</p>
        <input
            className='register-password-input'
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
        />
    </div>
    
    <button className='register-button' onClick={() => registerUser()}>Register Now!</button>

</div>
    }
   
    </>
  )
}

export default Register