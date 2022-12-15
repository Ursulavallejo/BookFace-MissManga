import {FC, useState} from 'react'
import './loginPage.css'
import Register from '../register/Register'
import Main from '../../views/main/Main'
import sailorgirls from '../../img/maintop.png'
import UserService from '../api/service/UserService'
import { useNavigate } from 'react-router-dom'

const LoginPage: FC = (id, active) => {
  const [openRegister, setOpenRegister] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
 

  const openRegisterFunc = () => {
      setOpenRegister(!openRegister)

  }

  const LoginFunc = () => {
    const user = {
      username: username,
      password: password
    }

    UserService.verifyUser(user)
    .then(response => {
     

      if (response.data.message === true) {
        console.log(response.data.id)
        localStorage.setItem("userId", response.data.id)
        const _active = {
          newActiveStatus: true
        }
        UserService.changeActive(response.data.id, _active)
        .then(res => {
          localStorage.setItem("username", username)
          navigate('/main')  
        })
       
      } else {
        alert('Wrong password or username!')
      }
    })
    .catch(error => console.log(error))
  }



  return (
    <>
    {openRegister === false ?
          <div className='login-div'>
          <img className='sailor-pic' src={sailorgirls} alt="sailor moon"/>
          <section className='login-square'>
            <h1 className='signin-heading'>SIGN IN</h1>
            <div className='login-input-div'>
                <input
                  className="username-login-input"
                  placeholder='Username'
                  value={username}
                  data-testid='textUser'
                  onChange={e => setUsername(e.target.value)}
                />
                <input

                  className='password-user-input'
                  placeholder='Password'
                  type="password"
                  value={password}
                  data-testid='inputPassword'
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
         

              <div className='button-area'>
                  <button className='login-btn' data-testid='btnLogInTest' onClick={() => LoginFunc()}>Go!</button>
                  <div className='register-div'>
                      <p className='not-a-member'>Not a member yet?</p>
                      <p onClick={() => openRegisterFunc()} className='register'><i>Register</i></p>
                  </div>
              </div>
          </section>
          </div>
          : <Register openRegisterFunc={openRegisterFunc}/>}
     
    </>
  )
}

export default LoginPage