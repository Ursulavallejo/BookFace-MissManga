import {FC} from 'react'
import './registerPopup.css'

interface Props {
    name: string
    openRegisterFunc: () => void
}

const RegisterPopup:FC<Props> = ({name, openRegisterFunc}) => {

  return (
    <div className='popup'>
            <h3 className='popup-heading'>Congratulations {name}!</h3>
            <h3 className='congrats-text'>You have successfully been registered!</h3>
            <button className='ok-btn' onClick={() => openRegisterFunc()}>OK</button>
    </div>
  )
}

export default RegisterPopup